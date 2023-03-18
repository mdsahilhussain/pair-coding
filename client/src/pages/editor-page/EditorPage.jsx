import React, { useState } from "react";
import {
  Button,
  CompilerEditor,
  EditorNavbar,
  FrontendEditor,
} from "../../components";
import { useLocation } from "react-router-dom";
import "./editor-page-models.css";

import logoImage from "../../assets/logo.png";
const EditorPage = ({ setMode }) => {
  const location = useLocation();
  const { username } = location?.state;
  console.log(username);
  const [currFrontend, setCurrFrontend] = useState("HTML");
  const [currEditor, setCurrEditor] = useState("CPP");

  const userList = [
    { socketId: "0", username: "m sahil hussain" },
    { socketId: "1", username: "badal" },
    { socketId: "2", username: "aman" },
    { socketId: "3", username: "nivedita" },
    { socketId: "3", username: "nivedita" },
  ];

  return (
    <section className="editorPage___container">
      <aside className="editorPage___container--right">
        <div className="editorPage___container--right___top">
          <div className="editorPage___container--right___top--image">
            <img src={logoImage} alt="logoImage" />
            <h4>Code editor</h4>
            {currEditor === "FD" && (
              <ul className="editorPage___container--right___top--list">
                <li onClick={() => setCurrFrontend("HTML")}>HTML</li>
                <li onClick={() => setCurrFrontend("CSS")}>CSS</li>
                <li onClick={() => setCurrFrontend("JAVASCRIPT")}>
                  JAVASCRIPT
                </li>
              </ul>
            )}
          </div>
        </div>

        <div className="editorPage___container--right___button">
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
      <section className="editorPage___container--left">
        <section className="editorPage___container--left___nav">
          <EditorNavbar
            list={userList}
            setMode={setMode}
            currEditor={currEditor}
            setCurrEditor={setCurrEditor}
          />
        </section>
        <section className="editorPage___container--left___editor">
          {currEditor === "CPP" || currEditor === "JAVA" ? (
            <CompilerEditor currEditor={currEditor} />
          ) : undefined}
          {currEditor === "FD" && (
            <FrontendEditor currFrontend={currFrontend} />
          )}
        </section>
      </section>
    </section>
  );
};

export default EditorPage;
