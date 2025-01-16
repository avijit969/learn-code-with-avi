"use server";

import { signIn } from "@/auth";

export const handleSignInWithGoogle = async () => {
  try {
    await signIn("google", { redirectTo: "/" });
  } catch (error) {
    throw error;
  }
};

export const handelSignInWithGithub = async () => {
  try {
    await signIn("github", { redirectTo: "/" });
  } catch (error) {
    throw error;
  }
};
