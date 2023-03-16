import React from "react";
import Amenities from "./Amenities";
import Foot from "./Foot";
import Main from "./Main";
import Navbar from "./Navbar";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Amenities />
      <Testimonial />
      <Foot />
    </div>
  );
};

export default Home;
