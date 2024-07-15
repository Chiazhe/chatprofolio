import prisma from "@/lib/db";

export const getUserByUsername = async (username: string) => {
  const user = await prisma.user.findFirst({
    where: {
      username: { equals: username, mode: "insensitive" },
    },
  });

  return user;
};
