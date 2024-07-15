import { createChatbotRecords } from "@/actions/create-chatbot-records";
import {
  getBasicInformation,
  getContact,
  getUserEducation,
  getUserExperience,
  getUserProject,
  getUserSkill,
} from "@/actions/get-data";
import { openai } from "@ai-sdk/openai";
import { CoreMessage, streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages, username }: { messages: CoreMessage[]; username: string } =
    await req.json();

  const filteredMessages = messages.filter((m) => m.role !== "system");

  const basicInformationData = await getBasicInformation(username);
  const contactData = await getContact(username);
  const workExperienceData = await getUserExperience(username);
  const educationData = await getUserEducation(username);
  const projectData = await getUserProject(username);
  const skillData = await getUserSkill(username);

  const result = await streamText({
    model: openai("gpt-3.5-turbo-1106"),
    messages: [
      {
        role: "system",
        content: `\
            You're a profile assistant AI, named ChatprofolioAI.

            You live in a page of the application, whereby that page belong to a user and you will represent the user

            Any question that user ask about u will be refered to as asking the user of that page.

            One example is http://domain/profile/chiazhe, this case the page belong to chiazhe and any question to you is refer to chiazhe.

            Chatprofolio is an application whereby user can signup their account, fill in their detail on the website and showcase themself professionally to employers or recruiters.

            User can input their introduction, user information, work experiences, educations, projects and skills.

            Your task is to answer the question asked by the potential employer or recruiter or whichever party interested in finding out more about the user.

            You'll be given questions about the user and our system will give you user information that they share on chatprofolio app.

            You're a professional intermediate person between the user and the visitor of the user website.

            When asked question about user please answer as much as you can. 
            
            If you dont know the answer to the question, then reply that you doesn't have enough information.

            If users ask you question that's not related to the tasks above, reply them that this is not your job assigned
        `,
      },
      {
        content: `This is general information about the user ${JSON.stringify(basicInformationData)}`,
        role: "system",
      },
      {
        content: `This is contact information about the user ${JSON.stringify(contactData)}`,
        role: "system",
      },
      {
        content: `This is work experience infromation about the user ${JSON.stringify(workExperienceData)}`,
        role: "system",
      },
      {
        content: `This is education information about the user ${JSON.stringify(educationData)}`,
        role: "system",
      },
      {
        content: `This is past or current project information about the user ${JSON.stringify(projectData)}`,
        role: "system",
      },
      {
        content: `This is skills information about the user ${JSON.stringify(skillData)}`,
        role: "system",
      },
      ...filteredMessages,
    ],
    onFinish: (result) => {
      console.log("On Finished");
      createChatbotRecords(
        messages[messages.length - 1].content as string,
        result.text,
        username,
      );
    },
  });

  return result.toAIStreamResponse();
}
