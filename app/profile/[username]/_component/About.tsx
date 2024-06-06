import { BackgroundBeams } from "@/components/ui/background-beam";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { User } from "@prisma/client";
import React from "react";

type Props = {
  data: User | null;
};

const About = ({ data }: Props) => {
  return (
    <div
      id="about"
      className="w-full py-20 px-8 md:px-24 mx-auto dark:bg-neutral-950 bg-neutral-700 relative flex flex-col md:flex-row justify-center gap-24"
    >
      <div className="flex gap-8 md:min-w-[400px] md:max-w-[500px] w-full">
        <div className="flex flex-col justify-center items-center">
          <div className="w-5 h-5 rounded-full bg-stone-900 dark:bg-stone-500"></div>
          <div className="w-1 sm:h-80 h-full bg-gradient-to-b from-stone-900 dark:from-stone-500"></div>
        </div>
        <div>
          <h1 className="z-10 text-4xl md:text-6xl font-sans font-bold text-black dark:text-white">
            Hi I&apos;m,{" "}
            <span className="dark:text-stone-500 text-stone-900">
              {data?.firstName}
            </span>
          </h1>
          <p className="text-3xl my-8 text-black dark:text-white">
            {data?.shortIntro}
          </p>
          <div>
            <TextGenerateEffect
              words={data?.mediumIntro as string}
              className="text-neutral-500 relative z-10"
            />
          </div>
        </div>
      </div>
      <div className="w-full md:min-w-[300px] md:max-w-[400px]">
        <h2 className="font-bold text-3xl md:text-5xl mb-4 text-black dark:text-white">
          Overview.
        </h2>
        <p className="dark:text-stone-500 text-stone-900">
          {data?.longIntro as string}
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default About;
