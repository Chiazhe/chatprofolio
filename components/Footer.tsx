import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  className?: string;
};

const Footer = (props: Props) => {
  return (
    <footer className={cn("z-100 pb-20", props.className)}>
      <div className="flex flex-col items-center justify-center gap-4 text-center text-sm font-thin">
        <p className="max-w-[300px]">
          Coded in{" "}
          <a
            href="https://code.visualstudio.com/"
            className="font-normal text-primary/80 hover:text-primary"
            target="_blank"
          >
            Visual Studio Code
          </a>
          . Built with{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            className="font-normal text-primary/80 hover:text-primary"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            className="font-normal text-primary/80 hover:text-primary"
          >
            Tailwind CSS
          </a>
          . Power by Artwork from{" "}
          <a
            href="https://ui.aceternity.com/"
            target="_blank"
            className="font-normal text-primary/80 hover:text-primary"
          >
            Aceternity UI
          </a>{" "}
          and{" "}
          <a
            href="https://ui.shadcn.com/"
            target="_blank"
            className="font-normal text-primary/80 hover:text-primary"
          >
            shadcn/ui
          </a>
          .
        </p>
        <p className="max-w-[300px]">
          ©{" "}
          <a
            href="https://chatprofolio.vercel.app/"
            className="font-normal text-primary/80 hover:text-primary"
            target="_blank"
          >
            ChatProfolio
          </a>{" "}
          2024
          <br></br>Developed by{" "}
          <a
            href="https://www.linkedin.com/in/chiazhe/"
            className="font-normal text-primary/80 hover:text-primary"
            target="_blank"
          >
            Lee Chia Zhe
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
