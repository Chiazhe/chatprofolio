"use client";

import { z } from "zod";

export const BasicInformationFormSchema = z.object({
  name: z.string(),
  username: z
    .string()
    .min(6)
    .max(20)
    .toLowerCase()
    .regex(/^[a-z-]*$/, "Please enter only lowercase letter or - (dash)."),
  firstName: z.string(),
  lastName: z.string(),
  shortIntro: z.string().max(30),
  mediumIntro: z.string().max(100),
  longIntro: z.string().max(1000),
  userLocation: z.string(),
});

export type BasicInformationFormType = z.infer<
  typeof BasicInformationFormSchema
>;
