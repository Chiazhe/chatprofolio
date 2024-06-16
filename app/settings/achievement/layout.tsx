import UpdateFieldHeading from "../_components/UpdateFieldHeading";

export default function ProfileUpdateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <UpdateFieldHeading
        title="Achivements"
        description="List any notable achievements, awards, or recognition."
      />
      <main className="w-full">{children}</main>
    </>
  );
}
