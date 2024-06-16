"use server";
import { signOut } from "@/lib/auth";

export const logout = async () => {
  try {
    const res = await signOut();
    return {};
  } catch (e) {
    return { error: "Logout failed ... Please try again" };
  }
};
