import React from "react";
import About from "../_component/About";
import Experience from "../_component/Experience";
import Education from "../_component/Education";
import Project from "../_component/Project";
import Skill from "../_component/Skill";
import { BackgroundBeams } from "@/components/ui/background-beam";
import Footer from "../../../../components/Footer";
import { Metadata } from "next";
import {
  getBasicInformation,
  getContact,
  getUserEducation,
  getUserExperience,
  getUserLayoutPreference,
  getUserProject,
  getUserSkill,
} from "@/actions/get-data";
import AIChatbox from "../_component/AIChatbox";
import { getUserByUsername } from "@/actions/get-user-by-username";

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
  const user = await getUserByUsername(username);

  if (!user) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <p className="text-xl">
          The user with <span className="italic text-primary">{username}</span>{" "}
          doesn&apos;t exist.
        </p>
      </div>
    );
  }

  const basicInformationData = await getBasicInformation(username);
  const contactData = await getContact(username);
  const workExperienceData = await getUserExperience(username);
  const educationData = await getUserEducation(username);
  const projectData = await getUserProject(username);
  const skillData = await getUserSkill(username);
  const layoutData = await getUserLayoutPreference(username);

  return (
    <>
      <div className="flex w-full flex-col gap-28 px-8 sm:px-12 md:gap-48 md:px-20">
        <div />
        <div id="about">
          <About
            data={basicInformationData}
            contactData={contactData}
            aboutLayoutPreference={layoutData?.aboutLayoutPreference}
          />
        </div>
        <BackgroundBeams />
        <div id="experience">
          <Experience
            data={workExperienceData}
            experienceLayoutPreference={layoutData?.experienceLayoutPreference}
          />
        </div>
        <div id="education">
          <Education
            data={educationData}
            educationLayoutPreference={layoutData?.educationLayoutPreference}
          />
        </div>
        <div id="project">
          <Project
            data={projectData}
            projectLayoutPreference={layoutData?.projectLayoutPreference}
          />
        </div>
        <div />
      </div>
      <div className="flex w-full flex-col gap-28 md:gap-48">
        <div id="skill">
          <Skill
            data={skillData}
            skillLayoutPreference={layoutData?.skillLayoutPreference}
          />
        </div>
        <div />
      </div>
      <AIChatbox username={username} />
      <Footer />
    </>
  );
};

export default page;
