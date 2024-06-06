import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import React from "react";
import { convertExperienceDataFromBackend } from "@/lib/helper";
import UpdateExperienceForm from "@/app/profile/[username]/update/_components/experience/UpdateExperienceForm";

const page = async ({
  params: { username },
}: {
  params: { username: string };
}) => {
  const session = await auth();
  const user = session?.user;

  if (!user || user.username !== username) return <div>Unauthorized</div>;

  const getUserExperience = async () => {
    const experienceData = await prisma.experience.findMany({
      where: {
        holder: {
          username: username,
        },
      },
    });

    return convertExperienceDataFromBackend(experienceData);
  };

  return (
    <div className="w-full">
      <UpdateExperienceForm existingExperiences={await getUserExperience()} />
    </div>
  );
};

export default page;
