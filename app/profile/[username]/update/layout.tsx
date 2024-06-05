import Sidebar from "@/components/Sidebar";
import ProfileBreadcrumb from "../../_components/ProfileBreadcrumb";

export default function ProfileUpdateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-[100vw] min-h-[100vh]">
      <Sidebar />
      <main className="w-full">
        <div className="mx-8">
          <div className="py-4">
            <ProfileBreadcrumb />
          </div>
          <hr />
          <div className="flex flex-col md:flex-row gap-4 py-4">{children}</div>
        </div>
      </main>
    </div>
  );
}
