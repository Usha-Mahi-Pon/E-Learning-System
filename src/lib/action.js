"use server";

import { revalidatePath } from "next/cache";
import { Course, User } from "./model";
import { connectToDb } from "./utils";

export const updateCourseDetails = async (formData) => {
  const { id, lessonIndex } = Object.fromEntries(formData);
  try {
    await connectToDb();
    const course = await Course.findById(id);

    course.progress = lessonIndex;
    course.completed = course.progress === course.lessons.length;
    await course.save();
    revalidatePath("/courses/" + id);
  } catch (err) {
    console.error(err);
  }
};

export const updateUser = async (formData) => {
  const { fullName, bio, location } = formData;
  try {
    connectToDb();
    const user = await User.findById(process.env.DefaultUser);
    user.name = fullName;
    user.bio = bio;
    user.location = location;
    await user.save();
    revalidatePath("/profile");
  } catch (err) {
    console.log(err);
  }
};
