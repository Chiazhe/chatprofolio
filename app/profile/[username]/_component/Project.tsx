import React from "react";
import Heading, { HeadingDescription } from "./ui/Heading";
import { Project as ProjectData } from "@prisma/client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type Props = {
  data: ProjectData[] | null;
};

const Project = ({ data }: Props) => {
  return (
    <div
      id="project"
      className="flex w-full flex-col items-center justify-center"
    >
      <div className="mb-8 text-center">
        <HeadingDescription text="WHAT I HAVE CREATED AND BUILT." />
        <Heading text="Projects." />
      </div>
      <div className="grid w-full gap-[2rem] md:grid-cols-[repeat(auto-fill,minmax(500px,1fr))] md:gap-[4rem]">
        {data?.map((project, index) => (
          <CardContainer key={`project-${index}`} className="inter-var">
            <CardBody className="group/card relative flex h-auto w-auto flex-col gap-4 rounded-xl border border-primary p-6 sm:w-[30rem]">
              {project.projectImage && (
                <CardItem translateZ="120" className="mt-4 w-full">
                  <Image
                    src={project.projectImage}
                    height="1000"
                    width="1000"
                    className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
              )}
              <CardItem translateZ="100" className="text-2xl font-bold">
                {project.projectTitle}
              </CardItem>
              {project.projectDescription.map((description, descIndex) => (
                <CardItem
                  key={descIndex}
                  as="p"
                  translateZ="100"
                  className="mt-2 max-w-sm text-sm"
                >
                  {description}
                </CardItem>
              ))}
              <div className="flex items-center justify-between">
                {project.githubLink && (
                  <CardItem
                    translateZ={80}
                    as={Link}
                    href={project.githubLink}
                    target="__blank"
                  >
                    <Button>GitHub Link</Button>
                  </CardItem>
                )}
                {project.projectUrl && (
                  <CardItem
                    translateZ={80}
                    as={Link}
                    href={project.projectUrl}
                    target="__blank"
                  >
                    <Button>Project URL</Button>
                  </CardItem>
                )}
              </div>
              <div className="flex flex-wrap gap-1">
                {project.technologyUsed.map((tech, techIndex) => (
                  <CardItem
                    translateZ={60}
                    key={`tech-${techIndex}`}
                    className={`rounded-full bg-primary/20 px-2 py-1 text-primary`}
                  >
                    {tech}
                  </CardItem>
                ))}
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default Project;
