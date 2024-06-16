import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import React from "react";
import { convertAchievementDataFromBackend } from "@/lib/helper";
import UpdateAchievementForm from "../_components/achievement/UpdateAchievementForm";

const page = async () => {
  const session = await auth();
  const user = session?.user;

  if (!user) return <div>Please Login first</div>;

  const getUserProject = async () => {
    const achievementData = await prisma.achievement.findMany({
      where: {
        holder: {
          username: user.username as string,
        },
      },
    });

    return convertAchievementDataFromBackend(achievementData);
  };

  return (
    <div>
      <UpdateAchievementForm existingAchievements={await getUserProject()} />
    </div>
  );
};

export default page;
