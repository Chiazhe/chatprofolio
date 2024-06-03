import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import React from "react";
import UpdateBasicInformationForm from "./UpdateBasicInformationForm";

const UpdateBasicInformation = async ({ username }: { username: string }) => {
  const session = await auth();
  const user = session?.user;

  if (!user || user.username !== username) return <div>Unauthorized</div>;

  const getBasicInformation = async () => {
    const contactData = await prisma.user.findFirst({
      where: {
        username: username,
      },
    });

    return contactData;
  };

  return (
    <div>
      <h2>Update Contact</h2>
      <UpdateBasicInformationForm
        basicInformationData={await getBasicInformation()}
      />
    </div>
  );
};

export default UpdateBasicInformation;
