"use client";
import Link from "next/link";
// import { redirect } from "next/navigation";

const LoginPageHeader = () => {
  return (
    <Link href={"/"} className="text-primary underline">
      ChatProfolio
    </Link>
  );
};

export default LoginPageHeader;
