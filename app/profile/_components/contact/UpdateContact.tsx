import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import React from "react";
import { convertAchievementDataFromBackend } from "@/lib/helper";
import UpdateContactForm from "./UpdateContactForm";

const UpdateContact = async ({ username }: { username: string }) => {
  const session = await auth();
  const user = session?.user;

  if (!user || user.username !== username) return <div>Unauthorized</div>;

  const getContact = async () => {
    const achievementData = await prisma.contact.findFirst({
      where: {
        holder: {
          username: username,
        },
      },
    });

    return achievementData;
  };

  return (
    <div>
      <h2>Update Contact</h2>
      <UpdateContactForm contactData={await getContact()} />
    </div>
  );
};

export default UpdateContact;
