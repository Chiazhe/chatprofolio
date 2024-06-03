"use client";

import { z } from "zod";

export const ContactFormSchema = z.object({
  id: z.number().optional(),
  leetcode: z.string(),
  hackerRank: z.string(),
  github: z.string(),
  email: z.string(),
  linkedIn: z.string(),
  instagram: z.string(),
  twitter: z.string(),
  facebook: z.string(),
  youtube: z.string(),
  mediumDigest: z.string(),
  phoneNumber: z.string(),
});

export type ContactFormType = z.infer<typeof ContactFormSchema>;
