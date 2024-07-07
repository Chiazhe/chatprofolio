"use server";

import prisma from "@/lib/db";

export const createChatbotRecords = async (
  input: string,
  content: string,
  username: string,
) => {
  try {
    await prisma.chatbotRecords.create({
      data: {
        question: input,
        response: content,
        username: username,
      },
    });

    console.log("Record created");
  } catch (e) {
    console.log(e);
  }
};
