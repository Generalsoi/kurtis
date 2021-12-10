import React, { useState } from "react";
import KurtisLogo from "../images/kurtisclassroomLogo.png";
import "../css/sectionFour.css";
import RubiksCube from "../images/rubikscube.svg";

const SectionFour = () => {
  const [view, setView] = useState(0);
  return (
    <div className="section-four" onClick={() => setView(!view)}>
      {view ? (
        <div>
          <img src={KurtisLogo} alt="kurtislogo" /> <br />
          <input placeholder="Write the code here" />
          <br />
          <a href="/">Or try with 1234</a>
        </div>
      ) : (
        <div className="rubiks-cube">
          <img src={RubiksCube} alt="rubiks-cube" />
        </div>
      )}
    </div>
  );
};

export default SectionFour;
