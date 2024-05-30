import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import React from "react";
import UpdateExperienceForm from "./UpdateExperienceForm";

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

    return experienceData;
  };

  return (
    <div>
      <h2>Update Experience</h2>
      <UpdateExperienceForm existingExperiences={[]} />
    </div>
  );
};

export default UpdateExperience;
