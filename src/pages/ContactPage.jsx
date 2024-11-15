import React from 'react'
import { Contact, Navbar } from '../components'
import "../components/Contact.css";

const ContactPage = () => {
  return (
    <div>
        <Navbar />
        <br></br>
        <br></br>
        <br></br>
        <Contact className="contact-page" />
    </div>
  )
}

export default ContactPage