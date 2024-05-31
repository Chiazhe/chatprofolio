import {
  EducationFormType,
  RelevantCourseType,
  SpecializationType,
} from "./zodSchema/education";
import type { Education, Experience, Project } from "@prisma/client";
import {
  ExperienceFormType,
  SkillUsedType,
  WorkDescriptionType,
} from "./zodSchema/experience";
import {
  ProjectDescriptionType,
  ProjectFormType,
  ProjectType,
  TechnologyUsedType,
} from "./zodSchema/project";

export const convertEducationDataFromBackend = (
  databaseEducationData: Education[]
) => {
  const frontendEducationData: EducationFormType["educations"] = [];
  for (let i = 0; i < databaseEducationData.length; i++) {
    const education = databaseEducationData[i];
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
  frontendEducationData: EducationFormType["educations"],
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

export const convertExperienceDataFromBackend = (
  databaseExperienceData: Experience[]
) => {
  const frontendExperienceData: ExperienceFormType["experiences"] = [];
  for (let i = 0; i < databaseExperienceData.length; i++) {
    const experience = databaseExperienceData[i];
    // in string[]
    const skillUsed = experience.skillUsed;

    // convert to {specialization: string}[]
    const skillUsedData: SkillUsedType[] = [];
    for (const skill of skillUsed) {
      skillUsedData.push({ skill: skill });
    }

    // in string[]
    const workDescriptions = experience.workDescription;

    // convert to {specialization: string}[]
    const workDescriptionData: WorkDescriptionType[] = [];
    for (const workDescription of workDescriptions) {
      workDescriptionData.push({ workDescription: workDescription });
    }

    frontendExperienceData.push({
      ...experience,
      skillUsed: skillUsedData,
      workDescription: workDescriptionData,
      companyLogo: experience.companyLogo as string,
    });
  }

  return frontendExperienceData;
};

export const convertExperienceDataToBackend = (
  frontendExperienceData: ExperienceFormType["experiences"],
  userId: string
) => {
  const databaseExperienceType: Experience[] = [];

  for (let i = 0; i < frontendExperienceData.length; i++) {
    const experience = frontendExperienceData[i];
    // in {specialization: string}[]
    const workDescriptions = experience.workDescription;

    const workDescriptionData: string[] = [];
    for (const workDescription of workDescriptions) {
      workDescriptionData.push(workDescription.workDescription);
    }

    // in {specialization: string}[]
    const skillUsed = experience.skillUsed;

    const skillUsedData: string[] = [];
    for (const skill of skillUsed) {
      skillUsedData.push(skill.skill);
    }

    databaseExperienceType.push({
      ...experience,
      workDescription: workDescriptionData,
      skillUsed: skillUsedData,
      holderId: userId,
      id: experience.id ? experience.id : -1,
    });
  }

  return databaseExperienceType;
};

export const convertProjectDataFromBackend = (
  databaseProjectData: Project[]
) => {
  const frontendProjectData: ProjectType[] = [];
  for (let i = 0; i < databaseProjectData.length; i++) {
    const project = databaseProjectData[i];
    // in string[]
    const technologyUsed = project.technologyUsed;

    // convert to {specialization: string}[]
    const technologyUsedData: TechnologyUsedType[] = [];
    for (const technology of technologyUsed) {
      technologyUsedData.push({ technology: technology });
    }

    // in string[]
    const projectDescriptions = project.projectDescription;

    // convert to {specialization: string}[]
    const projectDescriptionData: ProjectDescriptionType[] = [];
    for (const projectDescription of projectDescriptions) {
      projectDescriptionData.push({ projectDescription: projectDescription });
    }

    frontendProjectData.push({
      ...project,
      technologyUsed: technologyUsedData,
      projectDescription: projectDescriptionData,
      projectUrl: project.projectUrl as string,
      githubLink: project.githubLink as string,
      projectImage: project.projectImage as string,
    });
  }

  return frontendProjectData;
};

export const convertProjectDataToBackend = (
  frontendProjectData: ProjectType[],
  userId: string
) => {
  const databaseProjectType: Project[] = [];

  for (let i = 0; i < frontendProjectData.length; i++) {
    const project = frontendProjectData[i];
    // in {specialization: string}[]
    const projectDescriptions = project.projectDescription;

    const projectDescriptionData: string[] = [];
    for (const projectDescription of projectDescriptions) {
      projectDescriptionData.push(projectDescription.projectDescription);
    }

    // in {specialization: string}[]
    const technologyUsed = project.technologyUsed;

    const technologyUsedData: string[] = [];
    for (const technology of technologyUsed) {
      technologyUsedData.push(technology.technology);
    }

    databaseProjectType.push({
      ...project,
      projectDescription: projectDescriptionData,
      technologyUsed: technologyUsedData,
      holderId: userId,
      id: project.id ? project.id : -1,
    });
  }

  return databaseProjectType;
};
