"use client";

import { redirect, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWorkHistory } from "react-icons/md";
import { BiSolidSchool } from "react-icons/bi";
// import { GrAchievement } from "react-icons/gr";
import { LuFileEdit } from "react-icons/lu";
import { GiSkills } from "react-icons/gi";
import { IoIosLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

import { RiContactsBook3Line } from "react-icons/ri";
import ProfileNavigationButton from "@/app/settings/_components/ProfileNavigationButton";
import { logout } from "@/actions/logout";
import { toast } from "react-toastify";
import { User } from "@prisma/client";

type Props = {
  user: User | undefined;
  username: string | undefined | null;
};

const Sidebar = ({ username, user }: Props) => {
  const router = useRouter();
  const path = usePathname();

  const items = [
    {
      title: "Profile",
      action: () => router.push(`/settings/profile`),
      isActive: path.split("/")[path.split("/").length - 1] === "profile",
      icon: <CgProfile />,
      display: !!username,
    },
    {
      title: "Experience",
      action: () => router.push(`/settings/experience`),
      isActive: path.split("/")[path.split("/").length - 1] === "experience",
      icon: <MdOutlineWorkHistory />,
      display: !!username,
    },
    {
      title: "Education",
      action: () => router.push(`/settings/education`),
      isActive: path.split("/")[path.split("/").length - 1] === "education",
      icon: <BiSolidSchool />,
      display: !!username,
    },
    // {
    //   title: "Achievement",
    //   action: () => router.push(`/settings/achievement`),
    //   isActive: path.split("/")[path.split("/").length - 1] === "achievement",
    //   icon: <GrAchievement />,
    //   display: !!username,
    // },
    {
      title: "Project",
      action: () => router.push(`/settings/project`),
      isActive: path.split("/")[path.split("/").length - 1] === "project",
      icon: <LuFileEdit />,
      display: !!username,
    },
    {
      title: "Skill",
      action: () => router.push(`/settings/skill`),
      isActive: path.split("/")[path.split("/").length - 1] === "skill",
      icon: <GiSkills />,
      display: !!username,
    },
    {
      title: "Contact",
      action: () => router.push(`/settings/contact`),
      isActive: path.split("/")[path.split("/").length - 1] === "contact",
      icon: <RiContactsBook3Line />,
      display: !!username,
    },
  ];

  const logoutHandler = async () => {
    const res = await logout();

    if ("error" in res) {
      toast(res.error);
    } else {
      toast("Logout success");
      redirect("/");
    }
  };

  return (
    <div className="gap-[2px flex w-[250px] flex-col p-4">
      <h1 className="mb-4 px-2 py-1 text-lg font-semibold">Settings</h1>
      <ProfileNavigationButton
        title="General"
        action={() => router.push(`/settings`)}
        isActive={path.split("/")[path.split("/").length - 1] === "settings"}
        icon={<IoSettingsOutline />}
      />
      {items
        .filter((item) => item.display)
        .map((item) => (
          <ProfileNavigationButton
            key={item.title}
            title={item.title}
            action={item.action}
            isActive={item.isActive}
            icon={item.icon}
          />
        ))}
      {!!user ? (
        <ProfileNavigationButton
          className="mt-4 bg-primary text-black"
          title="Logout"
          action={() => logoutHandler()}
          isActive={false}
          icon={<IoIosLogOut />}
        />
      ) : (
        <ProfileNavigationButton
          className="mt-4 bg-primary text-black"
          title="Login"
          action={() => router.push("/login")}
          isActive={false}
          icon={<IoIosLogOut />}
        />
      )}
    </div>
  );
};

export default Sidebar;
