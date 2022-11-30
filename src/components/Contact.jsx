import React from 'react';
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-us">
      <h3 className="get-in-touch">Get In Touch</h3>

      <div className="contact">
        <form>
            <div className="personal-details">
                <input placeholder='Your name' />
                <input placeholder='Your email' />
            </div>

            <input className="subject" placeholder="Subject" />
            <textarea placeholder="Message" className="subject message" cols={24} rows={24} />
            
        </form>

        <div className="contact-details">
            <span className="central-support">Central Support Centre:</span>
            <p>Plot No 424, A/P Shindewadi, Tal-Bhor</p>
            <p>Pune - 412205</p>
            <p>GSTIN/UIN : 27ABXFA8380R1Z5</p>
            <p>State Name : Maharashtra, Code : 27</p>
            <p>Contact : 08668550364</p>
            <p>Email : </p>
            <p>spares@aventek.in</p>
            <p>admin@aventek.in</p>
            <p>For Regional Support at Mumbai, Hyderabad, Telangana, Gujarat, Rajasthan and Kerala, Contact - Deshmukh.Vikas@aventek.in</p>
        </div>
      </div>
    </div>
  )
}

export default Contact;
