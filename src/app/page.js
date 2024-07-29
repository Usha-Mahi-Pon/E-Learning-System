import React from "react";
import Image from "next/image";
import { getCourses } from "@/lib/data";
import Link from "next/link";

const Home = async () => {
  const courses = await getCourses();
  return (
    <div className="mt-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="flex items-center justify-around">
        <div className="w-1/2">
          <h1 className="text-3xl text-gray-700 leading-relaxed font-semibold">
            Anytime Anywhere<br></br> Learn on Your<br></br> Suitable Schedule
          </h1>
          <p className="mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
            purus sapien, in vestibulum nunc. Sed id risus auctor, tincidunt
            nunc ac, cursus velit. Sed eget purus id turpis consectetur aliquet.
          </p>
          <div className="mt-4 flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border border-gray-300 rounded-md mr-2"
            />
            <button className="px-4 py-2 bg-purple-500 text-white rounded-md">
              Search
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <Image
            src="/home.png"
            alt="Home"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
      {/* popular courses */}
      <div className="mt-36 flex flex-col items-center justify-center">
        <div className="text-center leading-loose">
          <h1 className="font-semibold text-4xl">Our Popular Courses</h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="mt-10 w-full overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 py-4">
            {courses.map((course) => (
              <Link href={`/courses/${course.id}`} key={course.id}>
                <div
                  key={course.title}
                  className="h-96 w-96 bg-slate-100 flex flex-col cursor-pointer relative rounded-md shrink-0"
                >
                  <div>
                    <Image
                      src={course?.img}
                      alt=""
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
      {/* why choose us */}
      <div className="mt-16 flex items-center justify-around">
        <div className="w-1/2">
          <h1 className="text-3xl text-gray-700 leading-relaxed font-semibold">
            Why Choose Us
          </h1>
          <div>
            <div className="font-semibold mt-2">Expert Instructors</div>
            <p className="font-serif">
              Our courses are designed and taught by industry experts with years
              of experience. Benefit from their knowledge and practical insights
              to advance your skills effectively.
            </p>
            <div className="font-semibold mt-2">Flexible Learning</div>
            <p className="font-serif">
              Learn at your own pace with our on-demand courses. Access
              materials anytime, anywhere, and fit your studies around your busy
              schedule.
            </p>
            <div className="font-semibold mt-2">Comprehensive Content</div>
            <p className="font-serif">
              From beginner to advanced, our courses cover a wide range of
              topics with detailed explanations, hands-on exercises, and
              real-world examples to ensure a thorough understanding.
            </p>
            <div className="font-semibold mt-2">Interactive Experience</div>
            <p className="font-serif">
              Engage with interactive content, quizzes, and assignments that
              reinforce your learning and help you apply your knowledge in
              practical scenarios.
            </p>
          </div>
        </div>
        <div className="hidden md:block">
          <Image
            src="/why-choose-us.png"
            alt="Why Choose Us"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
