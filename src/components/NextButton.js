"use client";

import { updateCourseDetails } from "@/lib/action";

const NextButton = ({ id, index, lessons }) => {
  return (
    <div>
      <form action={updateCourseDetails}>
        <input type="hidden" name="id" value={id} />
        <input type="hidden" name="lessonIndex" value={index + 1} />
        <button className="rounded-md bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 mt-6">
          {index + 1 === lessons ? "Complete" : "Next"}
        </button>
      </form>
    </div>
  );
};

export default NextButton;
