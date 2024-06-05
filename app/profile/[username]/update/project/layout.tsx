import UpdateFieldHeading from "@/app/profile/_components/UpdateFieldHeading";

export default function ProfileUpdateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <UpdateFieldHeading
        title="Projects"
        description="List any projects you have worked on."
      />
      <main className="">{children}</main>
    </>
  );
}
