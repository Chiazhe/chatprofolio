import React from "react";

type Props = {
  title: string;
  description: string;
};

const UpdateFieldHeading = ({ title, description }: Props) => {
  return (
    <div className="w-[300px]">
      <h2 className="font-bold text-2xl mb-2">{title}</h2>
      <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default UpdateFieldHeading;
