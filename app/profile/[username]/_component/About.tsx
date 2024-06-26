import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Contact, User } from "@prisma/client";
import Heading, { HeadingDescription } from "./ui/Heading";
import { FaGithub } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { AboutLayoutType, aboutLayout } from "@/lib/layout-data";

type Props = {
  data: User | null;
  contactData: Contact | null;
  aboutLayoutPreference?: AboutLayoutType;
};

const About = ({ data, contactData, aboutLayoutPreference }: Props) => {
  if (aboutLayoutPreference === aboutLayout[1]) {
    return (
      <div className="relative mx-auto flex w-full flex-col justify-center gap-24 bg-background md:flex-row md:px-24">
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
                      <FaLinkedinIn className="h-8 w-8" />
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
          <div className="mb-8 text-center">
            <HeadingDescription text="INTRODUCTION" />
            <Heading text="Overview." />
          </div>
          <p className="text-gray-400">{data?.longIntro as string}</p>
        </div>
      </div>
    );
  }

  // default is classic
  return (
    <div className="relative mx-auto flex w-full max-w-[800px] flex-col justify-between gap-8 bg-background md:flex-row">
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl md:text-5xl">
          Hello, I&apos;m {data?.firstName}
        </h1>
        <p className="mt-2 text-3xl text-primary/80 md:mt-4 md:text-6xl">
          {data?.shortIntro}
        </p>
        <p className="mt-4 max-w-[700px] text-gray-400 md:mt-8">
          {data?.longIntro as string}
        </p>
      </div>
      <ul className="flex flex-row justify-center gap-2 md:flex-col md:gap-3">
        <div className="hidden flex-col items-center justify-center md:flex">
          <div className="h-5 w-5 rounded-full bg-primary"></div>
          <div className="h-[40px] w-1 bg-primary"></div>
        </div>
        {contactData?.github && (
          <li className="z-10 rounded-full p-2 hover:bg-primary/50">
            <a href={contactData.github} target="_blank">
              <span className="bg-primary">
                <FaGithub className="h-6 w-6" />
              </span>
            </a>
          </li>
        )}
        {contactData?.linkedIn && (
          <li className="z-10 rounded-full p-2 hover:bg-primary/50">
            <a href={contactData.linkedIn} target="_blank">
              <span className="bg-primary">
                <FaLinkedinIn className="h-6 w-6" />
              </span>
            </a>
          </li>
        )}
        {contactData?.phoneNumber && (
          <li className="z-10 rounded-full p-2 hover:bg-primary/50">
            <a href={`tel:${contactData.phoneNumber}`} target="_blank">
              <span className="bg-primary">
                <BsTelephone className="h-6 w-6" />
              </span>
            </a>
          </li>
        )}
        {contactData?.email && (
          <li className="z-10 rounded-full p-2 hover:bg-primary/50">
            <a href={`mailto:${contactData?.email}`} target="_blank">
              <span className="bg-primary">
                <MdOutlineEmail className="h-6 w-6" />
              </span>
            </a>
          </li>
        )}
        {contactData?.leetcode && (
          <li className="z-10 rounded-full p-2 hover:bg-primary/50">
            <a href={contactData.leetcode} target="_blank">
              <span className="bg-primary">
                <SiLeetcode className="h-6 w-6" />
              </span>
            </a>
          </li>
        )}
        <div className="mx-auto hidden h-full min-h-[150px] w-1 bg-gradient-to-b from-primary to-background md:flex"></div>
      </ul>
    </div>
  );
};

export default About;
