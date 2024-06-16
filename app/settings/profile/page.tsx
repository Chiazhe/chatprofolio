import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import React from "react";
import UpdateBasicInformationForm from "../_components/profile/UpdateBasicInformationForm";
import { BasicInformationFormType } from "@/lib/zodSchema/basicInformation";

const page = async () => {
  const session = await auth();
  const user = session?.user;

  if (!user) return <div>Please Login first</div>;

  const getBasicInformation = async () => {
    const contactData = await prisma.user.findFirst({
      where: {
        username: user.username as string,
      },
    });

    return contactData as BasicInformationFormType;
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
