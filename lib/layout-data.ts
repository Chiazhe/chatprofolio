export const aboutLayout = ["classic", "fancy"] as const;
export const experienceLayout = ["classic", "fancy"] as const;
export const educationLayout = ["classic", "fancy"] as const;
export const projectLayout = ["classic", "fancy"] as const;
export const skillLayout = ["classic", "fancy"] as const;

export type AboutLayoutType = (typeof aboutLayout)[number];
export type ExperienceLayoutType = (typeof experienceLayout)[number];
export type EducationLayoutType = (typeof educationLayout)[number];
export type ProjectLayoutType = (typeof projectLayout)[number];
export type SkillLayoutType = (typeof skillLayout)[number];

export const layoutPreferenceDefaultValue = {
  aboutLayoutPreference: aboutLayout[0],
  experienceLayoutPreference: experienceLayout[0],
  educationLayoutPreference: educationLayout[0],
  projectLayoutPreference: projectLayout[0],
  skillLayoutPreference: skillLayout[0],
};
