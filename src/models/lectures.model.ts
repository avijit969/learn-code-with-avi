import mongoose, { model, models, Schema } from "mongoose";
interface LectureInterface {
  title: string;
  courseName: string;
  googleMeetLink: string;
  documentLink?: string;
  videoLink?: string;
  startTime: Date;
  endTime: Date;
  duration: string;
  description: string;
  course: mongoose.Schema.Types.ObjectId;
}
const lectureSchema = new Schema<LectureInterface>({
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

export const Lecture = models?.Lecture || model("Lecture", lectureSchema);
