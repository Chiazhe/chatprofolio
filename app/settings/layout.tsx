import Sidebar from "@/components/Sidebar";
import ProfileBreadcrumb from "./_components/ProfileBreadcrumb";
import { Separator } from "@/components/ui/separator";
import { auth } from "@/lib/auth";

export default async function ProfileUpdateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const user = session?.user;

  return (
    <div className="flex min-h-[100vh] w-full">
      <Sidebar username={user?.username as string} />
      <main className="mx-auto w-full max-w-[1200px]">
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
  );
}
