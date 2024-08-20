import React from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";
import Freebook from "../components/Freebook";

function Courses() {
  return (
    <>
      <Navbar />
      <div className="">
        <Freebook />
      </div>
      <div className="min-h-screen">
        <Course />
      </div>
      <Footer />
    </>
  );
}

export default Courses;
