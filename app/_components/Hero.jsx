import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-screen-xl px-4 py-32 mx-auto pt-36 lg:flex lg:h-[calc(100vh-64px)]">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            All Your Digital Products
            <strong className="font-extrabold text-primary sm:block">
              Is One Click Away
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Start Exploring State of the Art Assets Now!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              className="block w-full px-12 py-3 text-sm font-medium text-white bg-teal-600 rounded shadow hover:bg-primary focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href=" "
            >
              Get Started
            </Link>

            <Link
              className="block w-full px-12 py-3 text-sm font-medium text-teal-600 rounded shadow hover:text-primary focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              href=" "
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
