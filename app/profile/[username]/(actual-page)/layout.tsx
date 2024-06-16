import { FloatingNav } from "@/components/ui/floating-navbar";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWorkHistory } from "react-icons/md";
import { BiSolidSchool } from "react-icons/bi";
import { LuFileEdit } from "react-icons/lu";
import { GiSkills } from "react-icons/gi";
import { CiSettings } from "react-icons/ci";
import { auth } from "@/lib/auth";

export default async function ProfileUpdateLayout({
  children,
  params: { username },
}: {
  children: React.ReactNode;
  params: { username: string };
}) {
  const session = await auth();
  const user = session?.user;

  const navItems = [
    {
      name: "About",
      link: `/profile/${username}/#about`,
      icon: <CgProfile className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Experience",
      link: `/profile/${username}/#experience`,
      icon: (
        <MdOutlineWorkHistory className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Education",
      link: `/profile/${username}/#education`,
      icon: (
        <BiSolidSchool className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Project",
      link: `/profile/${username}/#project`,
      icon: <LuFileEdit className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skill",
      link: `/profile/${username}/#skill`,
      icon: <GiSkills className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    // {
    //   name: "Achievement",
    //   link: `/profile/${username}/#achievement`,
    //   icon: (
    //     <GrAchievement className="h-4 w-4 text-neutral-500 dark:text-white" />
    //   ),
    // },
    // {
    //   name: "Contact",
    //   link: `/profile/${username}/#contact`,
    //   icon: (
    //     <RiContactsBook3Line className="h-4 w-4 text-neutral-500 dark:text-white" />
    //   ),
    // },
  ];

  if (username === user?.username) {
    navItems.push({
      name: "Setting",
      link: `/settings`,
      icon: <CiSettings className="h-4 w-4 text-neutral-500 dark:text-white" />,
    });
  }

  return (
    <div className="flex w-full">
      <FloatingNav navItems={navItems} />
      <main className="w-full">{children}</main>
    </div>
  );
}
