import React from "react";
import "../css/sectionOne.css";
import Button from "../common/button";
import Miroodles from "../images/Miroodles.png";
import AppleStore from "../images/appstore.png";
import GooglePlay from "../images/googleplay.png";

const SectionOne = () => {
  const handleMouseEnter = (e) => {
    e.target.style.background = "#FFC43B";
  };

  const handleMouseLeave = (e) => {
    e.target.style.background = "#3A5AFF";
  };

  const introSignUpStyles = {
    background: "#3A5AFF",
    width: "255px",
    color: "#fff",
    height: "55px",
    margin: "2rem 0",
    fontWeight: "800",
    fontSize: "1rem",
    fontFamily: "Montserrat",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "inset 0px -2px 1px rgba(0, 0, 0, 0.6)",
  };
  const applestore = <img src={AppleStore} alt="applestore" />;
  const googlePlay = <img src={GooglePlay} alt="googleplay" />;
  const downloadBtnStyles = {
    marginRight: "1rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div className="intro-section">
      <section>
        <h1 className="intro-h1">Make </h1>
        <h1 className="intro-h1">learning fun!</h1>
        <p className="intro-p">Any subject, in any language, on any</p>
        <p className="intro-p">device, for all ages!</p>
        <Button
          content="Sign up for free"
          buttonStyle={introSignUpStyles}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
        <p className="download-p">Or download the app:</p>
        <div>
          <Button content={applestore} buttonStyle={downloadBtnStyles} />
          <Button content={googlePlay} buttonStyle={downloadBtnStyles} />
        </div>
      </section>
      <aside>
        <img src={Miroodles} alt="miroodles" />
      </aside>
    </div>
  );
};

export default SectionOne;
