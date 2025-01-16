"use server";

import { auth } from "@/auth";

interface UserDetails {
  name: string | null;
  email: string | null;
  image: string | null;
}

export const getUserDetails = async (): Promise<UserDetails> => {
  const session = await auth();
  return {
    name: session?.user?.name || null,
    email: session?.user?.email || null,
    image: session?.user?.image || null,
  };
};
