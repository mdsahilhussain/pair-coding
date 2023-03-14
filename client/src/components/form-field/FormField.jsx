import React, { useState } from "react";
import "./formfield-models.css";

import Button from "../button/Button";
import InputFiled from "../input-field/inputFiled";

import handeShakhImage from "../../assets/hand-shakh.png";

const FormField = () => {
  const [fromData, setFromData] = useState({
    username: "",
    password: "",
  });
  const [isShowPassword, setIsShowPassword] = useState(true);
  const [passwordType, setPasswordType] = useState("password");

  const inputField = [
    {
      _id: 1,
      name: "password",
      type: passwordType,
      placeholder: "Password",
      label: "Password",
      required: true,
      iconName: "lock",
      isShowPassword: isShowPassword,
    },
    {
      _id: 2,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      required: true,
      iconName: "user",
    },
  ];

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(fromData);
  };

  const onChange = (e) => {
    setFromData({ ...fromData, [e.target.name]: e.target.value });
  };

  const changeTypeHandler = () => {
    if (isShowPassword === true) {
      setPasswordType("password");
    } else {
      setPasswordType("text");
    }
    setIsShowPassword((preMode) => !preMode);
  };

  return (
    <div className="formField">
      <div className="formField___Image">
        <img src={handeShakhImage} alt="handeShakhImage" />
      </div>
      <form onSubmit={submitHandler}>
        {inputField.map((item, index) => (
          <InputFiled
            key={index}
            {...item}
            value={fromData[inputField.name]}
            onChange={onChange}
            Handler={changeTypeHandler}
          />
        ))}
        <Button
          style={{
            padding: "0.8em 2em",
            width: "350px",
            marginTop: "1em",
            fontSize: "1rem",
          }}
          title="Join"
          isWhiteButton={true}
        />
      </form>
    </div>
  );
};

export default FormField;
