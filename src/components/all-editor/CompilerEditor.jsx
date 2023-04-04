import React, { useState } from "react";

import EditorC from "../editor/Editor";
import "./all-editor-models.css";
const CompilerEditor = ({ currEditor }) => {
  return (
    <section className="all____editor--container">
      <section className="all____editor--container___right compiler--right ">
        <EditorC />
      </section>
      <section className="all____editor--container___left compiler--left">
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
      </section>
    </section>
  );
};

export default CompilerEditor;
