import React from "react";

const SkeletonLoader = ({count}) => {
  return (
    <>
      {Array.from({ length: count })
        .map((_, i) => (
          <div
            key={i}
            className="card bg-base-100 shadow-sm aspect-square p-3 mx-auto w-full"
          >
            <figure>
              <div className="skeleton w-full aspect-video"></div>
            </figure>

            <div className="py-4 px-2 space-y-3">
              <div className="skeleton h-5 w-3/4"></div>

              <div className="space-y-2">
                <div className="skeleton h-3 w-full"></div>
                <div className="skeleton h-3 w-5/6"></div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="skeleton h-6 w-20 rounded-full"></div>
                <div className="skeleton h-5 w-16"></div>
              </div>

              <div className="mt-4">
                <div className="skeleton h-10 w-full rounded-full"></div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default SkeletonLoader;