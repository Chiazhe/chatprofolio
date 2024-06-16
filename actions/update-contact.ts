"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import { ContactFormType } from "@/lib/zodSchema/contact";

export const updateContact = async (contact: ContactFormType) => {
  const session = await auth();
  const user = session?.user;

  if (!user) return Error("Unauthenticated");

  try {
    const exisitingData = await prisma.contact.findFirst({
      where: { holderId: user.id },
    });
    if (exisitingData) {
      await prisma.contact.update({
        where: {
          id: exisitingData.id,
        },
        data: contact,
      });
    } else {
      await prisma.contact.create({
        data: { ...contact, holderId: user.id as string },
      });
    }
    return {};
  } catch (e) {
    return { error: "Update failed." };
  }
};
