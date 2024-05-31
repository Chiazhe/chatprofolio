import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import React from "react";
import UpdateProjectForm from "./UpdateProjectForm";
import { convertProjectDataFromBackend } from "@/lib/helper";

const UpdateProject = async ({ username }: { username: string }) => {
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
      <h2>Update Project</h2>
      <UpdateProjectForm existingProjects={await getUserProject()} />
    </div>
  );
};

export default UpdateProject;
