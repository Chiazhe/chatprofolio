import React from "react";
import Heading, { HeadingDescription } from "./ui/Heading";
import { Project as ProjectData } from "@prisma/client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ImGithub } from "react-icons/im";
import { FaLink } from "react-icons/fa6";

type Props = {
  data: ProjectData[] | null;
  projectPreference?: string;
};

const Project = ({ data, projectPreference }: Props) => {
  if (projectPreference === "1") {
    return (
      <div>
        <div className="mb-8 text-center">
          <HeadingDescription text="WHAT I HAVE CREATED AND BUILT." />
          <Heading text="Projects." />
        </div>
        <div className="grid w-full gap-[2rem] md:grid-cols-[repeat(auto-fill,minmax(500px,1fr))] md:gap-[4rem]">
          {data?.map((project, index) => (
            <div
              key={`project-${index}`}
              className="flex w-full flex-col gap-4 border-[1px] border-card p-8 hover:border-slate-600 hover:bg-primary/10"
            >
              <div className="flex items-center gap-4">
                <h1 className="text-lg text-primary md:text-3xl">
                  {project.projectTitle}
                </h1>
                {project.githubLink && (
                  <Link href={project.githubLink} target="__blank">
                    <ImGithub className="h-6 w-6 md:h-8 md:w-8" />
                  </Link>
                )}
                {project.projectUrl && (
                  <Link href={project.projectUrl} target="__blank">
                    <FaLink className="h-6 w-6 md:h-8 md:w-8" />
                  </Link>
                )}
              </div>
              {project.projectImage && (
                <Image
                  src={project.projectImage}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              )}
              {project.projectDescription.map((description, descIndex) => (
                <div key={descIndex} className="mt-2 text-sm">
                  {description}
                </div>
              ))}

              <div className="flex flex-wrap gap-1">
                {project.technologyUsed.map((tech, techIndex) => (
                  <div
                    key={`tech-${techIndex}`}
                    className={`bg-primary px-2 py-1 text-black`}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="mb-8 text-center">
        <HeadingDescription text="WHAT I HAVE CREATED AND BUILT." />
        <Heading text="Projects." />
      </div>
      <div className="grid w-full gap-[2rem] md:grid-cols-[repeat(auto-fill,minmax(500px,1fr))] md:gap-[4rem]">
        {data?.map((project, index) => (
          <CardContainer key={`project-${index}`} className="inter-var">
            <CardBody className="group/card relative flex h-auto w-auto flex-col gap-4 rounded-xl border border-primary p-6 sm:w-[30rem]">
              <CardItem translateZ="100" className="text-2xl font-bold">
                {project.projectTitle}
              </CardItem>
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
