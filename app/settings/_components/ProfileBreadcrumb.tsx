"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { SlashIcon } from "@radix-ui/react-icons";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { uppercase_first_letter } from "@/lib/reusableFunction";

const ProfileBreadcrumb = () => {
  const router = useRouter();
  const path = usePathname();
  const tempPath = path?.split("/");
  const currentPath = tempPath.pop();
  const profilePath = tempPath.join("/");

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <div
            onClick={() => router.push(`${profilePath}`)}
            className="hover:cursor-pointer"
          >
            Settings
          </div>
        </BreadcrumbItem>
        {currentPath !== "settings" && (
          <>
            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>
                {uppercase_first_letter(currentPath as string)}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default ProfileBreadcrumb;
