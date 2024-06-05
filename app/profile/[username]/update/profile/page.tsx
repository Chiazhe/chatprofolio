import UpdateBasicInformationForm from "@/app/profile/_components/profile/UpdateBasicInformationForm";
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
      <UpdateBasicInformationForm
        basicInformationData={await getBasicInformation()}
      />
    </div>
  );
};

export default page;
