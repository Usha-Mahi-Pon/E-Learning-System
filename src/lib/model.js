import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    overview: {
      type: String,
      required: true,
    },
    stars: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },
    updated: {
      type: String,
    },
    access: {
      type: String,
    },
    InstructorName: {
      type: String,
    },
    desc: {
      type: String,
    },
    progress: {
      type: Number,
      default: 0,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    lessons: [
      {
        title: String,
        content: String,
        vid: String,
      },
    ],
  },
  { timestamps: true }
);

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "",
    unique: true,
  },
  bio: {
    type: String,
    default: "",
  },
  location: {
    type: String,
    default: "",
  },
});

export const Course =
  mongoose.models?.Course || mongoose.model("Course", courseSchema);
export const User = mongoose.models?.User || mongoose.model("User", userSchema);
