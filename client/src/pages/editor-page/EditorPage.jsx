import React, { useContext } from "react";
import {
  Button,
  CompilerEditor,
  EditorNavbar,
  FrontendEditor,
  MessageBox,
} from "../../components";
import { useLocation, useNavigate } from "react-router-dom";
import { PostContext } from "../../context/PostContext";
import "./editor-page-models.css";

import logoImage from "../../assets/logo.png";
const EditorPage = ({
  setScreenMode,
  isMessageBoxShow,
  setIsMessageBoxShow,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { username } = location?.state;

  const { setSelectedLanguage, setCode, setErrorDetails, setOutputDetails } =
    useContext(PostContext);
  //Todo const [theme, setTheme] = useState("cobalt");

  const userList = [
    { socketId: "0", username: "m sahil hussain" },
    { socketId: "1", username: "badal" },
    { socketId: "2", username: "aman" },
    { socketId: "3", username: "nivedita" },
    { socketId: "3", username: "nivedita" },
  ];

  const leaveEditorHandler = () => {
    localStorage.clear();
    navigate("/", { replace: "true" });
  };

  const onSelectLanguageHandler = (currentLanguage) => {
    setSelectedLanguage(currentLanguage);
    setCode("");
    setErrorDetails("");
    setOutputDetails("");
  };

  return (
    <section className="editorPage___container">
      {/* //! A side menu  */}
      {!isMessageBoxShow && (
        <aside className="editorPage___container--right">
          <div className="editorPage___container--right___top">
            <div className="editorPage___container--right___top--image">
              <img src={logoImage} alt="logoImage" />
              <h4>Code editor</h4>
            </div>
          </div>

          <div
            className="editorPage___container--right___button"
            onClick={leaveEditorHandler}
          >
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
      )}

      <section className="editorPage___container--left">
        <section className="editorPage___container--left___nav">
          <EditorNavbar
            list={userList}
            setScreenMode={setScreenMode}
            setIsMessageBoxShow={setIsMessageBoxShow}
            onSelectLanguageHandler={onSelectLanguageHandler}
          />
        </section>
        <section className="editorPage___container--left___editor">
          <CompilerEditor />
          {isMessageBoxShow && (
            <section className="editorPage___message-box">
              <MessageBox />
            </section>
          )}
        </section>
      </section>
    </section>
  );
};

export default EditorPage;
