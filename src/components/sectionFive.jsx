import React from "react";
import "../css/sectionFive.css";
import SectionFiveGrid from "./sectioinFiveGrid";
import MiroodlesOne from "../images/MiroodlesColorComposition.png";
import MiroodlesTwo from "../images/MiroodlesColorCompositionTwo.png";
import MiroodlesThree from "../images/MiroodlesColorCompositionThree.png";

const SectionFive = () => {
  return (
    <div className="section-five">
      <h3>How does Kurtis work?</h3>
      <SectionFiveGrid
        gridStyle="grid-one"
        gridImage={MiroodlesOne}
        gridHeader="Create"
        gridContent="It only takes minutes to create a learning game or trivia quiz on any topic, in any language."
      />
      <SectionFiveGrid
        gridStyle="grid-two"
        gridImage={MiroodlesTwo}
        gridHeader="Host or Share"
        gridContent="Host a live game with questions on a big screen or share a game with remote players."
      />
      <SectionFiveGrid
        gridStyle="grid-one"
        gridImage={MiroodlesThree}
        gridHeader="Play"
        gridContent="Game on! Join a kahoot with a PIN provided by the host and answer questions on your device."
      />
    </div>
  );
};

export default SectionFive;
