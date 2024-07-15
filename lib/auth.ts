import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import prisma from "./db";
import Google from "next-auth/providers/google";
import { User } from "@prisma/client";
import { createLayoutPreference } from "@/actions/create-update-layout-preference";
import { layoutPreferenceDefaultValue } from "./layout-data";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google],
  callbacks: {
    signIn: async (data) => {
      if (!data) return false;
      const user = data.user as User;
      const layoutPreference = await prisma.layoutPreference.findFirst({
        where: {
          holder: { username: { equals: user.username, mode: "insensitive" } },
        },
      });

      // Create Layout Preference for new user
      if (!layoutPreference) {
        await createLayoutPreference(layoutPreferenceDefaultValue, user);
      }

      return true;
    },
  },
});
