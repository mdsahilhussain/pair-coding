import React from "react";
import { Button, Toggle } from "../../components";
import "./editor-models.css";

import logoImage from "../../assets/logo.png";
const Editor = ({ setMode }) => {
  const modeHandler = () => {
    setMode((preMode) => !preMode);
  };
  return (
    <section className="editor___container">
      <aside className="editor___container--right">
        <div className="editor___container--right___image">
          <div>
            <img src={logoImage} alt="logoImage" />
            <h4></h4>
          </div>
        </div>
        <div className="editor___container--right___button">
          <Button
            style={{
              padding: "0.8em 2em",
              fontSize: "0.8rem",
              width: "100%",
              borderRadius: "5px",
              color: "white",
              backgroundColor: "red",
            }}
            title="Leave"
          />
        </div>
      </aside>
      <section className="editor___container--left">
        <nav className="editor___container--navbar">
          <div></div>
          <div className="editor___container--navbar___buttons">
            <Button
              style={{
                padding: "0.8em 2em",
                marginRight: "1em",
                fontSize: "0.8rem",
                borderRadius: "5px",
              }}
              title="Run"
              isBlueButton={true}
            />
            <Toggle Handler={modeHandler} />
          </div>
        </nav>
        <section></section>
      </section>
    </section>
  );
};

export default Editor;
