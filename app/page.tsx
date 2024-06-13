import { Button } from "@/components/ui/button";
import { auth, signIn, signOut } from "@/lib/auth";
import prisma from "@/lib/db";
import Hero from "./_component/Hero";
import Feature from "./_component/Feature";
import Pricing from "./_component/Pricing";
import Footer from "@/components/Footer";
import UserManual from "./_component/UserManual";
import Contact from "./_component/Contact";

export default async function Home() {
  const session = await auth();
  const user = session?.user;
  const users = await prisma.user.findMany();

  return (
    <main>
      <Hero />
      <Feature />
      <UserManual />
      <Pricing />
      <Contact />
      <Footer />
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
