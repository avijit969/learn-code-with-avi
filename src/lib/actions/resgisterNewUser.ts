"use server";
import { User } from "@/models/users.model";
import { dbConnect } from "../db/db-connect";

const registerNewUser = async (user) => {
  await dbConnect();

  const existingUser = await User.findOne({ email: user.email });
  if (!existingUser) {
    await User.create({
      email: user.email,
      name: user.name,
      avatarImage: user.image,
    });
  }
};

export { registerNewUser };
