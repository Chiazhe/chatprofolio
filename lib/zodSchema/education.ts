"use client";

import { z } from "zod";

const specializationSchema = z.object({
  specialization: z.string().min(1),
});

const relevantCoursesSchema = z.object({
  relevantCourse: z.string().min(1),
});

const educationSchema = z
  .object({
    id: z.number().optional(),
    institution: z.string().min(2).max(50),
    degree: z.string().min(2).max(50),
    fieldOfStudy: z.string().min(2).max(50),
    specialization: z.array(specializationSchema),
    relevantCourses: z.array(relevantCoursesSchema),
    grade: z.string(),
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

export const educationFormSchema = z.object({
  educations: z.array(educationSchema),
});

export type SpecializationType = z.infer<typeof specializationSchema>;
export type RelevantCourseType = z.infer<typeof relevantCoursesSchema>;
export type EducationType = z.infer<typeof educationFormSchema>;
