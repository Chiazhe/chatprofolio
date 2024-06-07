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
      className={`py-1 px-2 rounded flex items-center gap-2
            hover:bg-primary/75 hover:cursor-pointer ${
              isActive && "bg-primary/75 font-semibold"
            }`}
    >
      <span>{icon}</span>
      {title}
    </div>
  );
};

export default ProfileNavigationButton;
