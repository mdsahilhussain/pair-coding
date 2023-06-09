import React, { useContext } from "react";
import Select from "react-select";
import toast from "react-hot-toast";

import "./editor-navbar-models.css";
import ClientList from "../client-list/ClientList";
import Button from "../button/Button";
import Toggle from "../toggle-button/Toggle";
import currentLanguageOption from "../../constants/currentLanguages.json";
import { PostContext } from "../../context/PostContext";
import useFetch from "../../hooks/useFetch";

function EditorNavbar({
  list,
  setScreenMode,
  setIsMessageBoxShow,
  onSelectLanguageHandler,
}) {
  const { loading, code } = useContext(PostContext);

  const modeHandler = () => {
    setScreenMode((currentValue) => !currentValue);
  };

  const messageBoxShowHandler = () => {
    setIsMessageBoxShow((currentValue) => !currentValue);
  };

  const { fetchOutput } = useFetch("https://code-compiler.p.rapidapi.com/v2");

  const compileCodeHandler = () => {
    if (code === "") {
      return toast.error("Please write something on editor");
    }
    fetchOutput();
  };

  return (
    <nav className="editor___container--navbar">
      <div className="editor___container--navbar__IDE">
        <Select
          placeholder={`Filter By Category`}
          options={currentLanguageOption}
          className="language-dropdown"
          defaultValue={currentLanguageOption[0]}
          onChange={(selectedOption) => onSelectLanguageHandler(selectedOption)}
        />
      </div>
      <div className="editor___container--navbar___list">
        <ClientList list={list} />
      </div>
      <div
        className="editor___container--navbar___buttons"
        onClick={compileCodeHandler}
      >
        <Button
          style={{
            padding: "0.8em 2em",
            marginRight: "1em",
            fontSize: "0.8rem",
            borderRadius: "5px",
          }}
          title={loading ? "Compiling..." : "RUN"}
          isBlueButton={true}
        />
      </div>
      <Toggle Handler={modeHandler} />
      <div
        className="massege___toggle--button noficationIndicater"
        onClick={messageBoxShowHandler}
      >
        <i className="ri-chat-1-line"></i>
      </div>
    </nav>
  );
}

export default EditorNavbar;
