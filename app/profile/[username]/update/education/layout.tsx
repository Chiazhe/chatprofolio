import UpdateFieldHeading from "@/app/profile/_components/UpdateFieldHeading";

export default function ProfileUpdateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <UpdateFieldHeading
        title="Educations"
        description="Please insert your education history."
      />
      <main className="w-full">{children}</main>
    </>
  );
}
