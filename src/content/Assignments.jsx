import React from "react";
import Navbar from "../components/Navbar";
import Assignment from "../components/Assignment";
import Footer from "../components/Footer";
import Freebook from "../components/Freebook";

function Assignments() {
  return (
    <>
      <Navbar />
      <div className="">
        <Freebook />
      </div>
      <div className="min-h-screen">
        <Assignment />
      </div>
      <Footer />
    </>
  );
}

export default Assignments;
