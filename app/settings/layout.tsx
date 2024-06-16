import Sidebar from "@/components/Sidebar";
import ProfileBreadcrumb from "./_components/ProfileBreadcrumb";
import { Separator } from "@/components/ui/separator";

export default function ProfileUpdateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full min-h-[100vh]">
      <Sidebar />
      <main className="w-full max-w-[1200px] mx-auto">
        <div className="mx-8">
          <div className="py-4">
            <ProfileBreadcrumb />
          </div>
          <Separator className="mb-2" />
          <div className="flex flex-col md:flex-row gap-4 w-full">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
