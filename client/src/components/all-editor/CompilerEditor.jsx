import React, { useState } from "react";
import Editor from "../editor/Editor";
import "./all-editor-models.css";
const CompilerEditor = ({ currEditor }) => {
  const [cpp, setCpp] = useState("");
  const [java, setJava] = useState("");

  return (
    <section className="all____editor--container">
      <section className="all____editor--container___right compiler--right ">
        {currEditor === "CPP" && (
          <Editor
            editorName="CPP"
            language="text/x-c++src"
            value={cpp}
            onChange={setCpp}
          />
        )}
        {currEditor === "JAVA" && (
          <Editor
            editorName="JAVA"
            language="text/x-java"
            value={java}
            onChange={setJava}
          />
        )}
      </section>
      <section className="all____editor--container___left compiler--left">
        <label>input</label>
        <textarea
          name=""
          id=""
          style={{ marginBottom: "0.5em" }}
          data-gramm="false"
          data-gramm_editor="false"
          data-enable-grammarly="false"
        ></textarea>
        <label>output</label>
        <textarea
          name=""
          id=""
          data-gramm="false"
          data-gramm_editor="false"
          data-enable-grammarly="false"
        ></textarea>
      </section>
    </section>
  );
};

export default CompilerEditor;
