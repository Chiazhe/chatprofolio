import UpdateFieldHeading from "@/app/profile/[username]/update/_components/UpdateFieldHeading";

export default function ProfileUpdateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <UpdateFieldHeading
        title="Experiences"
        description="List your previous work experience."
      />
      <main className="w-full">{children}</main>
    </>
  );
}
