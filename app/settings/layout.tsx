import Sidebar from "@/components/Sidebar";
import ProfileBreadcrumb from "./_components/ProfileBreadcrumb";
import { Separator } from "@/components/ui/separator";
import { auth } from "@/lib/auth";
import { User } from "@prisma/client";
import Footer from "@/components/Footer";

export default async function ProfileUpdateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const user = session?.user;

  return (
    <div className="w-full flex-col">
      <div className="flex min-h-[100vh]">
        <Sidebar username={user?.username as string} user={user as User} />
        <main className="mx-auto w-full max-w-[1200px] overflow-y-scroll">
          <div className="mx-8">
            <div className="py-4">
              <ProfileBreadcrumb />
            </div>
            <Separator className="mb-2" />
            <div className="flex w-full flex-col gap-4 md:flex-row">
              {children}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
