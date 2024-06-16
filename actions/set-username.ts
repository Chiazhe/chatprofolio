"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import { UsernameFormType } from "@/lib/zodSchema/username";
import { revalidatePath } from "next/cache";

export const setUsername = async (username: UsernameFormType) => {
  const session = await auth();
  const user = session?.user;
  if (!user) return Error("Unauthenticated");

  const inputValue = username.username;

  try {
    const check = await prisma.user.findFirst({
      where: { username: inputValue },
    });

    if (check) return { error: "Username already taken." };

    const res = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        username: inputValue,
      },
    });

    revalidatePath("/");
    return {};
  } catch (e) {
    console.log(e);
    return { error: "Err" };
  }
};
