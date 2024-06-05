import ProfileBreadcrumb from "@/app/profile/_components/ProfileBreadcrumb";
import UpdateFieldHeading from "@/app/profile/_components/UpdateFieldHeading";

export default function ProfileUpdateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-8">
      <div className="py-4">
        <ProfileBreadcrumb />
      </div>
      <hr />
      <div className="flex flex-col md:flex-row gap-4 py-4">
        <UpdateFieldHeading
          title="Experiences"
          description="List your previous work experience."
        />
        <main className="">{children}</main>
      </div>
    </div>
  );
}
