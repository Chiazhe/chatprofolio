import UpdateFieldHeading from "@/app/profile/_components/UpdateFieldHeading";

export default function ProfileUpdateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <UpdateFieldHeading
        title="Profile"
        description="Please introduce yourself."
      />
      <main className="">{children}</main>
    </>
  );
}
