import React, { useState } from "react";
import Editor from "../editor/Editor";
import "./all-editor-models.css";

const FrontendEditor = ({ currFrontend }) => {
  const [hmtl, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  return (
    <section className="all____editor--container">
      <section className="all____editor--container___right">
        {currFrontend === "HTML" && (
          <Editor
            editorName="HTML"
            language="xml"
            value={hmtl}
            onChange={setHtml}
          />
        )}
        {currFrontend === "CSS" && (
          <Editor
            editorName="CSS"
            language="css"
            value={css}
            onChange={setCss}
          />
        )}
        {currFrontend === "JAVASCRIPT" && (
          <Editor
            editorName="JAVASCRIPT"
            language="javascript"
            value={js}
            onChange={setJs}
          />
        )}
      </section>
      <section className="all____editor--container___left">
        <iframe title="This is a unique title" className="frontend-output" />
      </section>
    </section>
  );
};

export default FrontendEditor;
