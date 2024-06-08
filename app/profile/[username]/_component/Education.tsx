import { Education as EducationData } from "@prisma/client";
import React from "react";
import Heading, { HeadingDescription } from "./ui/Heading";
import { WobbleCard } from "@/components/ui/wobble-card";
import { DateTime } from "luxon";

type Props = {
  data: EducationData[] | null;
};

const Education = ({ data }: Props) => {
  return (
    <div
      id="education"
      className="flex w-full flex-col items-center justify-center"
    >
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
