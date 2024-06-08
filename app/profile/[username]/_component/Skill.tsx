import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Skill as SkillData } from "@prisma/client";
import React from "react";
import Heading, { HeadingDescription } from "./ui/Heading";

type Props = {
  data: SkillData[] | null;
};

const Skill = ({ data }: Props) => {
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
  let secondData = null;
  if (data && data.length > 10) {
    const middleIndex = Math.ceil(data.length / 2);
    secondData = data.slice(middleIndex);
    data = data.slice(0, middleIndex);
  }

  return (
    <div
      id="skill"
      className="my-48 flex w-screen flex-col items-center justify-center"
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
