import React, { useState, useContext, useEffect } from "react";

import EditorC from "../editor/Editor";
import "./all-editor-models.css";
import { PostContext } from "../../context/PostContext";
const CompilerEditor = () => {
  const consoleSupportLanguages = [
    "javascript",
    "typeScript",
    "coffeescript",
    "dart",
    "lua",
  ];
  const [isConsole, setIsConsole] = useState(false);
  const { selectedLanguage, outputDetails, errorDetails } =
    useContext(PostContext);

  useEffect(() => {
    setIsConsole(consoleSupportLanguages?.includes(selectedLanguage.value));
  }, [selectedLanguage]);


  return (
    <section className="all____editor--container">
      <section className="all____editor--container___right compiler--right ">
        <EditorC />
      </section>
      <section className="all____editor--container___left ">
        {isConsole ? (
          <div className="console">
            <label className="textarea-label">console</label>
            <textarea
              name=""
              id=""
              data-gramm="false"
              data-gramm_editor="false"
              data-enable-grammarly="false"
              style={errorDetails ? { color: "red" } : undefined}
              defaultValue={outputDetails || errorDetails}
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
              style={errorDetails ? { color: "red" } : undefined}
              defaultValue={outputDetails || errorDetails}
            ></textarea>
          </div>
        )}
      </section>
    </section>
  );
};

export default CompilerEditor;
