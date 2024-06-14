import { data } from "@/lib/landing-page-data";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div
      id="about"
      className="relative flex w-full items-center justify-center bg-black px-12 py-36 bg-grid-white/[0.2] sm:px-16 md:px-24 md:py-48"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>
      <div className="text-center md:px-44">
        <p className="relative z-20 py-8 text-5xl font-bold md:text-6xl">
          {data.hero.headline}
          <span className="text-primary">{data.hero.headlineHighlight}</span>
        </p>
        <p className="relative z-20 py-3 text-lg font-light">
          {data.hero.subheadline}
        </p>
        <button className="mt-8 inline-flex animate-shimmer rounded-lg border border-primary/50 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-8 py-4 text-primary transition-colors">
          {data.hero.getStartedButton}
        </button>
      </div>
    </div>
  );
};

export default Hero;
