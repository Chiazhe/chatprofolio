import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import Heading, { HeadingDescription } from "./ui/Heading";
import { Experience as ExperienceData } from "@prisma/client";
import { Button } from "@/components/ui/moving-border";
import { DateTime } from "luxon";

type Props = {
  data: ExperienceData[] | null;
  experiencePreference?: string;
};

const Experience = ({ data, experiencePreference }: Props) => {
  if (experiencePreference === "1") {
    return (
      <div className="flex w-full flex-col items-center justify-center">
        <div className="mb-8 text-center">
          <HeadingDescription text="WHAT I HAVE DONE SO FAR" />
          <Heading text="Work Experiences." />
        </div>
        <div className="flex w-full flex-col gap-2">
          {data?.map((experience, index) => (
            <div
              className="flex w-full flex-col p-8 hover:bg-primary/10 md:flex-row"
              key={`experience-${index}`}
            >
              <p className="w-[250px] text-nowrap md:text-center">
                {DateTime.fromJSDate(experience.startDate as Date).toFormat(
                  "yyyy",
                )}{" "}
                -{" "}
                {experience.endDate
                  ? DateTime.fromJSDate(experience.endDate).toFormat("yyyy")
                  : "Present"}
              </p>
              <div className="mt-4 flex w-full flex-col gap-2 text-left md:mt-0 md:gap-4">
                <div>
                  <h1 className="text-lg text-primary md:text-3xl">
                    {experience.title} | {experience.companyName}
                  </h1>
                </div>
                <div>
                  <ul className="list-square flex flex-col gap-2 text-justify text-slate-300">
                    {experience.workDescription.map((desc, descIndex) => (
                      <li key={`job-description-${descIndex}`}>{desc}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <ul className="flex flex-wrap gap-2">
                    {experience.skillUsed.map((skill, skillIndex) => (
                      <li
                        key={`skill-${skillIndex}`}
                        className={`bg-primary px-2 py-1 text-black`}
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="mb-8 text-center">
        <HeadingDescription text="WHAT I HAVE DONE SO FAR" />
        <Heading text="Work Experiences." />
      </div>
      <TracingBeam className="px-8 md:px-0">
        <div className="relative mx-auto flex max-w-2xl flex-col gap-8 pt-4 antialiased">
          {data?.map((experience, index) => (
            <Button
              key={`experience-${index}`}
              className="flex flex-col"
              duration={Math.random() * (20000 - 15000) + 15000}
            >
              <div className="flex flex-col gap-4 p-6 text-left md:p-8">
                <div>
                  <h1 className="text-3xl font-semibold">{experience.title}</h1>
                  <h1 className="mb-2 text-xl font-extrabold text-primary">
                    {experience.companyName}
                  </h1>
                  <div className="inline-flex animate-shimmer rounded-lg border border-primary/50 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-2 py-1 font-bold text-primary/80 transition-colors">
                    {DateTime.fromJSDate(experience.startDate as Date).toFormat(
                      "MMMM yyyy",
                    )}{" "}
                    -{" "}
                    {experience.endDate
                      ? DateTime.fromJSDate(experience.endDate).toFormat(
                          "MMMM yyyy",
                        )
                      : "Present"}
                  </div>
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
              </div>
            </Button>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
};

export default Experience;
