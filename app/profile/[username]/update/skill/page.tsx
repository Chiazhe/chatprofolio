import UpdateSkill from "@/app/profile/_components/skill/UpdateSkill";
import React from "react";

const page = ({ params: { username } }: { params: { username: string } }) => {
  return <UpdateSkill username={username} />;
};

export default page;
