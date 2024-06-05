import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import React from "react";
import UpdateSkillForm from "./UpdateSkillForm";
import { convertSkillDataFromBackend } from "@/lib/helper";

const UpdateSkill = async ({ username }: { username: string }) => {
  const session = await auth();
  const user = session?.user;

  if (!user || user.username !== username) return <div>Unauthorized</div>;

  const getUserSkill = async () => {
    const skillData = await prisma.skill.findMany({
      where: {
        holder: {
          username: username,
        },
      },
    });

    return convertSkillDataFromBackend(skillData);
  };

  return (
    <div>
      <UpdateSkillForm existingSkills={await getUserSkill()} />
    </div>
  );
};

export default UpdateSkill;
