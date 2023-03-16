import React from "react";
import "./editor-navbar-models.css";
import ClientList from "../client-list/ClientList";
import Button from "../button/Button";
import Toggle from "../toggle-button/Toggle";

function EditorNavbar({ list, setMode }) {
  const modeHandler = () => {
    setMode((preMode) => !preMode);
  };

  return (
    <nav className="editor___container--navbar">
      <div className="editor___container--navbar__IDE">
        <select name="IDE" id="IDE">
          <option value="volvo">C++</option>
          <option value="saab">HTML,CSS, JavaScript</option>
        </select>
      </div>
      <div className="editor___container--navbar___list">
        <ClientList list={list} />
      </div>
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
  );
}

export default EditorNavbar;
