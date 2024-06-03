import UpdateContact from "@/app/profile/_components/contact/UpdateContact";
import React from "react";

const page = ({ params: { username } }: { params: { username: string } }) => {
  return <UpdateContact username={username} />;
};

export default page;
