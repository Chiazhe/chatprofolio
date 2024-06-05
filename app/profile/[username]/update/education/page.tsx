import { auth } from "@/lib/auth";
import React from "react";
import prisma from "@/lib/db";
import { convertEducationDataFromBackend } from "@/lib/helper";
import UpdateEducationForm from "@/app/profile/_components/education/UpdateEducationForm";

const page = async ({
  params: { username },
}: {
  params: { username: string };
}) => {
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
      <UpdateEducationForm existingEducations={await getUserSpecialization()} />
    </div>
  );
};

export default page;
