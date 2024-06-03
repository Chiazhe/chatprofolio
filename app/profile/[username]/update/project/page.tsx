import UpdateProject from "@/app/profile/_components/project/UpdateProject";
import React from "react";

const page = ({ params: { username } }: { params: { username: string } }) => {
  return <UpdateProject username={username} />;
};

export default page;
