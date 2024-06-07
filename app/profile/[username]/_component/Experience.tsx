import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import Heading, { HeadingDescription } from "./ui/Heading";
import { Experience as ExperienceData } from "@prisma/client";
import { Button } from "@/components/ui/moving-border";

type Props = {
  data: ExperienceData[] | null;
};

const Experience = ({ data }: Props) => {
  return (
    <div
      id="experience"
      className="flex w-full flex-col items-center justify-center"
    >
      <div className="mb-8 mt-32 text-center">
        <HeadingDescription text="WHAT I HAVE DONE SO FAR" />
        <Heading text="Work Experiences." />
      </div>
      <TracingBeam className="px-8 md:px-0">
        <div className="relative mx-auto flex max-w-2xl flex-col gap-8 pt-4 antialiased">
          {data?.map((experience, index) => (
            <Button
              key={`experience-${index}`}
              borderRadius="1.75rem"
              className="flex flex-col"
              duration={Math.floor(Math.random() * 10000) + 10000}
            >
              <div className="flex flex-col gap-4 p-6 text-left md:p-8">
                <div>
                  <h1 className="text-3xl font-semibold">{experience.title}</h1>
                  <h1 className="text-xl font-extrabold text-primary">
                    {experience.companyName}
                  </h1>
                </div>
                <div>
                  <ul className="flex list-disc flex-col gap-2">
                    {experience.workDescription.map((desc, descIndex) => (
                      <li key={`job-description-${descIndex}`}>{desc}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <ul className="flex flex-wrap gap-1">
                    {experience.skillUsed.map((skill, skillIndex) => (
                      <li
                        key={`skill-${skillIndex}`}
                        className={`rounded-full bg-primary/20 px-2 py-1 text-primary`}
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>{JSON.stringify(experience.startDate)}</div>
              </div>
            </Button>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
};

export default Experience;
