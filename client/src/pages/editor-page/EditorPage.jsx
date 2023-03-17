import React from "react";
import { Button, Editor, EditorNavbar } from "../../components";
import { useLocation } from "react-router-dom";
import "./editor-page-models.css";

import logoImage from "../../assets/logo.png";
const EditorPage = ({ setMode }) => {
  const location = useLocation();
  const { username } = location?.state;
  console.log(username);

  const userList = [
    { socketId: "0", username: "m sahil hussain" },
    { socketId: "1", username: "badal" },
    { socketId: "2", username: "aman" },
    { socketId: "3", username: "nivedita" },
    { socketId: "3", username: "nivedita" },
  ];

  return (
    <section className="editor___container">
      <aside className="editor___container--right">
        <div className="editor___container--right___image">
          <div>
            <img src={logoImage} alt="logoImage" />
            <h4>Code Editor</h4>
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
        <section>
          <EditorNavbar list={userList} setMode={setMode} />
        </section>
        <section>
          <Editor />
        </section>
      </section>
    </section>
  );
};

export default EditorPage;
