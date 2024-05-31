"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import { convertExperienceDataToBackend } from "@/lib/helper";
import { ExperienceFormType } from "@/lib/zodSchema/experience";

export const updateExperience = async (experiences: ExperienceFormType) => {
  const session = await auth();
  const user = session?.user;

  if (!user) return Error("Unauthenticated");

  // Get the existing data of user from database
  const existingExperience = await prisma.experience.findMany({
    where: {
      holderId: user.id,
    },
  });

  // Data from client to update
  const userExperiences = experiences.experiences;
  // Processed Client Data
  const experienceData = convertExperienceDataToBackend(
    userExperiences,
    user.id as string
  );

  for (const experience of experienceData) {
    if (experience.id !== -1) {
      // Existing Record
      await prisma.experience.update({
        where: {
          id: experience.id,
        },
        data: experience,
      });
    } else {
      const { id, ...experienceWithoutId } = experience;
      // New Record
      await prisma.experience.create({
        data: experienceWithoutId,
      });
    }
  }

  // IDs of the experiences sent from the client
  const clientExperienceIds = experienceData
    .map((edu) => edu.id)
    .filter((id) => id !== -1);

  // Determine which experiences to delete
  const experiencesToDelete = existingExperience.filter(
    (edu) => !clientExperienceIds.includes(edu.id)
  );

  experiencesToDelete.map(
    async (edu) =>
      await prisma.experience.delete({
        where: { id: edu.id },
      })
  );
};
