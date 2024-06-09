import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Contact, User } from "@prisma/client";
import React from "react";
import Heading, { HeadingDescription } from "./ui/Heading";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin, BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

type Props = {
  data: User | null;
  contactData: Contact | null;
};

const About = ({ data, contactData }: Props) => {
  return (
    <div
      id="about"
      className="relative mx-auto mt-20 flex w-full flex-col justify-center gap-24 bg-background md:flex-row md:px-24"
    >
      <div className="flex w-full gap-8 md:min-w-[400px] md:max-w-[500px]">
        <div className="flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-primary"></div>
          <div className="h-full w-1 bg-gradient-to-b from-primary to-background sm:h-80"></div>
        </div>
        <div>
          <h1 className="z-10 font-sans text-4xl font-semibold md:text-6xl">
            Hi I&apos;m,{" "}
            <span className="font-bold text-primary">{data?.firstName}</span>
          </h1>
          <p className="my-8 text-3xl text-primary/80">{data?.shortIntro}</p>
          <div className="my-8">
            <TextGenerateEffect
              words={data?.mediumIntro as string}
              className="relative z-10"
            />
          </div>
          <ul className="flex flex-row gap-8">
            {contactData?.github && (
              <li className="z-10">
                <a href={contactData.github} target="_blank">
                  <span className="bg-primary">
                    <FaGithub className="h-8 w-8" />
                  </span>
                </a>
              </li>
            )}
            {contactData?.linkedIn && (
              <li className="z-10">
                <a href={contactData.linkedIn} target="_blank">
                  <span className="bg-primary">
                    <BsLinkedin className="h-8 w-8" />
                  </span>
                </a>
              </li>
            )}
            {contactData?.phoneNumber && (
              <li className="z-10">
                <a href={`tel:${contactData.phoneNumber}`} target="_blank">
                  <span className="bg-primary">
                    <BsTelephone className="h-8 w-8" />
                  </span>
                </a>
              </li>
            )}
            {contactData?.email && (
              <li className="z-10">
                <a href={`mailto:${contactData?.email}`} target="_blank">
                  <span className="bg-primary">
                    <MdOutlineEmail className="h-8 w-8" />
                  </span>
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="w-full md:min-w-[300px] md:max-w-[400px]">
        <HeadingDescription text="Introduction" />
        <Heading text="Overview." />
        <p className="text-gray-400">{data?.longIntro as string}</p>
      </div>
    </div>
  );
};

export default About;
