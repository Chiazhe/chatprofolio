"use client";

import { z } from "zod";
import {
  aboutLayout,
  educationLayout,
  experienceLayout,
  projectLayout,
  skillLayout,
} from "../layout-data";

export const LayoutPreferenceFormSchema = z.object({
  id: z.number().optional(),
  aboutLayoutPreference: z.enum(aboutLayout),
  experienceLayoutPreference: z.enum(experienceLayout),
  educationLayoutPreference: z.enum(educationLayout),
  projectLayoutPreference: z.enum(projectLayout),
  skillLayoutPreference: z.enum(skillLayout),
});

export type LayoutPreferenceFormType = z.infer<
  typeof LayoutPreferenceFormSchema
>;
