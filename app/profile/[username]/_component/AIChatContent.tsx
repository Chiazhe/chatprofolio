"use client";
import { DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useChat } from "ai/react";
import React from "react";
import { LuSendHorizonal } from "react-icons/lu";
import { RiRobot2Line } from "react-icons/ri";

const AIChatContent = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages: [
      {
        id: "initialmessage1",
        content: "Hi, I'm ChatProfolioAI. Ask me anything and I'll answer you.",
        role: "assistant",
      },
      //   {
      //     id: "ade1",
      //     content:
      //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      //     role: "user",
      //   },
      //   {
      //     id: "ade2",
      //     content:
      //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      //     role: "assistant",
      //   },
      //   {
      //     id: "ade3",
      //     content:
      //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      //     role: "user",
      //   },
    ],
  });

  return (
    <DialogContent className="flex h-[90vh] w-[90vw] max-w-[90vw] flex-col justify-between border-zinc-800 bg-card p-8">
      <div className="overflow-y-scroll">
        <div className="flex flex-col gap-4">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex w-full items-center ${m.role === "user" ? "justify-end" : " "}`}
            >
              {m.role === "assistant" && (
                <RiRobot2Line className="mx-4 h-8 w-8" />
              )}
              <p
                className={`w-fit rounded p-2 ${m.role === "user" ? "ml-8 bg-white text-right text-black md:max-w-[700px]" : "mr-8 border border-input"}`}
              >
                {m.content}
              </p>
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-row">
          <Input
            className="rounded bg-card"
            value={input}
            onChange={handleInputChange}
            placeholder="Message ChatProfolio AI"
          />
          <button className="ml-4 flex h-10 w-10 items-center justify-center">
            <LuSendHorizonal className="h-full w-full" />
          </button>
        </div>
      </form>
    </DialogContent>
  );
};

export default AIChatContent;
