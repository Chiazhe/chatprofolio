import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Skill as SkillData } from "@prisma/client";
import Heading, { HeadingDescription } from "./ui/Heading";
import { HoverEffect } from "@/components/ui/card-hover-effect-skill_section";
import { skillLayout, SkillLayoutType } from "@/lib/layout-data";

type Props = {
  data: SkillData[] | null;
  skillLayoutPreference?: SkillLayoutType;
};

const Skill = ({ data, skillLayoutPreference }: Props) => {
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

  if (skillLayoutPreference === skillLayout[1]) {
    let secondData = null;
    if (data && data.length > 10) {
      const middleIndex = Math.ceil(data.length / 2);
      secondData = data.slice(middleIndex);
      data = data.slice(0, middleIndex);
    }

    return (
      <div className="flex max-w-full flex-col items-center justify-center overflow-hidden">
        <div className="mb-8 text-center">
          <HeadingDescription text="WHAT I EXCEL AT." />
          <Heading text="Skills." />
        </div>
        <InfiniteMovingCards
          items={data || []}
          direction="left"
          speed="normal"
        />
        {secondData && (
          <InfiniteMovingCards
            items={secondData}
            direction="right"
            speed="normal"
          />
        )}
      </div>
    );
  }

  // default is classic
  return (
    <>
      <div className="mb-8 text-center">
        <HeadingDescription text="WHAT I EXCEL AT." />
        <Heading text="Skills." />
      </div>
      <div className="mx-auto max-w-5xl px-8">
        <HoverEffect items={data} />
      </div>
    </>
  );
};

export default Skill;
