import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import Link from "next/link";
import React from "react";

const page = async ({
  params: { username },
}: {
  params: { username: string };
}) => {
  const session = await auth();
  const user = session?.user;

  return (
    <div>
      <div>{username.toUpperCase()} profile</div>
      {username === user?.username && (
        <Button>
          <Link href={`/profile/${username}/update`}>Update</Link>
        </Button>
      )}
    </div>
  );
};

export default page;
