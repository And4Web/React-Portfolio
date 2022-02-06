import React, { useRef } from "react";
import "./Contact.css";
import phone from "../../img/phone.png";
import email from "../../img/email.png";
import linkedin from "../../img/linkedin.png";
import github from "../../img/github.png";
import twitter from "../../img/twitter.png";
import facebook from "../../img/facebook.png";

export default function Home() {
  const formRef = useRef();
  const formSubmit = (e) => {
    e.preventDefault();
  };

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
              <p
                style={{
                  marginTop: 50,
                  textAlign: "center",
                  fontSize: 25,
                  fontWeight: 200,
                }}
              >
                My social links
              </p>

              <div className="social">
                <a href="" target="blank">
                  <img src={email} alt="" className="co-info-img" />
                </a>
                <a href="https://www.linkedin.com/in/and4web/" target="blank">
                  <img src={linkedin} alt="" className="co-info-img" />
                </a>
                <a href="https://github.com/And4Web" target="blank">
                  <img src={github} alt="" className="co-info-img" />
                </a>
                <a href="https://twitter.com/And4Web" target="blank">
                  <img src={twitter} alt="" className="co-info-img" />
                </a>
                <a href="https://www.facebook.com/And4Web/" target="blank">
                  <img src={facebook} alt="" className="co-info-img" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="co-right">
          <div className="co-right-desc">
            <h3>What's your Project? </h3>
            <p>
              Let's talk about it and see how to work on it. You can hire me as
              your Web/Mobile App Developer. Message me here:
            </p>
          </div>

          <form ref={formRef} onSubmit={formSubmit}>
            <input type="text" placeholder="Your name" name="user_name" />
            <input type="text" placeholder="Your email" name="use_email" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <textarea rows="6" placeholder="Your message" />
            <button className="btn btn-secondary co-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
