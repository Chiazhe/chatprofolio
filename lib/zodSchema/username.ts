"use client";

import { z } from "zod";

export const UsernameFormSchema = z.object({
  username: z.string().min(6),
});

export type UsernameFormType = z.infer<typeof UsernameFormSchema>;
