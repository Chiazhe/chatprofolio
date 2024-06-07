import React from "react";

type Props = {
  text: string;
};

const Heading = ({ text }: Props) => {
  return (
    <h2 className="my-2 text-3xl font-bold text-primary md:text-5xl">{text}</h2>
  );
};

export const HeadingDescription = ({ text }: Props) => {
  return <p className="text-xl">{text}</p>;
};

export default Heading;
