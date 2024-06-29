"use client";
import { data } from "@/lib/landing-page-data";
import { useRouter } from "next/navigation";
import React from "react";

const HeroRedirectButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        console.log("cliecked");
        router.push("/login");
      }}
      className="mt-8 inline-flex animate-shimmer rounded-lg border border-primary/50 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-8 py-4 text-primary transition-colors"
    >
      {data.hero.getStartedButton}
    </button>
  );
};

export default HeroRedirectButton;
