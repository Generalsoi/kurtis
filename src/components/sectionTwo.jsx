import React, { useState } from "react";
import "../css/sectionTwo.css";
import SectionTwoGrid from "./sectionTwoGrid";
import AtHome from "../images/athomeicon.png";
import AtSchool from "../images/atschoolicon.png";
import AtWork from "../images/atworkicon.png";
import LearningApps from "../images/landingappsicon.png";
import Button from "../common/button";

const SectionTwo = () => {
  const grids = [
    {
      id: 1,
      content:
        "Engaging group and distance learning for teachers and students.",
      purpose: "At School",
      icon: <img src={AtSchool} alt="atschoolicon" />,
    },
    {
      id: 2,
      content: "For training, e-learning, interactive presentations and more.",
      purpose: "At Work",
      icon: <img src={AtWork} alt="atworkicon" />,
    },
    {
      id: 3,
      content: "Apps and games for family fun or home study.",
      purpose: "At Home",
      icon: <img src={AtHome} alt="athomeicon" />,
    },
    {
      id: 4,
      content: "Engage kids with the Kahoot! family of learning apps",
      purpose: "Learning Apps",
      icon: <img src={LearningApps} alt="learningappsicon" />,
    },
  ];

  //   const [signUpBtncolor, setSignUpBtnColor] = useState("#3A5AFF");
  //   //   const setSignUpBtnColor = () => {
  //     background: "#FFC43B";
  //   };

  const handleMouseEnter = (e) => {
    e.target.style.background = "#FFC43B";
  };

  const handleMouseLeave = (e) => {
    e.target.style.background = "#3A5AFF";
  };

  const SIGN_UP_BUTTON_STYLES = {
    width: "159px",
    height: "55px",
    color: "#fff",
    background: "#3A5AFF",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    fontFamily: "Montserrat",
    fontWeight: "800",
    boxShadow: "inset 0px -4px 1px rgba(0, 0, 0, 0.6)",
    cursor: "pointer",
  };
  return (
    <div className="section-two">
      <h2 className="sectionTwoH2">Who is Kurtis for?</h2>
      <div className="sectiontwo-grid">
        {grids.map((grid) => (
          <SectionTwoGrid
            key={grid.id}
            icon={grid.icon}
            gridPurpose={grid.purpose}
            gridContent={grid.content}
          />
        ))}
      </div>
      <div style={{ textAlign: "center", margin: "2rem auto" }}>
        <Button
          content="SIGN UP NOW"
          buttonStyle={SIGN_UP_BUTTON_STYLES}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          //   handleMouseEnter={setSignUpBtnColor("#FFC43B")}
          //   handleMouseLeave={setSignUpBtnColor("#3A5AFF")}
        />
      </div>
    </div>
  );
};

export default SectionTwo;
