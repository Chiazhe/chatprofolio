// import { aiChatbox } from "@/assets/icons";
import { RiRobot2Line } from "react-icons/ri";

// import Image from "next/image";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import AIChatContent from "./AIChatContent";

type Props = { username: string };

const AIChatbox = ({ username }: Props) => {
  return (
    <>
      <TooltipProvider>
        <Dialog>
          <Tooltip>
            <DialogTrigger asChild>
              <TooltipTrigger asChild>
                <button className="fixed bottom-6 right-6 z-[100] rounded-full border-2 border-primary bg-card p-3">
                  <RiRobot2Line className="h-12 w-12" />
                  {/* <Image
                    src={aiChatbox}
                    alt={`AI Chatbox`}
                    width={50}
                    height={50}
                  /> */}
                </button>
              </TooltipTrigger>
            </DialogTrigger>
            <TooltipContent className="bg-primary text-black">
              Ask AI about {username}
            </TooltipContent>
          </Tooltip>

          <AIChatContent />
        </Dialog>
      </TooltipProvider>
    </>
  );
};

export default AIChatbox;
