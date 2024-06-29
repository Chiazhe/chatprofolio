import { Education as EducationData } from "@prisma/client";
import React from "react";
import Heading, { HeadingDescription } from "./ui/Heading";
import { WobbleCard } from "@/components/ui/wobble-card";
import { DateTime } from "luxon";
import { educationLayout, EducationLayoutType } from "@/lib/layout-data";

type Props = {
  data: EducationData[] | null;
  educationLayoutPreference?: EducationLayoutType;
};

const Education = ({ data, educationLayoutPreference }: Props) => {
  if (educationLayoutPreference === educationLayout[0]) {
    return (
      <div>
        <div className="mb-8 text-center">
          <HeadingDescription text="WHERE I HAVE GAINED MY KNOWLEDGE." />
          <Heading text="Educations." />
        </div>
        <div className="flex w-full flex-col gap-2">
          {data?.map((education, index) => (
            <div
              key={`education-${index}`}
              className="flex w-full flex-col border-[1px] border-card p-8 hover:border-slate-600 hover:bg-primary/10 md:flex-row"
            >
              <p className="w-[250px] text-nowrap md:text-center">
                {DateTime.fromJSDate(education.startDate as Date).toFormat(
                  "yyyy",
                )}{" "}
                -{" "}
                {education.endDate
                  ? DateTime.fromJSDate(education.endDate).toFormat("yyyy")
                  : "Present"}
              </p>
              <div className="mt-4 flex w-full flex-col gap-2 text-left md:mt-0 md:gap-4">
                <h1 className="text-lg text-primary md:text-3xl">
                  {education.institution}
                </h1>
                <h3 className="flex flex-col gap-2 text-slate-300 md:text-xl">
                  {education.fieldOfStudy}
                </h3>
                {education.specialization &&
                  education.specialization.length !== 0 && (
                    <div>
                      <h3 className="text-lg font-semibold">
                        Specializations:
                      </h3>
                      <ul className="flex flex-wrap gap-2">
                        {education.specialization.map((spec, specIndex) => (
                          <li
                            key={`specialization-${specIndex}`}
                            className={`bg-primary px-2 py-1 text-black`}
                          >
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                {education.relevantCourses &&
                  education.relevantCourses.length !== 0 && (
                    <div>
                      <h3 className="text-lg font-semibold">
                        Courses Highlight:
                      </h3>
                      <ul className="flex flex-wrap gap-2">
                        {education.relevantCourses.map(
                          (relevantCourse, relevantCourseIndex) => (
                            <li
                              key={`relevantCourse-${relevantCourseIndex}`}
                              className={`bg-primary px-2 py-1 text-black`}
                            >
                              {relevantCourse}
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  )}
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
        <HeadingDescription text="WHERE I HAVE GAINED MY KNOWLEDGE." />
        <Heading text="Educations." />
      </div>
      {data?.map((education, index) => (
        <div key={`education-${index}`} className="w-full">
          <WobbleCard
            containerClassName="h-full bg-primary/10 w-full max-w-[700px]"
            className=""
          >
            <div className="flex flex-col gap-4">
              <div>
                <h1 className="text-3xl font-semibold">
                  {education.institution}
                </h1>
                <h1 className="text-xl font-extrabold text-primary">
                  {education.fieldOfStudy}
                </h1>{" "}
                <div className="text-gray-400">
                  {DateTime.fromJSDate(education.startDate as Date).toFormat(
                    "MMMM yyyy",
                  )}{" "}
                  -{" "}
                  {education.endDate
                    ? DateTime.fromJSDate(education.endDate).toFormat(
                        "MMMM yyyy",
                      )
                    : "Present"}
                </div>
              </div>
              {education.specialization &&
                education.specialization.length !== 0 && (
                  <div>
                    <h3 className="text-lg font-semibold">Specializations:</h3>
                    <ul className="flex w-full flex-wrap gap-1">
                      {education.specialization.map((spec, specIndex) => (
                        <li
                          key={`specialization-${specIndex}`}
                          className={`rounded-full bg-primary/20 px-2 py-1 text-primary`}
                        >
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              {education.relevantCourses &&
                education.relevantCourses.length !== 0 && (
                  <div>
                    <h3 className="text-lg font-semibold">
                      Courses Highlight:
                    </h3>
                    <ul className="flex w-full flex-wrap gap-1">
                      {education.relevantCourses.map(
                        (relevantCourse, relevantCourseIndex) => (
                          <li
                            key={`relevantCourse-${relevantCourseIndex}`}
                            className={`rounded-full bg-primary/20 px-2 py-1 text-primary`}
                          >
                            {relevantCourse}
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                )}
            </div>
          </WobbleCard>
        </div>
      ))}
    </div>
  );
};

export default Education;
