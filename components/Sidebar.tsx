"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWorkHistory } from "react-icons/md";
import { BiSolidSchool } from "react-icons/bi";
import { GrAchievement } from "react-icons/gr";
import { LuFileEdit } from "react-icons/lu";
import { GiSkills } from "react-icons/gi";
import { RiContactsBook3Line } from "react-icons/ri";
import ProfileNavigationButton from "@/app/settings/_components/ProfileNavigationButton";

type Props = {};

const Sidebar = ({}: Props) => {
  const router = useRouter();
  const path = usePathname();

  const items = [
    {
      title: "Profile",
      action: () => router.push(`/settings/profile`),
      isActive: path.split("/")[path.split("/").length - 1] === "profile",
      icon: <CgProfile />,
    },
    {
      title: "Experience",
      action: () => router.push(`/settings/experience`),
      isActive: path.split("/")[path.split("/").length - 1] === "experience",
      icon: <MdOutlineWorkHistory />,
    },
    {
      title: "Education",
      action: () => router.push(`/settings/education`),
      isActive: path.split("/")[path.split("/").length - 1] === "education",
      icon: <BiSolidSchool />,
    },
    {
      title: "Achievement",
      action: () => router.push(`/settings/achievement`),
      isActive: path.split("/")[path.split("/").length - 1] === "achievement",
      icon: <GrAchievement />,
    },
    {
      title: "Project",
      action: () => router.push(`/settings/project`),
      isActive: path.split("/")[path.split("/").length - 1] === "project",
      icon: <LuFileEdit />,
    },
    {
      title: "Skill",
      action: () => router.push(`/settings/skill`),
      isActive: path.split("/")[path.split("/").length - 1] === "skill",
      icon: <GiSkills />,
    },
    {
      title: "Contact",
      action: () => router.push(`/settings/contact`),
      isActive: path.split("/")[path.split("/").length - 1] === "contact",
      icon: <RiContactsBook3Line />,
    },
  ];

  return (
    <div className="flex w-[250px] flex-col gap-[2px] p-4">
      <h1 className="mb-2 px-2 py-1 text-lg font-semibold">User Information</h1>
      {items.map((item) => (
        <ProfileNavigationButton
          key={item.title}
          title={item.title}
          action={item.action}
          isActive={item.isActive}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default Sidebar;
