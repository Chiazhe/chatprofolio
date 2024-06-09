import { Button } from "@/components/ui/button";
import { auth, signIn, signOut } from "@/lib/auth";
import prisma from "@/lib/db";

export default async function Home() {
  const session = await auth();
  const user = session?.user;
  const users = await prisma.user.findMany();

  return (
    <main className="">
      {/* {user ? (
        <>
          {user.username}
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <ul>
              {users.map((u) => (
                <li key={u.id}>{u.name}</li>
              ))}
            </ul>
            <Button type="submit">Sign out</Button>
          </form>
        </>
      ) : (
        <form
          action={async () => {
            "use server";
            await signIn();
          }}
        >
          <Button type="submit">Sign In</Button>
        </form>
      )} */}
    </main>
  );
}
