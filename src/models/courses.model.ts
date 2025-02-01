import mongoose, { model, models, Schema } from "mongoose";
interface CourseInterface {
  title: string;
  description: string;
  instructor: string;
  thumbnailImage: string;
  duration: string;
}
const courseSchema = new Schema<CourseInterface>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  instructor: {
    type: String,
    required: true,
  },
  thumbnailImage: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
});

export const Course = models?.Course || model("Course", courseSchema);
