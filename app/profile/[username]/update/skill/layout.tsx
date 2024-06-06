import UpdateFieldHeading from "@/app/profile/[username]/update/_components/UpdateFieldHeading";

export default function ProfileUpdateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <UpdateFieldHeading
        title="Skills"
        description="List your relevant skills, including technical skills, soft skills, and language proficiency."
      />
      <main className="w-full">{children}</main>
    </>
  );
}
