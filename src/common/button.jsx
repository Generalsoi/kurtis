import React from "react";

const Button = (props) => {
  const {
    content,
    handleClick,
    buttonStyle,
    handleMouseEnter,
    handleMouseLeave,
  } = props;
  return (
    <button
      style={buttonStyle}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {content}
    </button>
  );
};

export default Button;
