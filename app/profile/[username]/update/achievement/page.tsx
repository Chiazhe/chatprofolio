import UpdateAchievement from "@/app/profile/_components/achievement/UpdateAchievement";
import React from "react";

const page = ({ params: { username } }: { params: { username: string } }) => {
  return <UpdateAchievement username={username} />;
};

export default page;
