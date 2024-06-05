import Sidebar from "@/components/Sidebar";

export default function ProfileUpdateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-[100vw] min-h-[100vh]">
      <Sidebar />
      <main className="w-full">{children}</main>
    </div>
  );
}
