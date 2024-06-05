import React from "react";

type Props = {
  title: string;
  action: () => void;
  isActive: boolean;
  icon: React.JSX.Element;
};

const ProfileNavigationButton = ({ title, action, isActive, icon }: Props) => {
  return (
    <div
      onClick={action}
      className={`${
        isActive && "bg-zinc-200 dark:bg-slate-800  font-semibold"
      } py-1 px-2 rounded hover:bg-zinc-200 hover:cursor-pointer dark:hover:bg-slate-800 flex items-center gap-2`}
    >
      <span>{icon}</span>
      {title}
    </div>
  );
};

export default ProfileNavigationButton;
