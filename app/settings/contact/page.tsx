import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import React from "react";
import UpdateContactForm from "../_components/contact/UpdateContactForm";

const page = async () => {
  const session = await auth();
  const user = session?.user;

  if (!user) return <div>Please Login first</div>;

  const getContact = async () => {
    const contactData = await prisma.contact.findFirst({
      where: {
        holder: {
          username: user.username as string,
        },
      },
    });

    return contactData;
  };

  return (
    <div>
      <UpdateContactForm contactData={await getContact()} />
    </div>
  );
};

export default page;
