import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="mt-32 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 h-[calc(100vh-80px)]">
      <div className="flex items-center justify-around gap-10">
        <div className="hidden md:block ">
          <Image
            src="/about-us.png"
            alt="Home"
            width={500}
            height={500}
            className="hidden md:block object-contain rounded-md"
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-3xl text-gray-700 leading-relaxed font-semibold">
            About Us
          </h1>
          <p className="mt-4 leading-relaxed ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
            purus sapien, in vestibulum nunc. Sed id risus auctor, tincidunt
            nunc ac, cursus velit. Sed eget purus id turpis consectetur aliquet.
          </p>
          <div>
            <div className="mt-4 flex  flex-col">
              <div className="flex gap-10">
                <div className="">
                  <h1 className="text-2xl">25K</h1>
                  <p>Completed Projects</p>
                </div>
                <div>
                  <h1 className="text-2xl">12M</h1>
                  <p>Students Around World</p>
                </div>
              </div>
              <div className="flex gap-10 mt-5">
                <div className="">
                  <h1 className="text-2xl">25K</h1>
                  <p>Completed Projects</p>
                </div>
                <div>
                  <h1 className="text-2xl">12M</h1>
                  <p>Students Around World</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
