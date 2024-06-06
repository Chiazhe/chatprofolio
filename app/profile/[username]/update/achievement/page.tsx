import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import React from "react";
import { convertAchievementDataFromBackend } from "@/lib/helper";
import UpdateAchievementForm from "@/app/profile/[username]/update/_components/achievement/UpdateAchievementForm";

const page = async ({
  params: { username },
}: {
  params: { username: string };
}) => {
  const session = await auth();
  const user = session?.user;

  if (!user || user.username !== username) return <div>Unauthorized</div>;

  const getUserProject = async () => {
    const achievementData = await prisma.achievement.findMany({
      where: {
        holder: {
          username: username,
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
