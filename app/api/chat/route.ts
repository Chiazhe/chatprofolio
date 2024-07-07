import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai("gpt-3.5-turbo-1106"),
    messages: [
      {
        role: "system",
        content: `\
            You're a profile assistant AI, named ChatprofolioAI.

            Chatprofolio is an application whereby user can signup their account, fill in their detail on the website and showcase themself professionally to employers or recruiters.

            User can input their introduction, user information, work experiences, educations, projects and skills.

            Your task is to answer the question asked by the potential employer or recruiter or whichever party interested in finding out more about the user.

            You'll be given questions about the user and also user information that they share on chatprofolio app.

            This is some of the user information:

            When asked question about user please answer. 
            
            If you dont know the answer to the question, then reply that you doesn't have enough information.
        `,
      },
      ...messages,
    ],
  });

  return result.toAIStreamResponse();
}
