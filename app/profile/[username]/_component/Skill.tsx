import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Skill as SkillData } from "@prisma/client";
import React from "react";
import Heading, { HeadingDescription } from "./ui/Heading";
import { HoverEffect } from "@/components/ui/card-hover-effect-skill_section";

type Props = {
  data: SkillData[] | null;
  skillPreference?: string;
};

const Skill = ({ data, skillPreference }: Props) => {
  if (!data) return <></>;
  if (data) {
    data.sort((a, b) => {
      if ((a.skillYearsOfExperience || 0) < (b.skillYearsOfExperience || 0)) {
        return 1;
      }
      if ((a.skillYearsOfExperience || 0) > (b.skillYearsOfExperience || 0)) {
        return -1;
      }
      return 0;
    });
  }

  if (skillPreference === "1") {
    return (
      <div>
        <div className="mb-8 text-center">
          <HeadingDescription text="WHAT I EXCEL AT." />
          <Heading text="Skills." />
        </div>
        <div className="mx-auto max-w-5xl px-8">
          <HoverEffect items={data} />
        </div>
      </div>
    );
  }
  let secondData = null;
  if (data && data.length > 10) {
    const middleIndex = Math.ceil(data.length / 2);
    secondData = data.slice(middleIndex);
    data = data.slice(0, middleIndex);
  }

  return (
    <div
      id="skill"
      className="my-48 flex max-w-full flex-col items-center justify-center overflow-hidden"
    >
      <div className="mb-8 text-center">
        <HeadingDescription text="WHAT I EXCEL AT." />
        <Heading text="Skills." />
      </div>
      <InfiniteMovingCards items={data || []} direction="left" speed="normal" />
      {secondData && (
        <InfiniteMovingCards
          items={secondData}
          direction="right"
          speed="normal"
        />
      )}
    </div>
  );
};

export default Skill;
