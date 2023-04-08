import React from "react";
import { Link } from "react-router-dom";
import "./navbar-models.css";
import logoImage from "../../assets/logo.png";
import Toggle from "../toggle-button/Toggle";
import Button from "../button/Button";

const Navbar = ({ setScreenMode }) => {
  const modeHandler = () => {
    setScreenMode((currentValue) => !currentValue);
  };
  return (
    <nav>
      <div className="nav___left">
        <div className="nav___left--logo">
          <Link to="/">
            <button>
              <img src={logoImage} alt="logoImage" />
            </button>
          </Link>
        </div>
      </div>
      <div className="nav___right">
        <a target="_blank" href="https://msahilhussain.netlify.app/contact">
          <Button
            style={{
              padding: "0.8em 2em",
              marginRight: "1em",
              fontSize: "0.8rem",
            }}
            title="Contact"
            isBlueButton={true}
          />
        </a>
        <Toggle Handler={modeHandler} />
      </div>
    </nav>
  );
};

export default Navbar;
