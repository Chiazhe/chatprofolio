"use client";

import { z } from "zod";
import { aboutLayout } from "../layout-data";

export const PreferenceFormSchema = z.object({
  id: z.number().optional(),
  aboutLayoutPreference: z.enum(aboutLayout, {
    required_error: "You need to select a notification type.",
  }),
  experienceLayoutPreference: z.enum(aboutLayout, {
    required_error: "You need to select a notification type.",
  }),
  educationLayoutPreference: z.enum(aboutLayout, {
    required_error: "You need to select a notification type.",
  }),
  projectLayoutPreference: z.enum(aboutLayout, {
    required_error: "You need to select a notification type.",
  }),
  skillPreference: z.enum(aboutLayout, {
    required_error: "You need to select a notification type.",
  }),
});

export type ContactFormType = z.infer<typeof PreferenceFormSchema>;
