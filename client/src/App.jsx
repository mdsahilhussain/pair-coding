import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { PostContextProvider } from "./context/PostContext";

//* ----------import component and pages -------------------------
import { EditorPage, Home } from "./pages";
import { Navbar } from "./components";

function App() {
  const [screenMode, setScreenMode] = useState(true);
  const [isMessageBoxShow, setIsMessageBoxShow] = useState(false);

  return (
    <PostContextProvider>
      <div className={`App ${screenMode ? "lightMode" : "dakeMode"}`}>
        <section>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar
                    screenMode={screenMode}
                    setScreenMode={setScreenMode}
                  />
                  <Home />
                </>
              }
            ></Route>
            <Route
              path="/editor/:id"
              element={
                <EditorPage
                  setScreenMode={setScreenMode}
                  isMessageBoxShow={isMessageBoxShow}
                  setIsMessageBoxShow={setIsMessageBoxShow}
                />
              }
            />
          </Routes>
        </section>
      </div>
    </PostContextProvider>
  );
}

export default App;
