import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "./App.css";

//* ----------import component and pages -------------------------
import { Home } from "./pages";
import { Navbar } from "./components";

function App() {
  const [mode, setMode] = useState(true);

  return (
    <div className={`App ${mode ? "lightMode" : "dakeMode"}`}>
      <Navbar setMode={setMode} />
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
