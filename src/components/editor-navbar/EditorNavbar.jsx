import React from "react";
import Select from "react-select";

import "./editor-navbar-models.css";
import ClientList from "../client-list/ClientList";
import Button from "../button/Button";
import Toggle from "../toggle-button/Toggle";
import { languageOptions } from "../../constants/languages";

function EditorNavbar({ list, setMode, onSelectLanguageHandler }) {
  const modeHandler = () => {
    setMode((preMode) => !preMode);
  };

  return (
    <nav className="editor___container--navbar">
      <div className="editor___container--navbar__IDE">
        <Select
          placeholder={`Filter By Category`}
          options={languageOptions}
          className="language-dropdown"
          defaultValue={languageOptions[0]}
          onChange={(selectedOption) => onSelectLanguageHandler(selectedOption)}
        />
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
