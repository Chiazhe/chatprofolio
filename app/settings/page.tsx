import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const page = async ({}: {}) => {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/settings");
  }
  return (
    <div>
      <h1>Profile update</h1>
    </div>
  );
};

export default page;
