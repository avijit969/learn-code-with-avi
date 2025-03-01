export const config = {
  runtime: "nodejs",
};
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import { User } from "./models/users.model";
import { dbConnect } from "./lib/db/db-connect";
import { run } from "node:test";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, Github],
  callbacks: {
    async signIn({ user }) {
      await dbConnect();

      const existingUser = await User.findOne({ email: user.email });
      console.log("existingUser", existingUser);
      if (!existingUser) {
        await User.create({
          email: user.email,
          name: user.name,
          avatarImage: user.image,
        });
      }

      return true;
    },
  },
});
