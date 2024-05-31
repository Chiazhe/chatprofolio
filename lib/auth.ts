import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import prisma from "./db";
import google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [google],
});