import {
  EducationType,
  RelevantCourseType,
  SpecializationType,
} from "./zodSchema/education";
import type { Education } from "@prisma/client";

export const convertEducationDataFromBackend = (
  databaseEducationType: Education[]
) => {
  const frontendEducationData: EducationType["educations"] = [];
  for (let i = 0; i < databaseEducationType.length; i++) {
    const education = databaseEducationType[i];
    // in string[]
    const specializations = education.specialization;

    // convert to {specialization: string}[]
    const specializationData: SpecializationType[] = [];
    for (const specialization of specializations) {
      specializationData.push({ specialization: specialization });
    }

    // in string[]
    const relevantCourses = education.relevantCourses;

    // convert to {specialization: string}[]
    const relevantCoursesData: RelevantCourseType[] = [];
    for (const relevantCourse of relevantCourses) {
      relevantCoursesData.push({ relevantCourse: relevantCourse });
    }

    frontendEducationData.push({
      ...education,
      specialization: specializationData,
      relevantCourses: relevantCoursesData,
      grade: education.grade as string,
    });
  }

  return frontendEducationData;
};

export const convertEducationDataToBackend = (
  frontendEducationData: EducationType["educations"],
  userId: string
) => {
  const databaseEducationType: Education[] = [];

  for (let i = 0; i < frontendEducationData.length; i++) {
    const education = frontendEducationData[i];
    // in {specialization: string}[]
    const specializations = education.specialization;

    const specializationData: string[] = [];
    for (const specialization of specializations) {
      specializationData.push(specialization.specialization);
    }

    // in {specialization: string}[]
    const relevantCourses = education.relevantCourses;

    const relevantCoursesData: string[] = [];
    for (const relevantCourse of relevantCourses) {
      relevantCoursesData.push(relevantCourse.relevantCourse);
    }

    databaseEducationType.push({
      ...education,
      specialization: specializationData,
      relevantCourses: relevantCoursesData,
      holderId: userId,
      id: education.id ? education.id : -1,
    });
  }

  return databaseEducationType;
};
