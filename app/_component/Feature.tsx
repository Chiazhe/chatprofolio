import { data } from "@/lib/landing-page-data";
import React from "react";
import Image from "next/image";
import { lilita_one } from "../fonts";
import { cn } from "@/lib/utils";

type Props = {};

const Feature = (props: Props) => {
  return (
    <div id="feature" className="bg-black px-12 py-32 sm:px-16 md:px-20">
      <h1
        className={cn(
          "text-center text-5xl font-bold text-primary md:text-6xl",
          lilita_one.className,
        )}
      >
        The Service We Provides.
      </h1>
      <div className="mt-12 grid w-full grid-cols-1 gap-10 md:grid-cols-2">
        {data.feature.features.map((feature, index) => (
          <div
            key={`feature-${index}`}
            className="flex flex-col gap-4 rounded-3xl border-[0.5px] border-primary bg-card p-8 py-6 hover:cursor-pointer md:p-5 lg:flex-row lg:items-center lg:p-10"
          >
            <Image
              src={feature.url}
              alt={feature.heading}
              width={100}
              height={200}
            />
            <div>
              <h1 className="text-start text-xl font-bold md:text-2xl">
                {feature.heading}
              </h1>
              <p className="text-white-100 mt-3 text-start">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
