import UpdateEducationComponent from "@/app/profile/_components/education/UpdateEducationComponent";
import React from "react";

const page = ({ params: { username } }: { params: { username: string } }) => {
  return <UpdateEducationComponent username={username} />;
};

export default page;
