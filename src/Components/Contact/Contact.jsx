import React, { useState } from "react";
import "./Contact.css";
import emailPic from "../../assets/mail_icon.svg";
import phonePic from "../../assets/call_icon.svg";
import locationPic from "../../assets/location_icon.svg";

const Contact = () => {
  const [formStatus, setFormStatus] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "1aab92dc-a0b9-4043-a390-b72203d93691");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setFormStatus("Successfully sent!");
      setEmail("");
      setMessage("");
      setTimeout(() => {
        setFormStatus("");
      }, 5000);
    } else {
      setFormStatus("Failed to send. Please try again.");
    }
  };

  return (
    <div className="contact-section" id="contact">
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
          <form onSubmit={onSubmit} method="POST">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="message">Your Message</label>
            <textarea
              name="message"
              rows="5"
              id="message"
              placeholder="enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <input type="submit" name="submit" id="submitBtn" />
            {formStatus && <p className="form-status">{formStatus}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
