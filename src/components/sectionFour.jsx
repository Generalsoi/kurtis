import React from "react";
import KurtisLogo from "../images/kurtisclassroomLogo.png";

const SectionFour = () => {
  const styles = {
    background: "#FFC43B",
    padding: "15% 5%",
    textAlign: "center",
  };
  return (
    <div style={styles}>
      <img src={KurtisLogo} alt="kurtislogo" /> <br />
      <input
        style={{
          margin: "4rem auto",
          width: "23.25rem",
          height: "3rem",
          textAlign: "center",
          borderRadius: "30px",
          fontSize: "1.5rem",
          fontWeight: "700",
          fontFamily: "Montserrat",
          color: "#979797",
        }}
        placeholder="Write the code here"
      />
      <br />
      <a
        href="/"
        style={{
          fontFamily: "Montserrat",
          fontSize: "1.25rem",
          fontWeight: "400",
          textDecoration: "none",
          color: "#979797",
        }}
      >
        Or try with 1234
      </a>
    </div>
  );
};

export default SectionFour;
