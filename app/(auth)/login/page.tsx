import { BackgroundBeams } from "@/components/ui/background-beam";
import { Button } from "@/components/ui/button";
import { auth, signIn } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";
import { FcGoogle } from "react-icons/fc";

type Props = {};

const page = async (props: Props) => {
  const session = await auth();
  const user = session?.user;

  if (user) {
    redirect("/settings");
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-thin">Login or Sign Up</h1>
      <div className="mb-20 h-[1px] w-full max-w-[300px] bg-primary" />
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <Button className="flex gap-4 rounded-xl bg-white px-16 py-6 text-black hover:bg-slate-100">
          <FcGoogle className="h-8 w-8" />
          Continue with Google
        </Button>
      </form>
      <BackgroundBeams className="z-[-10]" />
    </div>
  );
};

export default page;
