import { BackgroundBeams } from "@/components/ui/background-beam";
import { Button } from "@/components/ui/button";
import { auth, signIn } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import LoginPageHeader from "./_components/LoginPageHeader";

const page = async () => {
  const session = await auth();
  const user = session?.user;

  if (user) {
    redirect("/settings");
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-thin">
        Welcome to <LoginPageHeader />
      </h1>
      <h6 className="text-gray-500">
        Create a professional portfolio and shares with your potential
        employers.
      </h6>
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
        className="my-4"
      >
        <Button className="flex gap-4 rounded-xl bg-white px-8 py-6 text-black hover:bg-slate-100">
          <FcGoogle className="h-8 w-8" />
          Continue with Google
        </Button>
      </form>
      <BackgroundBeams className="z-[-10]" />
    </div>
  );
};

export default page;
