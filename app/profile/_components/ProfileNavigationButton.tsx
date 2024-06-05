import React from "react";

type Props = {
  title: string;
  action: () => void;
  isActive: boolean;
};

const ProfileNavigationButton = ({ title, action, isActive }: Props) => {
  return (
    <div
      onClick={action}
      className={`${
        isActive && "bg-zinc-200 dark:bg-zinc-700 font-semibold"
      } py-1 px-2 rounded hover:bg-zinc-200 hover:cursor-pointer dark:hover:bg-zinc-700`}
    >
      {title}
    </div>
  );
};

export default ProfileNavigationButton;
