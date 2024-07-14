"use client";
import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { uppercase_first_letter } from "@/lib/reusableFunction";

export function ThemeToggler({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { setTheme, themes } = useTheme();

  const map = new Map();
  map.set("blue", "bg-blue-500");
  map.set("zinc", "bg-zinc-500");
  map.set("rose", "bg-rose-500");
  map.set("green", "bg-green-500");
  map.set("orange", "bg-orange-500");
  map.set("red", "bg-red-500");
  map.set("violet", "bg-violet-500");
  map.set("yellow", "bg-yellow-500");

  return (
    <div className={className} {...props}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {themes
            .filter((theme) => !(theme === "system"))
            .map((theme) => (
              <DropdownMenuItem
                key={theme}
                onClick={() => setTheme(theme)}
                className="hover:cursor-pointer"
              >
                <div className="flex flex-row items-center justify-center gap-2">
                  <div className={`p-2 ${map.get(theme)} rounded-full`}></div>
                  <p>{uppercase_first_letter(theme)}</p>
                </div>
              </DropdownMenuItem>
            ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
