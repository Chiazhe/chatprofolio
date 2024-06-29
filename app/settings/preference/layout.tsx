import UpdateFieldHeading from "../_components/UpdateFieldHeading";

export default function ProfileUpdateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <UpdateFieldHeading
        title="Layout Preference"
        description="Please select your profile display layout preference."
      />
      <main className="w-full">{children}</main>
    </>
  );
}
