"use client";
import { createChatbotRecords } from "@/actions/create-chatbot-records";
import {
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Contact,
  Education,
  Experience,
  Project,
  Skill,
  User,
} from "@prisma/client";
import { Message, useChat } from "ai/react";
import Link from "next/link";
import { LuSendHorizonal } from "react-icons/lu";
import { RiRobot2Line } from "react-icons/ri";
import ReactMarkdown from "react-markdown";

type Props = {
  username: string;
  basicInformationData: User | null;
  contactData: Contact | null;
  workExperienceData: Experience[] | null;
  educationData: Education[] | null;
  projectData: Project[] | null;
  skillData: Skill[] | null;
};

const AIChatContent = ({
  username,
  basicInformationData,
  contactData,
  workExperienceData,
  educationData,
  projectData,
  skillData,
}: Props) => {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      onFinish: async (message: Message) => {
        createChatbotRecords(input, message.content, username);
      },
      body: {
        username: username,
      },
      initialMessages: [
        {
          id: "system-message-1",
          content: `This is general information about the user ${JSON.stringify(basicInformationData)}`,
          role: "system",
        },
        {
          id: "system-message-2",
          content: `This is contact information about the user ${JSON.stringify(contactData)}`,
          role: "system",
        },
        {
          id: "system-message-3",
          content: `This is work experience infromation about the user ${JSON.stringify(workExperienceData)}`,
          role: "system",
        },
        {
          id: "system-message-4",
          content: `This is education information about the user ${JSON.stringify(educationData)}`,
          role: "system",
        },
        {
          id: "system-message-5",
          content: `This is past or current project information about the user ${JSON.stringify(projectData)}`,
          role: "system",
        },
        {
          id: "system-message-6",
          content: `This is skills information about the user ${JSON.stringify(skillData)}`,
          role: "system",
        },
        {
          id: "initial-message-1",
          content: `Hi, I'm ChatProfolioAI. Ask me anything about ${username} and I'll answer you.`,
          role: "assistant",
        },
        //   {
        //     id: "ade1",
        //     content:
        //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //     role: "user",
        //   },
      ],
    });

  return (
    <DialogContent className="flex h-[90vh] w-[90vw] max-w-[90vw] flex-col justify-between border-zinc-800 p-8">
      <div className="hidden">
        <DialogTitle>ChatProfolio AI</DialogTitle>
        <DialogDescription>
          This is an AI helper tool for querying about user in this page.
        </DialogDescription>
      </div>
      <div className="overflow-y-scroll">
        <div className="flex flex-col gap-4 py-4">
          {messages.map(
            (m) =>
              (m.role === "user" || m.role === "assistant") && (
                <div
                  key={m.id}
                  className={`flex w-full items-center ${m.role === "user" ? "justify-end" : " "}`}
                >
                  {m.role === "assistant" && (
                    <RiRobot2Line className="mx-4 h-8 w-8" />
                  )}
                  <div
                    className={`w-fit rounded p-2 ${m.role === "user" ? "ml-8 bg-white text-right text-black md:max-w-[700px]" : "mr-8 border border-input"}`}
                  >
                    <ReactMarkdown
                      components={{
                        a: ({ ...props }) => (
                          <Link
                            {...props}
                            href={props.href ?? ""}
                            className="text-primary hover:underline"
                          />
                        ),
                        p: ({ ...props }) => (
                          <p {...props} className="mt-3 first:mt-0" />
                        ),
                        ul: ({ ...props }) => (
                          <ul
                            {...props}
                            className="mt-3 list-inside list-disc first:mt-0"
                          />
                        ),
                        li: ({ ...props }) => (
                          <li {...props} className="mt-1" />
                        ),
                      }}
                    >
                      {m.content}
                    </ReactMarkdown>
                  </div>
                </div>
              ),
          )}
        </div>
      </div>
      <form
        onSubmit={
          isLoading
            ? (e) => {
                e.preventDefault();
                return;
              }
            : handleSubmit
        }
        className="w-full"
      >
        <div className="flex flex-row">
          <Input
            className="rounded bg-card"
            value={input}
            onChange={handleInputChange}
            placeholder="Message ChatProfolio AI"
          />
          <button className="ml-4 flex h-10 w-10 items-center justify-center">
            <LuSendHorizonal
              className={`h-full w-full ${isLoading && "bg-gray-300"}`}
            />
          </button>
        </div>
      </form>
    </DialogContent>
  );
};

export default AIChatContent;
