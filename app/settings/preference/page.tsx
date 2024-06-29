import prisma from "@/lib/db";
import { auth } from "@/lib/auth";
import React from "react";
import UpdateLayoutPreferenceForm from "../_components/preference/UpdateLayoutPreferenceForm";
import { layoutPreferenceDefaultValue } from "@/lib/layout-data";

type Props = {};

const page = async (props: Props) => {
  const session = await auth();
  const user = session?.user;

  if (!user) return <div>Please Login first</div>;

  const getUserLayoutPreference = async () => {
    const layoutPreferenceData = await prisma.layoutPreference.findFirst({
      where: {
        holder: {
          username: user.username as string,
        },
      },
    });

    return layoutPreferenceData;
  };

  return (
    <div className="w-full">
      <UpdateLayoutPreferenceForm
        existingLayoutPreference={
          (await getUserLayoutPreference()) || layoutPreferenceDefaultValue
        }
      />
    </div>
  );
};

export default page;
