import React from "react";

const NothingFoundPage = () => {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-8 text-center">
      
      <div className="mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-48 w-48 text-green-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 20l9-5-9-5-9 5 9 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 12l9-5-9-5-9 5 9 5z"
          />
        </svg>
      </div>

      
      <h1 className="text-5xl font-bold text-green-800 mb-4">Nothing Found</h1>
      <p className="text-green-700 mb-6">
        Oops! We couldn’t find what you were looking for. Don’t worry, nature is forgiving 🌿
      </p>

      
      <a
        href="/"
        className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
      >
        Go Back Home
      </a>

      
      <footer className="mt-16 text-green-700 text-sm">
        © {new Date().getFullYear()} Green Earth x Abdur Rahman Adil. All Rights Reserved.
      </footer>
    </div>
  );
};

export default NothingFoundPage;