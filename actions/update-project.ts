"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import { convertProjectDataToBackend } from "@/lib/helper";
import { ProjectFormType } from "@/lib/zodSchema/project";

export const updateProject = async (projects: ProjectFormType) => {
  const session = await auth();
  const user = session?.user;

  if (!user) return Error("Unauthenticated");

  // Get the existing data of user from database
  const existingProject = await prisma.project.findMany({
    where: {
      holderId: user.id,
    },
  });

  // Data from client to update
  const userProjects = projects.projects;
  // Processed Client Data
  const projectsData = convertProjectDataToBackend(
    userProjects,
    user.id as string
  );

  for (const project of projectsData) {
    if (project.id !== -1) {
      // Existing Record
      await prisma.project.update({
        where: {
          id: project.id,
        },
        data: project,
      });
    } else {
      const { id, ...projectWithoutId } = project;
      // New Record
      await prisma.project.create({
        data: projectWithoutId,
      });
    }
  }

  // IDs of the projects sent from the client
  const clientProjectsIds = projectsData
    .map((edu) => edu.id)
    .filter((id) => id !== -1);

  // Determine which projects to delete
  const projectsToDelete = existingProject.filter(
    (edu) => !clientProjectsIds.includes(edu.id)
  );

  projectsToDelete.map(
    async (edu) =>
      await prisma.project.delete({
        where: { id: edu.id },
      })
  );
};
