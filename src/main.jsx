import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <div>
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
          error: {
            theme: {
              primary: "red",
              secondary: "black",
            },
          },
        }}
      ></Toaster>
    </div>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);
