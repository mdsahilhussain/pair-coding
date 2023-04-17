import React, { useState, useRef } from "react";
import "./formfield-models.css";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";

import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../../constants/confetti-full-screen.json";

import Button from "../button/Button";
import InputFiled from "../input-field/InputFiled";

import handeShakhImage from "../../assets/hand-shakh.png";
import { Link, useNavigate } from "react-router-dom";

const FormField = () => {
  const [fromData, setFromData] = useState({
    username: "",
    password: "",
  });
  const [isShowPassword, setIsShowPassword] = useState(true);
  const [passwordType, setPasswordType] = useState("password");
  const [unique_ID, setUnique_ID] = useState(null);
  const [copied, setCopied] = useState(false);
  const playerRef = useRef(null);
  const clipCopyRef = useRef(null);

  const navigate = useNavigate();

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

  const onChange = (e) => {
    setFromData({ ...fromData, [e.target.name]: e.target.value });
  };

  const genrateIDHandler = (e) => {
    e.preventDefault();

    let unique_ID = uuidv4();
    setUnique_ID(unique_ID);
    setCopied(true);
    toast.success("Created a new room Id");
  };

  const changeTypeHandler = () => {
    if (isShowPassword === true) {
      setPasswordType("password");
    } else {
      setPasswordType("text");
    }
    setIsShowPassword((preMode) => !preMode);
  };

  function copyToClipboard(e) {
    e.preventDefault();

    const copyText = clipCopyRef.current.textContent;

    navigator.clipboard
      .writeText(copyText)
      .then(() => {
        setCopied(false);
        toast.success("Room ID is copied");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  }

  const submitHandler = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    if (!fromData.password || !fromData.username) {
      toast.error("Please enter Room ID & Username");
      return;
    }

    // if (fromData.password !== unique_ID) {
    //   toast.error("Your enter room id not match");
    //   return;
    // }

    playerRef.current.play();

    setTimeout(() => {
      navigate(`/editor/${fromData.password}`, {
        state: { username: fromData.username },
      });
    }, 3000);
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
        {copied ? (
          <span className="copy___clipbord scale-up-center">
            <p ref={clipCopyRef}>{unique_ID}</p>
            <i className="ri-clipboard-line" onClick={copyToClipboard}></i>
          </span>
        ) : undefined}
        {inputField.map((item, index) => (
          <InputFiled
            key={index}
            {...item}
            value={fromData[inputField.name]}
            onChange={onChange}
            Handler={changeTypeHandler}
            submitHandler={submitHandler}
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
