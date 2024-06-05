import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import React from "react";
import { convertProjectDataFromBackend } from "@/lib/helper";
import UpdateProjectForm from "@/app/profile/_components/project/UpdateProjectForm";

const page = async ({
  params: { username },
}: {
  params: { username: string };
}) => {
  const session = await auth();
  const user = session?.user;

  if (!user || user.username !== username) return <div>Unauthorized</div>;

  const getUserProject = async () => {
    const projectData = await prisma.project.findMany({
      where: {
        holder: {
          username: username,
        },
      },
    });

    return convertProjectDataFromBackend(projectData);
  };

  return (
    <div>
      <UpdateProjectForm existingProjects={await getUserProject()} />
    </div>
  );
};

export default page;
