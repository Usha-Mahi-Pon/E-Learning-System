"use client";

import { useState } from "react";

const EnrollButton = ({ completed, progress, lessons }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {completed && (
        <p className="bg-blue-500 hover:bg-blue-700 text-center cursor-not-allowed text-white font-bold w-full py-2 px-4 rounded mt-8">
          Completed
        </p>
      )}
      {!completed && !open && progress === 0 && (
        <button
          onClick={() => setOpen(!open)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded mt-8"
        >
          Enroll Now
        </button>
      )}
      {!completed && (open || progress >= 1) && (
        <div className="w-full bg-gray-200 rounded-full mt-4">
          <div
            className="bg-blue-500 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full"
            style={{
              width: `${(progress / lessons) * 100}%`,
            }}
          >
            {Math.round((progress / lessons) * 100)}%
          </div>
        </div>
      )}
    </div>
  );
};

export default EnrollButton;
