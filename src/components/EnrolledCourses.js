import { getCourses } from "@/lib/data";
import Link from "next/link";

const EnrolledCourses = async () => {
  const courses = await getCourses();
  return (
    <div>
      {courses.map(
        (course) =>
          course.progress >= 1 && (
            <div key={course.id} className="flex justify-between px-10 py-4">
              <h1>{course.title}</h1>
              <Link href={`/courses/${course.id}`}>
                <button className="rounded-md bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 ">
                  {course.completed ? "Completed" : "Continue"}
                </button>
              </Link>
            </div>
          )
      )}
    </div>
  );
};

export default EnrolledCourses;
