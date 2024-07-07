import prisma from "@/lib/db";

export const getBasicInformation = async (username: string) => {
  const contactData = await prisma.user.findFirst({
    where: {
      username: username,
    },
  });

  return contactData;
};

export const getUserExperience = async (username: string) => {
  const experienceData = await prisma.experience.findMany({
    where: {
      holder: {
        username: username,
      },
    },
  });

  return experienceData;
};

export const getUserEducation = async (username: string) => {
  const educationData = await prisma.education.findMany({
    where: {
      holder: {
        username: username,
      },
    },
  });

  return educationData;
};

export const getUserProject = async (username: string) => {
  const projectData = await prisma.project.findMany({
    where: {
      holder: {
        username: username,
      },
    },
  });

  return projectData;
};

export const getUserSkill = async (username: string) => {
  const skillData = await prisma.skill.findMany({
    where: {
      holder: {
        username: username,
      },
    },
  });

  return skillData;
};

export const getContact = async (username: string) => {
  const contactData = await prisma.contact.findFirst({
    where: {
      holder: {
        username: username,
      },
    },
  });

  return contactData;
};

export const getUserLayoutPreference = async (username: string) => {
  const layoutPreferenceData = await prisma.layoutPreference.findFirst({
    where: {
      holder: {
        username: username,
      },
    },
  });

  return layoutPreferenceData;
};
