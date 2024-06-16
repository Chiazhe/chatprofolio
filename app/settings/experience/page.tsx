import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import React from "react";
import { convertExperienceDataFromBackend } from "@/lib/helper";
import UpdateExperienceForm from "../_components/experience/UpdateExperienceForm";

const page = async () => {
  const session = await auth();
  const user = session?.user;

  if (!user) return <div>Please Login first</div>;

  const getUserExperience = async () => {
    const experienceData = await prisma.experience.findMany({
      where: {
        holder: {
          username: user.username as string,
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
