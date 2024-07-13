"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const NotFoundRoutingButton = () => {
  const router = useRouter();
  return (
    <Button className="px-4 py-2" onClick={() => router.push("/")}>
      Go to homepage.
    </Button>
  );
};

export default NotFoundRoutingButton;
