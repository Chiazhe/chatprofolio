import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import React from "react";
import { convertSkillDataFromBackend } from "@/lib/helper";
import UpdateSkillForm from "@/app/profile/[username]/update/_components/skill/UpdateSkillForm";

const page = async ({
  params: { username },
}: {
  params: { username: string };
}) => {
  const session = await auth();
  const user = session?.user;

  if (!user || user.username !== username) return <div>Unauthorized</div>;

  const getUserSkill = async () => {
    const skillData = await prisma.skill.findMany({
      where: {
        holder: {
          username: username,
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
