import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  className?: string;
  title: string;
  action: () => void;
  isActive: boolean;
  icon: React.JSX.Element;
};

const ProfileNavigationButton = ({
  className,
  title,
  action,
  isActive,
  icon,
}: Props) => {
  return (
    <div
      onClick={action}
      className={cn(
        `flex items-center gap-2 rounded px-2 py-1 hover:cursor-pointer hover:bg-primary/75 ${
          isActive && "bg-primary/75 font-semibold"
        }`,
        className,
      )}
    >
      <span>{icon}</span>
      {title}
    </div>
  );
};

export default ProfileNavigationButton;
