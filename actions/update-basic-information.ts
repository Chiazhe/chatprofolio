"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import { BasicInformationFormType } from "@/lib/zodSchema/basicInformation";

export const updateBasicInformation = async (
  basicInformation: BasicInformationFormType
) => {
  const session = await auth();
  const user = session?.user;

  if (!user) return Error("Unauthenticated");

  if (user.username !== basicInformation.username) {
    const isDuplicate =
      (await prisma.user.count({
        where: { username: basicInformation.username },
      })) !== 0;

    if (isDuplicate) {
      throw Error("Dupliated value");
    }
  }

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: basicInformation,
  });
};
