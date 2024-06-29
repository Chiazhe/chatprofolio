"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import { LayoutPreferenceFormType } from "@/lib/zodSchema/layout-preference";
import { User } from "@prisma/client";

export const createLayoutPreference = async (
  layoutPreference: LayoutPreferenceFormType,
  user: User,
) => {
  try {
    await prisma.layoutPreference.create({
      data: { ...layoutPreference, holderId: user.id as string },
    });

    return {};
  } catch (e) {
    // console.log(e);
    return { error: "Create failed." };
  }
};

export const updateLayoutPreference = async (
  layoutPreference: LayoutPreferenceFormType,
  layoutPreferenceId: number,
) => {
  const session = await auth();
  const user = session?.user;

  if (!user) return Error("Unauthenticated");

  try {
    await prisma.layoutPreference.update({
      where: { id: layoutPreferenceId },
      data: { ...layoutPreference },
    });

    return {};
  } catch (e) {
    // console.log(e);
    return { error: "Update failed." };
  }
};
