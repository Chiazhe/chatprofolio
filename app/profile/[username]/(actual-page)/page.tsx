import React from "react";
import About from "../_component/About";
import Experience from "../_component/Experience";
import Education from "../_component/Education";
import Project from "../_component/Project";
import Skill from "../_component/Skill";
import Achievement from "../_component/Achievement";
import Contact from "../_component/Contact";
import prisma from "@/lib/db";

const page = async ({
  params: { username },
}: {
  params: { username: string };
}) => {
  const getBasicInformation = async () => {
    const contactData = await prisma.user.findFirst({
      where: {
        username: username,
      },
    });

    return contactData;
  };

  const getUserExperience = async () => {
    const experienceData = await prisma.experience.findMany({
      where: {
        holder: {
          username: username,
        },
      },
    });

    return experienceData;
  };

  return (
    <div className="w-full">
      <About data={await getBasicInformation()} />
      <Experience data={await getUserExperience()} />
      <Education />
      <Project />
      <Skill />
      <Achievement />
      <Contact />
    </div>
  );
};

export default page;
