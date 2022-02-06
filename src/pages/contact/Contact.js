import React from "react";
import "./Contact.css";
import phone from "../../img/phone.png";
import email from "../../img/email.png";

export default function Home() {
  return (
    <div className="contact">
      <div className="co-wrapper">
        <div className="co-left">
          <div className="co-bg"></div>
          <div className="co-info-wrapper">
            <h1 className="display-1 co-title">Let's discuss</h1>
            <div className="co-info">
              <div className="co-info-phone">
                <img src={phone} alt="" className="co-info-img" />
                <p className="info-data">+91 8787276894</p>
              </div>
              <div className="co-info-email">
                <img src={email} alt="" className="co-info-img" />
                <p className="info-data">andpmedia1@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="co-right">
          <h1>right</h1>
        </div>
      </div>
    </div>
  );
}
