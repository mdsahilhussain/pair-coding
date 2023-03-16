import React, { useState } from "react";
import "./inputfield-models.css";
import "remixicon/fonts/remixicon.css";
const InputFiled = (props) => {
  const {
    label,
    iconName,
    onChange,
    Handler,
    submitHandler,
    isShowPassword,
    ...inputProps
  } = props;

  const enterHandler = (e) => {
    e.preventDefault();
    if (e.code === "Enter") {
      submitHandler();
    }
  };
  
  return (
    <div className="formInput">
      <label>{label}</label>
      <div className="inputField">
        <i
          className={`ri-${iconName}-fill`}
          style={{ marginRight: "0.5em" }}
        ></i>
        <input {...inputProps} onChange={onChange} onKeyUp={enterHandler} />
        <span onClick={Handler} style={{ cursor: "pointer" }}>
          {props.name === "password" ? (
            isShowPassword ? (
              <i className="ri-eye-line"></i>
            ) : (
              <i className="ri-eye-off-line"></i>
            )
          ) : undefined}
        </span>
      </div>
    </div>
  );
};

export default InputFiled;
