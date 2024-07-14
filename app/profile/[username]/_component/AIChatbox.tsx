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

type Props = {
  username: string;
};

const AIChatbox = ({ username }: Props) => {
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

          <AIChatContent username={username} />
        </Dialog>
      </TooltipProvider>
    </>
  );
};

export default AIChatbox;
