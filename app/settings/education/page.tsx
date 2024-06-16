import { auth } from "@/lib/auth";
import React from "react";
import prisma from "@/lib/db";
import { convertEducationDataFromBackend } from "@/lib/helper";
import UpdateEducationForm from "../_components/education/UpdateEducationForm";

const page = async () => {
  const session = await auth();
  const user = session?.user;

  if (!user) return <div>Please Login first</div>;

  const getUserEducation = async () => {
    const educationData = await prisma.education.findMany({
      where: {
        holder: {
          username: user.username as string,
        },
      },
    });

    return convertEducationDataFromBackend(educationData);
  };

  return (
    <div>
      <UpdateEducationForm existingEducations={await getUserEducation()} />
    </div>
  );
};

export default page;
