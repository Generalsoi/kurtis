import React from "react";
import NavBar from "./navbar";
import SectionOne from "./sectionOne";
import SectionTwo from "./sectionTwo";
import SectionFour from "./sectionFour";
import SectionFive from "./sectionFive";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <SectionOne />
      <SectionTwo />
      <SectionFour />
      <SectionFive />
    </div>
  );
};

export default HomePage;
