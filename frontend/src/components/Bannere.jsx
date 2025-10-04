import React from "react";

const Banner = () => {
  return (
    <section className="bg-[#FBE7C6] py-16 px-8 md:px-20 flex flex-col md:flex-row items-center justify-between rounded-2xl shadow-md">
      {/* Left Section - Text */}
      <div className="max-w-xl mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          DISCOVER <br /> BOOKS
        </h1>
        <p className="mt-4 text-lg text-gray-700 font-medium">
          A Book Review Web App
        </p>

        <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition">
          <a href="#book-list-page"> Explore Now</a>
        </button>
        
      </div>

      {/* Right Section - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/banner-illustration.png"
          alt="Reading Illustration"
          className="w-80 md:w-96"
        />
      </div>
    </section>
  );
};

export default Banner;
