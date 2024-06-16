"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import { convertEducationDataToBackend } from "@/lib/helper";
import { EducationFormType } from "@/lib/zodSchema/education";

export const updateEducation = async (educations: EducationFormType) => {
  const session = await auth();
  const user = session?.user;

  if (!user) return Error("Unauthenticated");

  try {
    // Get the existing data of user from database
    const existingEducation = await prisma.education.findMany({
      where: {
        holderId: user.id,
      },
    });

    // Data from client to update
    const userEducations = educations.educations;
    // Processed Client Data
    const educationData = convertEducationDataToBackend(
      userEducations,
      user.id as string,
    );

    for (const education of educationData) {
      if (education.id !== -1) {
        // Existing Record
        await prisma.education.update({
          where: {
            id: education.id,
          },
          data: education,
        });
      } else {
        const { id, ...eduWithoutId } = education;
        // New Record
        await prisma.education.create({
          data: eduWithoutId,
        });
      }
    }

    // IDs of the educations sent from the client
    const clientEducationIds = educationData
      .map((edu) => edu.id)
      .filter((id) => id !== -1);

    // Determine which educations to delete
    const educationsToDelete = existingEducation.filter(
      (edu) => !clientEducationIds.includes(edu.id),
    );

    educationsToDelete.map(
      async (edu) =>
        await prisma.education.delete({
          where: { id: edu.id },
        }),
    );
    return {};
  } catch (e) {
    return { error: "Update failed." };
  }
};
