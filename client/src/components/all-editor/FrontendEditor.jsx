import React, { useState, useEffect } from "react";
import Editor from "../editor/Editor";
import "./all-editor-models.css";

const FrontendEditor = ({ currFrontend }) => {
  const [hmtl, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
      <body>${hmtl}</body>
      <style>${css}</style>
      <script>${js}</script>
      </html>`);
    }, 250);
    return () => clearTimeout(timeout);
  }, [hmtl, css, js]);

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
        <iframe title="output" srcDoc={srcDoc} className="frontend-output" />
      </section>
    </section>
  );
};

export default FrontendEditor;
