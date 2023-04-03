import React from "react";
import "./button-models.css";

const Button = ({ style, title, isWhiteButton, isBlueButton }) => {
  return (
    <button
      style={{ ...style }}
      className={`${isWhiteButton ? "white-button" : ""} ${
        isBlueButton ? "blue-button" : ""
      }`}
    >
      {title}
    </button>
  );
};

export default Button;
