import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function NotFound() {
  return (
    <div className="dark-bg">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-xl text-white">404 | Page Not Found</h1>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a
            className="hover:bg-gradient-to-r from-blue-500 to-purple-600 btn-home rounded-2xl relative inline-flex items-center px-8 py-3 overflow-hidden text-white group border border-blue-500 hover:border-transparent"
            href="/posts"
          >
            <span className="absolute right-0 transition-transform translate-x-full group-hover:-translate-x-4">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

            <span className="text-md font-medium transition-all group-hover:mr-4">
              Take me home
            </span>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
