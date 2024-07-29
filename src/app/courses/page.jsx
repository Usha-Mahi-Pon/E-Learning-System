import { getCourses } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const Courses = async () => {
  const courses = await getCourses();
  return (
    <div className="mt-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="text-center">
        <div className="font-semibold text-2xl mb-3">
          Explore Our Diverse Course Offerings
        </div>
        <p>
          Discover a wide range of expertly crafted courses tailored to help you
          learn and grow at your own pace.
        </p>
      </div>
      <div className="mt-10 w-full">
        <div className="flex flex-wrap gap-10 py-4">
          {courses.map((course) => (
            <Link key={course.title} href={`/courses/${course.id}`}>
              <div className="h-96 w-96 bg-slate-100 flex flex-col cursor-pointer relative rounded-md shrink-0">
                <div>
                  <Image
                    src={course?.img}
                    height={300}
                    width={300}
                    className="object-cover rounded-md p-2 w-96 h-60 mb-3"
                  />
                </div>
                <div className="ml-4 leading-loose">
                  <p className="text-slate-500">
                    Updated {course.updated.substring(0, 10)}
                  </p>
                  <p className="text-black font-bold">{course.title}</p>
                  <div className="flex gap-3">
                    {Array.from({ length: course.stars }).map((_, index) => (
                      <Image
                        src="/star.png"
                        key={index}
                        height={100}
                        width={100}
                        className="w-6 h-6 mb-2"
                      />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-3">Free</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
