import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import React from "react";
import { convertProjectDataFromBackend } from "@/lib/helper";
import UpdateProjectForm from "../_components/project/UpdateProjectForm";

const page = async () => {
  const session = await auth();
  const user = session?.user;

  if (!user) return <div>Please Login first</div>;

  const getUserProject = async () => {
    const projectData = await prisma.project.findMany({
      where: {
        holder: {
          username: user.username as string,
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
