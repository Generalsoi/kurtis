import React from "react";
import "../css/sectionFive.css";
import SectionFiveGrid from "./sectioinFiveGrid";

const SectionFive = () => {
  return (
    <div className="section-five">
      <p>
        Still more? <a href="">Take a look to our features games</a>
      </p>

      <h2 className="sectionFiveH2">How does Kurtis work?</h2>
      <SectionFiveGrid />
    </div>
  );
};

export default SectionFive;
