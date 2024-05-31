"use client";
import { z } from "zod";

const projectDescriptions = z.object({
  projectDescription: z.string().min(1),
});

const technologyUsed = z.object({
  technology: z.string().min(1),
});

const ProjectSchema = z
  .object({
    id: z.number().optional(),
    projectTitle: z.string().min(1).max(50),
    projectDescription: z.array(projectDescriptions),
    projectUrl: z.string(),
    githubLink: z.string(),
    projectImage: z.string(),
    technologyUsed: z.array(technologyUsed),
    startDate: z.date().nullable(),
    endDate: z.date().nullable(),
  })
  .refine((data) => {
    if (data.startDate && data.endDate) {
      return (
        data.endDate.getTime() > data.startDate.getTime(),
        {
          message: "End date cannot be earlier than start date.",
          path: ["endDate"],
        }
      );
    } else return {};
  });

export const projectFormSchema = z.object({
  projects: z.array(ProjectSchema),
});

export type ProjectType = z.infer<typeof ProjectSchema>;
export type ProjectFormType = z.infer<typeof projectFormSchema>;
export type TechnologyUsedType = z.infer<typeof technologyUsed>;
export type ProjectDescriptionType = z.infer<typeof projectDescriptions>;
