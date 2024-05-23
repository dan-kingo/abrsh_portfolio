import React from "react";
import "./Contact.css";
import emailPic from "../../assets/mail_icon.svg";
import phonePic from "../../assets/call_icon.svg";
import locationPic from "../../assets/location_icon.svg";
const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-heading">
        <h1>Reach Out</h1>
      </div>
      <div className="main-container">
        <div className="left-div">
          <h1>Let's Connect</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
            ullam reprehenderit aliquam eaque laborum doloribus asperiores
            molestias.
          </p>
          <div className="contacts-detail">
            <div className="contact-detail">
              <img src={emailPic} alt="" />
              <p>abrsH@fake.com</p>
            </div>
            <div className="contact-detail">
              <img src={phonePic} alt="" />
              <p>+251 999-000-555</p>
            </div>
            <div className="contact-detail">
              <img src={locationPic} alt="" />
              <p>Bahir Dar, Ethiopia</p>
            </div>
          </div>
        </div>
        <div className="right-div">
          <form>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="enter your email"
            />
            <label htmlFor="message">Your Message</label>
            <textarea
              name="message"
              rows="5"
              id="message"
              placeholder="enter your message"
            ></textarea>
            <input type="submit" name="submit" id="submitBtn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
