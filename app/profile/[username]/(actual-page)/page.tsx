import React from "react";
import About from "../_component/About";
import Experience from "../_component/Experience";
import Education from "../_component/Education";
import Project from "../_component/Project";
import Skill from "../_component/Skill";
import Achievement from "../_component/Achievement";
import Contact from "../_component/Contact";
import prisma from "@/lib/db";
import { BackgroundBeams } from "@/components/ui/background-beam";
import Footer from "../../../../components/Footer";
import { Metadata } from "next";

export async function generateMetadata(
  {
    params: { username },
  }: {
    params: { username: string };
  },
  // parent: ResolvingMetadata,
): Promise<Metadata> {
  return {
    title: username,
  };
}

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

  const getUserProject = async () => {
    const projectData = await prisma.project.findMany({
      where: {
        holder: {
          username: username,
        },
      },
    });

    return projectData;
  };

  const getUserSkill = async () => {
    const skillData = await prisma.skill.findMany({
      where: {
        holder: {
          username: username,
        },
      },
    });

    return skillData;
  };

  const getContact = async () => {
    const contactData = await prisma.contact.findFirst({
      where: {
        holder: {
          username: username,
        },
      },
    });

    return contactData;
  };

  return (
    <>
      <div className="flex w-full flex-col gap-28 px-8 sm:px-12 md:gap-48 md:px-20">
        <About
          data={await getBasicInformation()}
          contactData={await getContact()}
        />
        <BackgroundBeams />
        <Experience data={await getUserExperience()} />
        <Education data={await getUserEducation()} />
        <Project data={await getUserProject()} />
      </div>
      <Skill data={await getUserSkill()} />
      <div className="relative w-full px-8 sm:px-12 md:px-20">
        {/* <Contact /> */}
        <Footer />
        <BackgroundBeams />
      </div>
    </>
  );
};

export default page;
