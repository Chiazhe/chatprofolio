import UpdateExperience from "@/app/profile/_components/experience/UpdateExperience";
import React from "react";

const page = ({ params: { username } }: { params: { username: string } }) => {
  return <UpdateExperience username={username} />;
};

export default page;
