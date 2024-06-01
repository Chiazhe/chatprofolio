"use client";

import { z } from "zod";

const achievementDescriptionSchema = z.object({
  description: z.string().min(1),
});

const achievementSchema = z.object({
  id: z.number().optional(),
  achievementTitle: z.string().min(1).max(50),
  achievementProvider: z.string().min(1).max(50),
  achievementDescription: z.array(achievementDescriptionSchema),
  achievementExpiry: z.date().nullable(),
});

export const achievementFormSchema = z.object({
  achievements: z.array(achievementSchema),
});

export type AchievementType = z.infer<typeof achievementSchema>;
export type AchievementFormType = z.infer<typeof achievementFormSchema>;
export type AchievementDescriptionType = z.infer<
  typeof achievementDescriptionSchema
>;
