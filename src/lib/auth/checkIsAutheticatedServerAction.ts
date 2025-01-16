"use server";

import { auth } from "@/auth";

export const checkIsAuthenticated = async (): Promise<boolean> => {
  const session = await auth();
  return !!session;
};
