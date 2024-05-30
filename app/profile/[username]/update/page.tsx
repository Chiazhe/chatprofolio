import UpdateExperience from "../../_components/experience/UpdateExperience";

const page = ({ params: { username } }: { params: { username: string } }) => {
  return (
    <div>
      <h1>Profile update</h1>
      {/* <UpdateEducationComponent username={username} /> */}
      <UpdateExperience username={username} />
    </div>
  );
};

export default page;
