import UpdateFieldHeading from "@/app/profile/[username]/update/_components/UpdateFieldHeading";

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
      <main className="w-full">{children}</main>
    </>
  );
}
