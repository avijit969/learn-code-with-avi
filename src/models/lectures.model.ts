import mongoose from "mongoose";

const lectureSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  courseName: {
    type: String,
    required: true,
  },
  googleMeetLink: {
    type: String,
    required: true,
  },
  documentLink: {
    type: String,
  },
  videoLink: {
    type: String,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
});

export const Lecture = mongoose.model("Lecture", lectureSchema);
