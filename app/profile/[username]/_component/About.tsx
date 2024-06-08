import { BackgroundBeams } from "@/components/ui/background-beam";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { User } from "@prisma/client";
import React from "react";
import Heading, { HeadingDescription } from "./ui/Heading";

type Props = {
  data: User | null;
};

const About = ({ data }: Props) => {
  return (
    <div
      id="about"
      className="relative mx-auto mt-20 flex w-full flex-col justify-center gap-24 bg-background px-8 md:flex-row md:px-24"
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
          <div>
            <TextGenerateEffect
              words={data?.mediumIntro as string}
              className="relative z-10"
            />
          </div>
        </div>
      </div>
      <div className="w-full md:min-w-[300px] md:max-w-[400px]">
        <HeadingDescription text="Introduction" />
        <Heading text="Overview." />
        <p className="text-gray-400">{data?.longIntro as string}</p>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default About;
