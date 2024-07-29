// "use client";

import Image from "next/image";
import EnrollButton from "./EnrollButton";
import NextButton from "./NextButton";
const extractVideoID = (url) => {
  const regExp =
    /^.*(youtu.be\/|v\/|\/u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const CourseDetails = ({ course }) => {
  return (
    <div className="mt-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 ">
      <h1 className="text-3xl font-semibold py-4">{course?.title}</h1>
      <div className="flex justify-around">
        <div className="hidden lg:block w-full lg:w-3/4 relative lg:mr-10">
          <Image
            src={course?.img}
            alt="Home"
            width={900}
            height={500}
            className="object-cover rounded-md"
          />
        </div>
        <div className="w-full md:w-full lg:w-1/4 bg-white border border-gray-300 h-max mt-10 rounded-md px-7 py-14">
          <h1 className="text-2xl text-gray-700 leading-relaxed font-semibold">
            This Course includes:
          </h1>
          <p className="mt-4 leading-relaxed">Comprehensive lessons</p>
          <p className="mt-4 leading-relaxed">Flexible Learning</p>
          <p className="mt-4 leading-relaxed">Expert Guidance</p>
          <p className="mt-4 leading-relaxed">Interactive Quizzes</p>
          <p className="mt-4 leading-relaxed">Hands-on Projects</p>

          <EnrollButton
            completed={course.completed}
            progress={course.progress}
            lessons={course.lessons.length}
          />
        </div>
      </div>
      <div className="flex justify-between mr-20 mt-1 w-full lg:w-3/4 ">
        <div className="flex gap-3 mt-3 ml-1">
          {Array.from({ length: course.stars }).map((_, index) => (
            <Image
              src="/star.png"
              key={index}
              height={200}
              alt=""
              width={200}
              className="w-8 h-8 mb-2"
            />
          ))}
        </div>
        <div className="mt-3 px-6 mr-10 rounded-md py-2 bg-slate-200 text-blue-500 font-bold">
          {course.access}
        </div>
      </div>
      <div className="ml-2 mt-1">{course.desc}</div>
      {/* instructor */}
      <div>
        <div className="font-semibold text-xl my-6 ml-2">Instructor</div>
        <div className="flex gap-3">
          <div>
            <Image
              src="https://i.pinimg.com/564x/40/31/00/403100c729d0ef4551aeadfa57d9cbf7.jpg"
              height={60}
              width={60}
              alt=""
              className="rounded-full"
            />
          </div>
          <div>
            <p className="font-bold">{course.InstructorName}</p>
            <p>A Web Developer | Programmer</p>
          </div>
        </div>
      </div>

      {/* overview */}
      <div className="w-3/4">
        <h1 className="font-semibold text-2xl mt-10 mb-5">Overview</h1>
        <p>{course.overview}</p>
      </div>

      {/* lessons */}
      <div className="w-full mt-10">
        {course?.lessons?.map((lesson, index) => (
          <div
            key={lesson.title}
            className="bg-white border border-gray-300 h-max mt-10 rounded-md px-7 py-14"
          >
            <h1 className="text-2xl text-gray-700 leading-relaxed font-semibold">
              {lesson.title}
            </h1>
            <p className="mt-4 leading-relaxed">{lesson.content}</p>
            {lesson.vid && (
              <div className="mt-4">
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${extractVideoID(
                    lesson.vid
                  )}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full max-w-full"
                ></iframe>
                <NextButton
                  id={course.id}
                  index={index}
                  lessons={course.lessons.length}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
