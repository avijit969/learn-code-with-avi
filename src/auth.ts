import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";

import { registerNewUser } from "./lib/actions/resgisterNewUser";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, Github],
  callbacks: {
    async signIn({ user }) {
      await registerNewUser(user);
      return true;
    },
  },
});
