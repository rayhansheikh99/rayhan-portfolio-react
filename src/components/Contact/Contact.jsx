import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <arcticle className="contact-option">
            <MdOutlineEmail className='contact-option-icon'/>
            <h4>Email</h4>
            <h5>rayhan.sheikh99@gmail.com</h5>
            <a href="mailto:rayhan.sheikh99@gmail.com">Send a message</a>
          </arcticle>
          <arcticle className="contact-option">
            <RiMessengerLine className='contact-option-icon'/>
            <h4>Messenger</h4>
            <h5>rayhansheikh99</h5>
            <a href="https://m.me/rayhansheikh99" target="_blank" rel="noreferrer">Send a message</a>
          </arcticle>
          <arcticle className="contact-option">
            <BsWhatsapp className='contact-option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+8801303262014</h5>
            <a href="https://api.whatsapp.com/send?phone=01303262014" target="_blank" rel="noreferrer">Send a message</a>
          </arcticle>
        </div>
        {/* END OF CONTACT OPTION */}
        <form action="">
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
          <button type='submit' className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact