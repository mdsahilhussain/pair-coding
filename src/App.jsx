import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { PostContextProvider } from "./context/PostContext";

//* ----------import component and pages -------------------------
import { EditorPage, Home } from "./pages";
import { Navbar } from "./components";

function App() {
  const [mode, setMode] = useState(true);

  return (
    <PostContextProvider>
      <div className={`App ${mode ? "lightMode" : "dakeMode"}`}>
        <section>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar setMode={setMode} /> <Home />
                </>
              }
            ></Route>
            <Route
              path="/editor/:id"
              element={<EditorPage setMode={setMode} />}
            />
          </Routes>
        </section>
      </div>
    </PostContextProvider>
  );
}

export default App;
