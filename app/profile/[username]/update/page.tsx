import UpdateEducationComponent from "../../_components/education/UpdateEducationComponent";
import UpdateExperience from "../../_components/experience/UpdateExperience";
import UpdateAchievement from "../../_components/achievement/UpdateAchievement";
import UpdateProject from "../../_components/project/UpdateProject";
import UpdateSkill from "../../_components/skill/UpdateSkill";
import UpdateContact from "../../_components/contact/UpdateContact";

const page = ({ params: { username } }: { params: { username: string } }) => {
  return (
    <div>
      <h1>Profile update</h1>
      {/* <UpdateEducationComponent username={username} />
      <UpdateExperience username={username} />
      <UpdateProject username={username} />
      <UpdateAchievement username={username} />
      <UpdateSkill username={username} /> */}
      <UpdateContact username={username} />
    </div>
  );
};

export default page;
