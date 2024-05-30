import UpdateEducationComponent from "../../_components/education/UpdateEducationComponent";

const page = ({ params: { username } }: { params: { username: string } }) => {
  return (
    <div>
      <h1>Profile update</h1>
      <UpdateEducationComponent username={username} />
    </div>
  );
};

export default page;
