import React from "react";
import Navbar from "../components/Navbar";
import More from "../components/More";
import Footer from "../components/Footer";
import Freebook from "../components/Freebook";

function more() {
  return (
    <>
      <Navbar />
      <div className="">
      <Freebook />
      </div>
      <div className="min-h-screen">
        <More />
      </div>     
      <Footer />
    </>
  );
}

export default more;
