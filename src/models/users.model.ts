import mongoose, { model, models } from "mongoose";

interface UserInterface {
  _id: mongoose.Types.ObjectId;
  email: string;
  password: string;
  name: string;
  avatarImage: string;
  role: "admin" | "instructor" | "student";
  courses: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}
const userSchema = new mongoose.Schema<UserInterface>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    avatarImage: {
      type: String,
    },
    role: {
      type: String,
      enum: ["admin", "instructor", "student"],
      default: "student",
    },
    courses: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Course",
    },
  },
  {
    timestamps: true,
  }
);

export const User = models?.User || model("User", userSchema);
