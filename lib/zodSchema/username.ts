"use client";

import { z } from "zod";

export const UsernameFormSchema = z.object({
  username: z
    .string()
    .min(6)
    .max(20)
    .toLowerCase()
    .regex(/^[a-z-]*$/, "Please enter only lowercase letter or - (dash)."),
});

export type UsernameFormType = z.infer<typeof UsernameFormSchema>;
