import React, { useEffect, useState } from "react";
import "./home-models.css";

//* ----------import component and pages -------------------------
import { Button, FormField } from "../../components";

//* ----------import all images -------------------------
import headerImage from "../../assets/code-editor.svg";
import BGImage from "../../assets/shape.svg";
import BGImageOne from "../../assets/shapeOne.svg";
import BGImageTwo from "../../assets/shapeTwo.svg";
import BGImageThree from "../../assets/shapeThree.svg";
import BGImageFour from "../../assets/shapeFour.svg";
import BGImageFive from "../../assets/shapeFive.svg";

const Home = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [isEditor, setIsEditor] = useState(false);
  const imageArray = [
    BGImage,
    BGImageOne,
    BGImageTwo,
    BGImageThree,
    BGImageFour,
    BGImageFive,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, 500);

    // Clean up the interval on unmount
    return () => clearInterval(interval);
  }, [imageArray.length]);

  const getEditorHandler = () => {
    if (isEditor === true) {
      return setIsEditor(false);
    }
    setIsEditor((preMode) => !preMode);
  };

  return (
    <header>
      <div className="header___left">
        <h1 className="highlightText">
          Co<div className="text-D"></div>e Edit
          <div style={{ display: "inline-block", alignItems: "flex-start" }}>
            <div className="text-O"></div>
          </div>
          r
        </h1>
        <h2>Become a Professional in Codeing skills. </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Orci placerat maecenas luctus
          arcu felis sed. Enim sit sapien tortor egestas non donec velit.
        </p>
        <span onClick={getEditorHandler}>
          <Button
            style={{
              padding: "0.8em 2em",
              width: "50%",
              marginTop: "1em",
              fontSize: "1rem",
            }}
            title={isEditor ? "Go Back" : "Go To Editor"}
            isBlueButton={true}
          />
        </span>
      </div>
      <div className="header___right">
        {isEditor ? (
          <div className="form___container scale-up-center">
            <i className="ri-close-fill" onClick={getEditorHandler}></i>
            <FormField />
          </div>
        ) : (
          <React.Fragment>
            <div className="front___image">
              <img src={headerImage} alt="hearderImage" />
            </div>
            <div className="back___image">
              <img src={imageArray[imageIndex]} alt="headerBGImage" />
            </div>
          </React.Fragment>
        )}
      </div>
    </header>
  );
};

export default Home;
