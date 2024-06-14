"use client";

import { Vortex } from "@/components/ui/vortex";
import { data } from "@/lib/landing-page-data";
import React from "react";

type Props = {};

const GetStarted = (props: Props) => {
  return (
    <Vortex
      baseSpeed={0.0001}
      rangeSpeed={1.5}
      baseHue={100}
      backgroundColor="black"
      className="flex h-full w-full flex-col items-center justify-center px-2 py-4 md:px-10"
      containerClassName="px-12 py-32 sm:px-16 md:px-20"
    >
      <h2 className="text-center text-2xl font-bold text-white md:text-5xl">
        {data.getStarted.main2}
      </h2>
      <h2 className="text-center text-2xl font-bold text-white md:text-5xl">
        {data.getStarted.main}
      </h2>
      <p className="mt-8 text-center text-lg text-white md:mt-16">
        {data.getStarted.secondary}
      </p>
      <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row md:mt-8">
        <button className="mt-4 rounded-lg bg-primary px-4 py-2 font-semibold text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset] transition duration-200 hover:bg-white hover:text-primary md:mt-8">
          {data.getStarted.button}
        </button>
      </div>
    </Vortex>
  );
};

export default GetStarted;
