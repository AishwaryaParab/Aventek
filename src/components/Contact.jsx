import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lacyutl",
        "template_85o44em",
        form.current,
        "vrBe-1BBRN1jIPpq3"
      )
      .then(
        (result) => {
          // console.log(result.text);
        },
        (error) => {
          // console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="contact-us">
      <h3 className="get-in-touch">Get In Touch</h3>

      <div className="contact">
        <form ref={form} onSubmit={sendEmail}>
          <div className="personal-details">
            <input
              name="name"
              className="contact-item name"
              placeholder="Your name"
              required
              autoComplete="off"
            />
            <input
              name="company-name"
              type="text"
              className="contact-item"
              placeholder="Your company name"
              required
              autoComplete="off"
            />
          </div>

          <div className="personal-details">
            <input
              name="email"
              className="contact-item email"
              placeholder="Your email"
              required
              autoComplete="off"
            />
            <input
              name="contact"
              className="contact-item"
              placeholder="Your phone number"
              required
              autoComplete="off"
            />
          </div>

          <input
            name="subject"
            className="contact-item"
            placeholder="Subject"
            required
            autoComplete="off"
          />
          <textarea
            name="message"
            required
            placeholder="Message"
            className="contact-item message"
            cols={24}
            rows={24}
            autoComplete="off"
          />
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>

        <div className="contact-details">
          <span className="central-support">Worldwide Support Centre:</span>
          <p>Aventek Engineering Solutions LLP</p>
          <p>Plot No 424, A/P Shindewadi, Tal-Bhor</p>
          <p>Pune - 412205</p>
          {/* <p>Contact : +91 8668550364</p> */}
          <p>State Name : Maharashtra, Code : 27</p>
          <p>GSTIN/UIN : 27ABXFA8380R1Z5</p>

          <br></br>
          <p>
            <span className="central-support">Email : </span>
          </p>
          <p>admin@aventek.in</p>
          <br></br>
          <p>
            <span className="central-support">
              PAN India Regional Supply/Support at
            </span>{" "}
            Mumbai, Hyderabad, Telangana, Gujarat, Rajasthan & Kerala.
          </p>

          <br></br>
          <p>
            <em>
              <span className="central-support">
                Global deliveries to USA, South East Asia & South Africa
              </span>
            </em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
