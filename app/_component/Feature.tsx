import { data } from "@/lib/landing-page-data";
import React from "react";
import svg from "@/assets/icons/painting.svg";
import Image from "next/image";

type Props = {};

const Feature = (props: Props) => {
  return (
    <div>
      <h1 className="mdtext-6xl text-center text-5xl font-bold text-primary">
        Our Services.
      </h1>
      <div className="my-12 grid w-full grid-cols-1 gap-10 md:grid-cols-2">
        {data.feature.features.map((feature, index) => (
          <div
            key={`feature-${index}`}
            className="flex flex-col gap-4 rounded-3xl border-[1px] border-primary p-8 py-6 md:p-5 lg:flex-row lg:items-center lg:p-10"
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
