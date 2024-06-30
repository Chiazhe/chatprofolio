"use server";
import { signOut } from "@/lib/auth";

export const logout = async () => {
  try {
    const res = await signOut();
    return {};
  } catch (e) {
    console.log(e);
    return { error: "Logout failed ... Please try again" };
  }
};
