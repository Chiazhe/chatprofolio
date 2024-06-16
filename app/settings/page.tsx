import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import SetupUsername from "./_components/SetupUsername";

const page = async ({}: {}) => {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/settings");
  }

  return (
    <div>
      <h1 className="mb-4 mt-2 text-3xl text-primary">
        Welcome to ChatProfolio
      </h1>
      {!!!user.username && <SetupUsername />}
    </div>
  );
};

export default page;
