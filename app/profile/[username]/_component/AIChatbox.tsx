import { aiChatbox } from "@/assets/icons";
import Image from "next/image";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

type Props = { username: string };

const AIChatbox = ({ username }: Props) => {
  return (
    <>
      <TooltipProvider>
        <Dialog>
          <Tooltip>
            <DialogTrigger asChild>
              <TooltipTrigger asChild>
                <button className="fixed bottom-6 right-6 rounded-full border-2 border-primary bg-white p-3">
                  <Image
                    src={aiChatbox}
                    alt={`AI Chatbox`}
                    width={50}
                    height={50}
                  />
                </button>
              </TooltipTrigger>
            </DialogTrigger>
            <TooltipContent className="bg-primary text-black">
              Ask AI about {username}
            </TooltipContent>
          </Tooltip>
          <DialogContent className="h-[90vh] w-[90vw] max-w-[90vw] overflow-y-scroll bg-zinc-800 p-8">
            <div className="flex flex-col justify-between gap-4">
              <div className="flex h-full w-full items-center justify-center">
                <h2>Ask anything about {username} and I&apos;ll answer you.</h2>
              </div>
              <div>
                <Input
                  className="w-full rounded-full bg-zinc-700"
                  placeholder="Message ChatProfolio AI"
                />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </TooltipProvider>
    </>
  );
};

export default AIChatbox;
