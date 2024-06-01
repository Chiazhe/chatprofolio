"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import { convertAchievementDataToBackend } from "@/lib/helper";
import { AchievementFormType } from "@/lib/zodSchema/achievement";

export const updateAchievement = async (achievements: AchievementFormType) => {
  const session = await auth();
  const user = session?.user;

  if (!user) return Error("Unauthenticated");

  // Get the existing data of user from database
  const existingAchievement = await prisma.achievement.findMany({
    where: {
      holderId: user.id,
    },
  });

  // Data from client to update
  const userAchievements = achievements.achievements;
  // Processed Client Data
  const achievementData = convertAchievementDataToBackend(
    userAchievements,
    user.id as string
  );

  for (const achievement of achievementData) {
    if (achievement.id !== -1) {
      // Existing Record
      await prisma.achievement.update({
        where: {
          id: achievement.id,
        },
        data: achievement,
      });
    } else {
      const { id, ...achievementWithoutId } = achievement;
      // New Record
      await prisma.achievement.create({
        data: achievementWithoutId,
      });
    }
  }

  // IDs of the educations sent from the client
  const clientAchievementIds = achievementData
    .map((achievement) => achievement.id)
    .filter((id) => id !== -1);

  // Determine which educations to delete
  const achievementToDelete = existingAchievement.filter(
    (achievement) => !clientAchievementIds.includes(achievement.id)
  );

  achievementToDelete.map(
    async (achievement) =>
      await prisma.achievement.delete({
        where: { id: achievement.id },
      })
  );
};
