"use client";

import { z } from "zod";

const SkillSchema = z.object({
  id: z.number().optional(),
  skillName: z.string().min(1).max(50),
  skillYearsOfExperience: z.number(),
  skillRating: z.string().max(10),
});

export const SkillFormSchema = z.object({
  skills: z.array(SkillSchema),
});

export type SkillType = z.infer<typeof SkillSchema>;
export type SkillFormType = z.infer<typeof SkillFormSchema>;
