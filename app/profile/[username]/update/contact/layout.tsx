import UpdateFieldHeading from "@/app/profile/_components/UpdateFieldHeading";

export default function ProfileUpdateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <UpdateFieldHeading
        title="Contacts"
        description="Please provide your contact details."
      />
      <main className="">{children}</main>
    </>
  );
}
