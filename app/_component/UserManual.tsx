"use client";

import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { data } from "@/lib/landing-page-data";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

type Props = {};

const UserManual = (props: Props) => {
  return (
    <div className="relative w-full px-12 py-32 bg-grid-white/[0.05] sm:px-16 md:px-20">
      <h1 className="relative z-10 text-center text-5xl font-bold text-primary md:text-6xl">
        User Manual.
      </h1>
      <div className="flex items-center justify-center">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-card [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]"></div>
        <div className="my-20 flex w-full flex-col items-center justify-center gap-4 lg:flex-row">
          {data.userManual.manual.map((manual, index) => (
            <Card
              title={manual.title}
              icon={<AceternityIcon order={`Step ${index + 1}`} />}
              des={manual.description}
              key={`manual-${index}`}
            >
              <CanvasRevealEffect
                animationSpeed={5.1}
                // add these classed for the border rounded overflowing -> rounded-3xl overflow-hidden
                containerClassName={`${index === 0 && "bg-sky-300"} ${index === 1 && "bg-indigo-400"} ${index === 2 && "bg-teal-400"} ${index === 3 && "bg-lime-400"} rounded-3xl overflow-hidden`}
              />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserManual;

const Card = ({
  title,
  icon,
  children,
  // add this one for the desc
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // change h-[30rem] to h-[35rem], add rounded-3xl
      className="group/canvas-card relative mx-auto flex w-full max-w-sm items-center justify-center rounded-3xl border border-primary/30 p-4 dark:border-white/[0.2] lg:h-[35rem]"
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "hsl(var(--card))",
        backgroundColor: "hsl(var(--card))",
      }}
    >
      {/* change to h-10 w-10 , add opacity-30  */}
      <Icon className="absolute -left-3 -top-3 h-10 w-10 text-primary opacity-60" />
      <Icon className="absolute -bottom-3 -left-3 h-10 w-10 text-primary opacity-60" />
      <Icon className="absolute -right-3 -top-3 h-10 w-10 text-primary opacity-60" />
      <Icon className="absolute -bottom-3 -right-3 h-10 w-10 text-primary opacity-60" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 h-full w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 flex min-h-[300px] items-center px-10">
        <div
          // add this for making it center
          // absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
          className="absolute left-[50%] top-[50%] mx-auto flex min-w-40 translate-x-[-50%] translate-y-[-50%] items-center justify-center text-center transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0"
        >
          {icon}
        </div>
        {/* <h2
          // change text-3xl, add text-center
          className="relative z-10 mt-4 text-center text-3xl font-bold text-black opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 dark:text-white"
        >
          {title}
        </h2> */}
        {/* add this one for the description */}
        <p
          className="relative z-10 mt-4 text-center text-xl font-extrabold text-black opacity-0 transition duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100"
          // style={{ color: "hsl(var(--primary)/50" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};
// add order prop for the Phase number change
const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="text-purple inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-5 py-2 text-2xl font-bold backdrop-blur-3xl">
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
