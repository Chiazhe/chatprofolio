import { auth } from "@/lib/auth";
import SetupUsername from "./_components/SetupUsername";
import Link from "next/link";

const page = async ({}: {}) => {
  const session = await auth();
  const user = session?.user;

  return (
    <div>
      <h1 className="mb-4 mt-2 text-3xl text-primary">
        Welcome to ChatProfolio
      </h1>
      {user ? (
        <>
          {!!!user?.username && <SetupUsername />}
          <p>
            Visit your site at{" "}
            <span className="italic text-primary/50 underline">
              <Link href={`/profile/${user.username}`}>here</Link>
            </span>
          </p>
        </>
      ) : (
        <div>Please login first to access the function.</div>
      )}
    </div>
  );
};

export default page;
