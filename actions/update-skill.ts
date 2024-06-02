"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import { convertSkillDataToBackend } from "@/lib/helper";
import { SkillFormType } from "@/lib/zodSchema/skill";

export const updateSkill = async (skills: SkillFormType) => {
  const session = await auth();
  const user = session?.user;

  if (!user) return Error("Unauthenticated");

  // Get the existing data of user from database
  const existingSkill = await prisma.skill.findMany({
    where: {
      holderId: user.id,
    },
  });

  // Data from client to update
  const userSkills = skills.skills;
  // Processed Client Data
  const skillsData = convertSkillDataToBackend(userSkills, user.id as string);

  for (const skill of skillsData) {
    if (skill.id !== -1) {
      // Existing Record
      await prisma.skill.update({
        where: {
          id: skill.id,
        },
        data: skill,
      });
    } else {
      const { id, ...skillWithoutId } = skill;
      // New Record
      await prisma.skill.create({
        data: skillWithoutId,
      });
    }
  }

  const clientSkillsIds = skillsData
    .map((skill) => skill.id)
    .filter((id) => id !== -1);

  // Determine which projects to delete
  const skillsToDelete = existingSkill.filter(
    (skill) => !clientSkillsIds.includes(skill.id)
  );

  skillsToDelete.map(
    async (skill) =>
      await prisma.skill.delete({
        where: { id: skill.id },
      })
  );
};
