import React, { useState, useRef } from "react";
import "./formfield-models.css";
import { v4 as uuidv4 } from "uuid";

import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../../constants/confetti-full-screen.json";

import Button from "../button/Button";
import InputFiled from "../input-field/inputFiled";

import handeShakhImage from "../../assets/hand-shakh.png";
import { Link } from "react-router-dom";

const FormField = () => {
  const [fromData, setFromData] = useState({
    username: "",
    password: "",
  });
  const [isShowPassword, setIsShowPassword] = useState(true);
  const [passwordType, setPasswordType] = useState("password");
  // const [isStopped, setIsStopped] = useState(false);
  const playerRef = useRef(null);

  const inputField = [
    {
      _id: 1,
      name: "password",
      type: passwordType,
      placeholder: "Room ID",
      label: "Room ID",
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

    playerRef.current.play();

    setTimeout(() => {
      alert(fromData);
    }, 5000);
  };

  const onChange = (e) => {
    setFromData({ ...fromData, [e.target.name]: e.target.value });
  };

  const genrateIDHandler = (e) => {
    e.preventDefault();

    let unique_ID = uuidv4();

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
        <Player
          className="celebration"
          ref={playerRef}
          src={animationData}
        ></Player>
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
      <div className="formField___create--newroom">
        <p>If you don't have invite code then create</p>
        <Link onClick={genrateIDHandler}>
          <h5>new room</h5>
        </Link>
      </div>
    </div>
  );
};

export default FormField;
