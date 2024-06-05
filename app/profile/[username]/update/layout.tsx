import Sidebar from "@/components/Sidebar";
import ProfileBreadcrumb from "../../_components/ProfileBreadcrumb";

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
          <hr />
          <div className="flex flex-col md:flex-row gap-4 py-4 w-full">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
