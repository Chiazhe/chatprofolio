"use client";
import { z } from "zod";

const workDescriptions = z.object({
  workDescription: z.string(),
});

const skillUsed = z.object({
  skill: z.string(),
});

const experienceSchema = z
  .object({
    id: z.number().optional(),
    companyName: z.string().min(2).max(50),
    title: z.string().min(2).max(50),
    workDescription: z.array(workDescriptions),
    skillUsed: z.array(skillUsed),
    companyLogo: z.string(),
    startDate: z.date().nullable(),
    endDate: z.date().nullable(),
  })
  .refine((data) => {
    if (data.startDate && data.endDate) {
      return (
        data.endDate > data.startDate,
        {
          message: "End date cannot be earlier than start date.",
          path: ["endDate"],
        }
      );
    } else return {};
  });

export const experienceFormSchema = z.object({
  experiences: z.array(experienceSchema),
});

export type ExperienceType = z.infer<typeof experienceSchema>;
export type ExperienceFormType = z.infer<typeof experienceFormSchema>;
export type SkillUsedType = z.infer<typeof skillUsed>;
export type WorkDescriptionType = z.infer<typeof workDescriptions>;
