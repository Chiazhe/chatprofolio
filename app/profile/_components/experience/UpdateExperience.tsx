import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import React from "react";
import UpdateExperienceForm from "./UpdateExperienceForm";
import { convertExperienceDataFromBackend } from "@/lib/helper";

const UpdateExperience = async ({ username }: { username: string }) => {
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
    <div>
      <UpdateExperienceForm existingExperiences={await getUserExperience()} />
    </div>
  );
};

export default UpdateExperience;
