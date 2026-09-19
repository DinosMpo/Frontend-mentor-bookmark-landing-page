"use client";

import { useState } from "react";
import Image from "next/image";
import "./Contact.css";

export default function Contact() {
  const [contactError, setContactError] = useState(false);
  const [email, setEmail] = useState("");

  const submitEmail = () => {
    // alert(email);
    // setContactError(preV => !preV);
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setContactError(!regex.test(email));
    // console.log(regex.test(email))
  };

  return (
    <div id="contact-container">
      <div id="contact-description">35,000+ ALREADY JOINED</div>

      <div id="contact-wrapper">
        <div id="contact-info-title">Stay up-to-date with what we’re doing</div>

        {/* elegxos oti einai email */}
        <div id="contact-input-container">
          <div
            id="contact-input-wrapper"
            className={contactError ? "contact-input-wrapper-error" : ""}
          >
            <input
              id="contact-input"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
            />
            <Image
              alt="error image"
              width="20"
              height="20"
              src="./icon-error.svg"
              id="input-error-img"
              className={`error-img ${contactError ? "show-error" : ""}`}
            />
            <div
              className={`contact-error ${contactError ? "show-error" : ""}`}
            >
              Whoops, make sure it's an email
            </div>
          </div>

          <div id="contact-submit" onClick={() => submitEmail()}>
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
}
