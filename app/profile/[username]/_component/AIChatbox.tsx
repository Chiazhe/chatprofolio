import { RiRobot2Line } from "react-icons/ri";

import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import AIChatContent from "./AIChatContent";
import {
  Contact,
  Education,
  Experience,
  Project,
  Skill,
  User,
} from "@prisma/client";

type Props = {
  username: string;
  basicInformationData: User | null;
  contactData: Contact | null;
  workExperienceData: Experience[] | null;
  educationData: Education[] | null;
  projectData: Project[] | null;
  skillData: Skill[] | null;
};

const AIChatbox = ({
  username,
  basicInformationData,
  contactData,
  workExperienceData,
  educationData,
  projectData,
  skillData,
}: Props) => {
  return (
    <>
      <TooltipProvider>
        <Dialog>
          <Tooltip>
            <DialogTrigger asChild>
              <TooltipTrigger asChild>
                <button className="fixed bottom-6 right-6 z-[100] rounded-full border-[1px] border-primary bg-black p-3">
                  <RiRobot2Line className="h-12 w-12" />
                </button>
              </TooltipTrigger>
            </DialogTrigger>
            <TooltipContent className="bg-primary text-black">
              Ask AI about {username}
            </TooltipContent>
          </Tooltip>

          <AIChatContent
            username={username}
            basicInformationData={basicInformationData}
            contactData={contactData}
            workExperienceData={workExperienceData}
            educationData={educationData}
            projectData={projectData}
            skillData={skillData}
          />
        </Dialog>
      </TooltipProvider>
    </>
  );
};

export default AIChatbox;
