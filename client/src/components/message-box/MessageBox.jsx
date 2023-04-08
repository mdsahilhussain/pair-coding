import React from "react";
import InputFiled from "../input-field/InputFiled";
import "./message-box.css";

const MessageBox = () => {
  return (
    <React.Fragment>
      <section className="message___box--contaner scroll">
        <div className="message___box--card">
          <div style={{}}>
            <div className="message___box--card__massage">
              <h5>hello how are you</h5>
            </div>
            <p className="message___box--card__username">sahil hussain</p>
          </div>
        </div>
      </section>
      <section className="message___box--inputField">
        <InputFiled style={{ widht: "100%" }} color="#4e5dc0" />
        <div className="massege___send--button">
          <i class="ri-send-plane-fill"></i>
        </div>
      </section>
    </React.Fragment>
  );
};

export default MessageBox;
