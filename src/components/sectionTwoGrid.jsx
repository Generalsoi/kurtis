import React from "react";

const SectionTwoGrid = (props) => {
  const { icon, gridPurpose, gridContent } = props;
  return (
    <div style={{ width: "200px", marginTop: "1.5rem" }}>
      {icon} <br />
      <h4 style={{ fontSize: "1.375rem", fontWeight: "600" }}>{gridPurpose}</h4>
      <p style={{ fontSize: "1rem", fontWeight: "500" }}>{gridContent}</p>
      <p style={{ fontSize: "1rem", marginTop: "1.5rem", fontWeight: "700" }}>
        <a>Learn more</a>
      </p>
    </div>
  );
};

export default SectionTwoGrid;
