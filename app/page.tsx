import { auth } from "@/lib/auth";
import Hero from "./_component/Hero";
import Feature from "./_component/Feature";
import Footer from "@/components/Footer";
import UserManual from "./_component/UserManual";
import GetStarted from "./_component/GetStarted";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { CgProfile } from "react-icons/cg";
import { SlBookOpen } from "react-icons/sl";
import { GrUserSettings } from "react-icons/gr";
import { CiLogin } from "react-icons/ci";
import { PiHandshakeLight } from "react-icons/pi";
import { IoIosInformationCircleOutline } from "react-icons/io";

const navItems = [
  {
    name: "About",
    link: `/#about`,
    icon: <IoIosInformationCircleOutline className="h-4 w-4 text-white" />,
  },
  {
    name: "Feature",
    link: `/#feature`,
    icon: <GrUserSettings className="h-4 w-4 text-white" />,
  },
  {
    name: "Manual",
    link: `/#manual`,
    icon: <SlBookOpen className="h-4 w-4 text-white" />,
  },
  {
    name: "Join",
    link: `/#join-now`,
    icon: <PiHandshakeLight className="h-4 w-4 text-white" />,
  },
];

export default async function Home() {
  const session = await auth();

  const user = session?.user;

  if (!user) {
    navItems.push({
      name: "Login",
      link: `/login`,
      icon: <CiLogin className="h-4 w-4 text-white" />,
    });
  } else {
    navItems.push({
      name: "Profile",
      link: `/login`,
      icon: <CgProfile className="h-4 w-4 text-white" />,
    });
  }

  return (
    <main>
      <FloatingNav
        navItems={navItems}
        className="rounded-none bg-black text-lg"
      />
      <Hero />
      <Feature />
      <UserManual />
      <GetStarted />
      <Footer className="bg-black" />
    </main>
  );
}
