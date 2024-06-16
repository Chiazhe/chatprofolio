import React from "react";

type Props = {
  title: string;
  description: string;
};

const UpdateFieldHeading = ({ title, description }: Props) => {
  return (
    <div className="w-[300px] py-8">
      <h2 className="font-extrabold text-2xl mb-2 text-primary">{title}</h2>
      <p className="text-sm text-primary/80">{description}</p>
    </div>
  );
};

export default UpdateFieldHeading;
