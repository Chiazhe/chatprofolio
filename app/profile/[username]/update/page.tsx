import UpdateEducationComponent from "../../_components/education/UpdateEducationComponent";
import UpdateExperience from "../../_components/experience/UpdateExperience";
import UpdateAchievement from "../../_components/achievement/UpdateAchievement";
import UpdateProject from "../../_components/project/UpdateProject";

const page = ({ params: { username } }: { params: { username: string } }) => {
  return (
    <div>
      <h1>Profile update</h1>
      <UpdateEducationComponent username={username} />
      <UpdateExperience username={username} />
      <UpdateProject username={username} />
      <UpdateAchievement username={username} />
    </div>
  );
};

export default page;
