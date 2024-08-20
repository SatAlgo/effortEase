import React from "react";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
      <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-24">
        <div className="space-y-12">
          <h1 className="text-4xl font-bold">
            Welcome to <span className="text-green-500">effortEase :)</span>
          </h1>
          <p className="text-xl">
            We are delighted to have you here! This platform is designed to make
            your college life easier by providing quick and easy access to
            essential resources. Whether you're looking for assignments,
            projects, notes, residence help or gadgets, we've got you covered.
          </p>
          <div className="mt-6 flex items-center space-x-2 text-2xl md:text-4xl">
            <h2>Here, you can get</h2>
            <ReactTyped
              className="text-orange-400 font-bold"
              strings={[
                "Notes",
                "Assignments",
                "Projects",
                "Gadgets",
                "Recidence Help",
                "Sample Papers",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            />
          </div>
          <Link to="/signup">
            <button className="mt-6 btn btn-secondary">Get Started</button>
          </Link>
          <p className="text-xl">
            <span className="text-red-600 text-2xl font-semibold">
              Notice:{" "}
            </span>
            <br />
            Do your Summer Internship.
          </p>
        </div>
      </div>
      <div className=" order-1 w-full md:w-1/2">
        {/* You can add content here if needed */}
        <img src='/banner.png' className="w-92 h-92 mt-16 ml-4" alt="" />
      </div>
    </div>
  );
}

export default Banner;

