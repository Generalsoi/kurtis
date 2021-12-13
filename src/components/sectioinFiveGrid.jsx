import React from "react";

const SectionFiveGrid = (props) => {
  const { gridHeader, gridContent, gridImage, gridStyle } = props;
  return (
    <div className={gridStyle}>
      <div>
        <h5>{gridHeader}</h5>
        <p>{gridContent}</p>
      </div>
      <img src={gridImage} alt="grid-img" />
    </div>
  );
};

export default SectionFiveGrid;
