import React from "react";
import "./editor-models.css";

import { Controlled as ControlledEditor } from "react-codemirror2";

import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/clike/clike";

import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/hint/javascript-hint";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/hint/anyword-hint";

const Editor = ({ editorName, value, onChange, language }) => {
  const changeHandler = (editor, data, value) => {
    onChange(value);
  };
  return (
    <section className="editor-x___container">
      <h5 className="editor-x___container--title">{editorName}</h5>
      <ControlledEditor
        className="controlled-editor"
        onBeforeChange={changeHandler}
        value={value}
        options={{
          lineWrapping: true,
          lint: true,
          lineNumbers: true,
          mode: language,
          theme: "material",
          autoCloseBrackets: true,
          smartIndent: true,
          autoCloseTags: true,
          matchBrackets: true,
          extraKeys: {
            "Ctrl-Space": "autocomplete",
          },
        }}
      />
    </section>
  );
};

export default Editor;
