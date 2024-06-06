import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import Link from "next/link";
import React from "react";
import About from "./_component/About";
import Experience from "./_component/Experience";
import Education from "./_component/Education";
import Project from "./_component/Project";
import Skill from "./_component/Skill";
import Achievement from "./_component/Achievement";
import Contact from "./_component/Contact";

const page = async ({
  params: { username },
}: {
  params: { username: string };
}) => {
  const session = await auth();
  const user = session?.user;

  return (
    <div>
      <About />
      <Experience />
      <Education />
      <Project />
      <Skill />
      <Achievement />
      <Contact />
    </div>
  );
};

export default page;
