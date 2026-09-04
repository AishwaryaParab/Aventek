import React, { useRef, useState } from "react";
import "./HomeSections.css";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const REGIONS = [
  "Mumbai",
  "Hyderabad",
  "Telangana",
  "Gujarat",
  "Rajasthan",
  "Kerala",
];

const DELIVERIES = ["USA", "South East Asia", "South Africa"];

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("idle");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_lacyutl",
        "template_85o44em",
        form.current,
        "vrBe-1BBRN1jIPpq3"
      )
      .then(() => {
        setStatus("success");
        form.current.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <>
      <div className="page-banner">
        <div className="page-banner-inner">
          <h1 className="page-banner-title">Contact Us</h1>
          <p className="page-banner-sub">
            Tell us what you are running and what has failed. We will identify
            the right part and confirm it is the correct specification for your
            application.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="section-inner contact-split">
          <div className="contact-form-wrap">
            <h2 className="section-heading">Send Us a Message</h2>

            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="field-row">
                <div className="field">
                  <label htmlFor="contact-name">Your name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                  />
                </div>

                <div className="field">
                  <label htmlFor="contact-company">Company name</label>
                  <input
                    id="contact-company"
                    name="company-name"
                    type="text"
                    required
                    autoComplete="organization"
                  />
                </div>
              </div>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                  />
                </div>

                <div className="field">
                  <label htmlFor="contact-phone">Phone number</label>
                  <input
                    id="contact-phone"
                    name="contact"
                    type="tel"
                    required
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  autoComplete="off"
                />
              </div>

              <div className="field">
                <label htmlFor="contact-message">
                  What equipment are you running, and what has failed?
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={7}
                  required
                  autoComplete="off"
                />
              </div>

              <button
                type="submit"
                className="btn btn--accent"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Submit"}
              </button>

              {status === "success" && (
                <p className="form-status form-status--ok" role="status">
                  Thanks — your message has been sent. We will get back to you
                  shortly.
                </p>
              )}

              {status === "error" && (
                <p className="form-status form-status--error" role="alert">
                  Something went wrong and your message was not sent. Please
                  email us directly at{" "}
                  <a href="mailto:admin@aventek.in">admin@aventek.in</a>.
                </p>
              )}
            </form>
          </div>

          <aside className="contact-details">
            <div className="detail-block">
              <h3 className="detail-heading">Worldwide Support Centre</h3>
              <p>Aventek Engineering Solutions LLP</p>
              <p>Plot No 424, A/P Shindewadi, Tal-Bhor</p>
              <p>Pune 412205, Maharashtra</p>
              <p className="detail-meta">State Code: 27</p>
              <p className="detail-meta">GSTIN/UIN: 27ABXFA8380R1Z5</p>
            </div>

            <div className="detail-block">
              <h3 className="detail-heading">Email</h3>
              <p>
                <a href="mailto:admin@aventek.in">admin@aventek.in</a>
              </p>
            </div>

            <div className="detail-block">
              <h3 className="detail-heading">Regional Supply and Support</h3>
              <div className="detail-pills">
                {REGIONS.map((region) => (
                  <span className="detail-pill" key={region}>
                    {region}
                  </span>
                ))}
              </div>
            </div>

            <div className="detail-block">
              <h3 className="detail-heading">Global Deliveries</h3>
              <div className="detail-pills">
                {DELIVERIES.map((place) => (
                  <span className="detail-pill" key={place}>
                    {place}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Contact;
