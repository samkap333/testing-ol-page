import React, { useState } from "react";
import { contactDetails } from '../services/api'
import { GrLocation } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa";

function ContactInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State to control displaying success message

  const handleSubmit = async () => {
    console.log("clicked")
    try {
      const response = await contactDetails({
        name,
        phoneNumber,
        email,
        subject,
        message,
      });

      console.log({ message: response.data });

      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
      setShowSuccessMessage(true); // Set showSuccessMessage to true after successful API call
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="contact-info-main-container">
      <div className="contact-info-top-container">
        <h5 className="contactinfo-label">Get in Touch</h5>
        <h1 className="contactinfo-head">Let's Start Working Together</h1>
      </div>

      <div className="contact-info-container">
        <div className="contact-info-left">
          <h2 className="contact-info-label">Contact information</h2>
          <p className="contact-info-border-linear"></p>
          <div className="contact-details-box">
            <GrLocation className="contact-details-box-icon" />
            <p className="contact-details-box-title">Mohali, Punjab, India</p>
          </div>

          <div className="contact-details-box">
            <IoCallOutline className="contact-details-box-icon" />
            <p className="contact-details-box-title">+91-8476912345</p>
          </div>

          <div className="contact-details-box">
            <FaRegEnvelope className="contact-details-box-icon" />
            <p className="contact-details-box-title">Hr@ocena.in</p>
          </div>
        </div>
        <div className="contact-info-center"></div>
        <div className="contact-info-right">
          <div className="contact-info-box-sm-row">
            <div className="contact-info-box-sm">
              <label>Your name</label>
              <input
                className="contact-info-box-sm-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="contact-info-box-sm">
              <label>Your email</label>
              <input
                className="contact-info-box-sm-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="contact-info-box-sm-row">
            <div className="contact-info-box-sm">
              <label>Your phone</label>
              <input
                className="contact-info-box-sm-input"
                value={phoneNumber}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="contact-info-box-sm">
              <label>Subject</label>
              <input
                className="contact-info-box-sm-input"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
          </div>

          <div className="contact-info-box-lg-row">
            <div className="contact-info-box-lg">
              <label>Message</label>
              <textarea
                className="contact-info-box-texrarea"
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          <div className="contact-info-button-container">
            <p className="contact-info-button" onClick={handleSubmit}>
              Send now
            </p>
          </div>

          {showSuccessMessage && ( 
            <p>Thanks, we will contact you soon!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
