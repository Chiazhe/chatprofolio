import React from "react";
import Heading, { HeadingDescription } from "./ui/Heading";

type Props = {};

const Project = (props: Props) => {
  return (
    <div id="project" className="h-[100vh]">
      <div className="mb-8 text-center">
        <HeadingDescription text="WHAT I HAVE CREATED AND BUILT." />
        <Heading text="Projects." />
      </div>
    </div>
  );
};

export default Project;
