import { revalidatePath } from "next/cache";
import { Course, User } from "./model";
import { connectToDb } from "./utils";

export const getCourses = async () => {
  connectToDb();
  const courses = await Course.find();
  return courses;
};

export const getCourse = async (id) => {
  try {
    connectToDb();
    const course = await Course.findById(id);
    return course;
  } catch (err) {
    console.error(err);
  }
};

export const getUser = async (id) => {
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.error(err);
  }
};
