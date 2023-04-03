import React from "react";
import "./editor-models.css";

const Editor = ({ editorName, value, onChange, language }) => {
  const changeHandler = (editor, data, value) => {
    onChange(value);
  };
  return (
    <section className="editor-x___container">
      <h5 className="editor-x___container--title">{editorName}</h5>
    </section>
  );
};

export default Editor;
