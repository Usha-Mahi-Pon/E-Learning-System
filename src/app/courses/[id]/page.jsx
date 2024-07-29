import CourseDetails from "@/components/CourseDetails";
import { getCourse } from "@/lib/data";

const SingleCourse = async ({ params }) => {
  const { id } = params;
  const course = await getCourse(id);
  return <CourseDetails course={course} />;
};

export default SingleCourse;
