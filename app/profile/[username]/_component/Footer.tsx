import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="mb-20">
      <div className="flex items-center justify-center text-center text-sm font-thin">
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
          and
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
      </div>
    </footer>
  );
};

export default Footer;
