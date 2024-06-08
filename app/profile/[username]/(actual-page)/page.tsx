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

  const getUserEducation = async () => {
    const educationData = await prisma.education.findMany({
      where: {
        holder: {
          username: username,
        },
      },
    });

    return educationData;
  };

  return (
    <div className="w-full px-8 sm:px-12 md:px-20">
      <About data={await getBasicInformation()} />
      <Experience data={await getUserExperience()} />
      <Education data={await getUserEducation()} />
      <Project />
      <Skill />
      <Achievement />
      <Contact />
    </div>
  );
};

export default page;
