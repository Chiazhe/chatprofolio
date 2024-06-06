import UpdateContactForm from "@/app/profile/[username]/update/_components/contact/UpdateContactForm";
import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import React from "react";

const page = async ({
  params: { username },
}: {
  params: { username: string };
}) => {
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
      <UpdateContactForm contactData={await getContact()} />
    </div>
  );
};

export default page;
