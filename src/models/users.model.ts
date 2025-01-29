import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
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
});

export const User = mongoose.model("User", userSchema);
