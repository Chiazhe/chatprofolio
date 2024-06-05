import UpdateBasicInformation from "@/app/profile/_components/basicInformation/UpdateBasicInformation";
import React from "react";

const page = ({ params: { username } }: { params: { username: string } }) => {
  return <UpdateBasicInformation username={username} />;
};

export default page;
