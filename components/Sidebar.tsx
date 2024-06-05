"use client";

import ProfileNavigationButton from "@/app/profile/_components/ProfileNavigationButton";
import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const Sidebar = ({}: Props) => {
  const router = useRouter();
  const params = useParams();
  const path = usePathname();

  const items = [
    {
      title: "Profile",
      action: () => router.push(`/profile/${params.username}/update/profile`),
      isActive: path.split("/")[path.split("/").length - 1] === "profile",
    },
    {
      title: "Experience",
      action: () =>
        router.push(`/profile/${params.username}/update/experience`),
      isActive: path.split("/")[path.split("/").length - 1] === "experience",
    },
    {
      title: "Education",
      action: () => router.push(`/profile/${params.username}/update/education`),
      isActive: path.split("/")[path.split("/").length - 1] === "education",
    },
    {
      title: "Achievement",
      action: () =>
        router.push(`/profile/${params.username}/update/achievement`),
      isActive: path.split("/")[path.split("/").length - 1] === "achievement",
    },
    {
      title: "Project",
      action: () => router.push(`/profile/${params.username}/update/project`),
      isActive: path.split("/")[path.split("/").length - 1] === "project",
    },
    {
      title: "Skill",
      action: () => router.push(`/profile/${params.username}/update/skill`),
      isActive: path.split("/")[path.split("/").length - 1] === "skill",
    },
    {
      title: "Contact",
      action: () => router.push(`/profile/${params.username}/update/contact`),
      isActive: path.split("/")[path.split("/").length - 1] === "contact",
    },
  ];

  return (
    <div className="w-[350px] flex flex-col gap-[2px] p-4 bg-zinc-100 dark:bg-zinc-900">
      <h1 className="font-semibold text-lg mb-2 py-1 px-2">User Information</h1>
      {items.map((item) => (
        <ProfileNavigationButton
          key={item.title}
          title={item.title}
          action={item.action}
          isActive={item.isActive}
        />
      ))}
    </div>
  );
};

export default Sidebar;
