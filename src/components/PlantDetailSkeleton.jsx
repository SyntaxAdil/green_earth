import React from "react";

const PlantDetailSkeleton = () => (
  <div className="min-h-screen animate-pulse bg-green-50 p-4">
    <div className="h-52 w-full bg-green-200 rounded mb-4" />
    <div className="max-w-3xl mx-auto space-y-4">
      <div className="h-8 w-3/4 bg-green-200 rounded" />
      <div className="h-6 w-1/3 bg-green-200 rounded" />
      <div className="h-px w-full bg-green-100" />
      <div className="space-y-2">
        <div className="h-4 w-full bg-green-100 rounded" />
        <div className="h-4 w-5/6 bg-green-100 rounded" />
        <div className="h-4 w-2/3 bg-green-100 rounded" />
      </div>
    </div>
    <div className="mt-6 grid grid-cols-3 gap-4 text-center max-w-3xl mx-auto">
      {[1, 2, 3].map((_, i) => (
        <div key={i} className="bg-white h-20 rounded-xl shadow flex flex-col items-center justify-center">
          <div className="h-6 w-6 bg-green-200 rounded-full mb-2" />
          <div className="h-4 w-16 bg-green-200 rounded" />
        </div>
      ))}
    </div>
  </div>
);

export default PlantDetailSkeleton;