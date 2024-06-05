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
          title="Educations"
          description="Please insert your education history."
        />
        <main className="">{children}</main>
      </div>
    </div>
  );
}
