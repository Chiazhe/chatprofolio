import { auth } from "@/lib/auth";
import React from "react";
import UpdateEducationForm from "./UpdateEducationForm";
import prisma from "@/lib/db";
import { convertEducationDataFromBackend } from "@/lib/helper";

const UpdateEducationComponent = async ({ username }: { username: string }) => {
  const session = await auth();
  const user = session?.user;

  if (!user || user.username !== username) return <div>Unauthorized</div>;

  const getUserSpecialization = async () => {
    const educationData = await prisma.education.findMany({
      where: {
        holder: {
          username: username,
        },
      },
    });

    return convertEducationDataFromBackend(educationData);
  };

  return (
    <div>
      <h2>Update Education Component</h2>
      <UpdateEducationForm existingEducations={await getUserSpecialization()} />
    </div>
  );
};

export default UpdateEducationComponent;
