import React, { useState, useContext, useEffect } from "react";

import EditorC from "../editor/Editor";
import "./all-editor-models.css";
import { PostContext } from "../../context/PostContext";
const CompilerEditor = () => {
  const [isConsole, setIsConsole] = useState(true);
  const { selectedLanguage } = useContext(PostContext);

  return (
    <section className="all____editor--container">
      <section className="all____editor--container___right compiler--right ">
        <EditorC />
      </section>
      <section className="all____editor--container___left ">
        {!isConsole ? (
          <div className="console">
            <label></label>
            <textarea
              name=""
              id=""
              data-gramm="false"
              data-gramm_editor="false"
              data-enable-grammarly="false"
            ></textarea>
          </div>
        ) : (
          <div className="compiler--input_output">
            <label className="textarea-label">input</label>
            <textarea
              name=""
              id=""
              style={{ marginBottom: "0.5em" }}
              data-gramm="false"
              data-gramm_editor="false"
              data-enable-grammarly="false"
            ></textarea>
            <label className="textarea-label">output</label>
            <textarea
              name=""
              id=""
              data-gramm="false"
              data-gramm_editor="false"
              data-enable-grammarly="false"
            ></textarea>
          </div>
        )}
      </section>
    </section>
  );
};

export default CompilerEditor;
