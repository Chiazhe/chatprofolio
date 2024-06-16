import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import React from "react";
import { convertSkillDataFromBackend } from "@/lib/helper";
import UpdateSkillForm from "../_components/skill/UpdateSkillForm";

const page = async () => {
  const session = await auth();
  const user = session?.user;

  if (!user) return <div>Please Login first</div>;

  const getUserSkill = async () => {
    const skillData = await prisma.skill.findMany({
      where: {
        holder: {
          username: user.username as string,
        },
      },
    });

    return convertSkillDataFromBackend(skillData);
  };

  return (
    <div className="w-full">
      <UpdateSkillForm existingSkills={await getUserSkill()} />
    </div>
  );
};

export default page;
