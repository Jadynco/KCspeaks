import React, { useState } from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { SiThreads } from "react-icons/si"; // Threads icon from simple-icons
import emailjs from 'emailjs-com';


export default function Contact(){
    const handleform = (event)=>{
        event.preventDefault();
        emailjs.sendForm('service_9zp5zul', 'template_abwvv9a', event.target, 'IZSWjZbHgna1AgSuz');
        alert("submitted")
    }
  const iconStyle = {
    color: "#9b5de5",
  fontSize: "rem"

};
  

return (
  <main className="section" id="contact">
    <div className="container">
      <div className="kicker">Contact Us</div>
      <h2>Unlock Your Leadership Potential. We’re Here to Help!</h2>
      <div className="grid">
        <div className="card span-6">
        
          <form onSubmit={handleform}>
      <label >Full Name</label>
      <input
        type="text" 
        id="name"
        name="name" 
        className='input'
        required/>

      <label>Email Address</label>
      <input 
        type="email" 
        id="email"
        name="email"
        className='input'
        required/>

      <label>Organization</label>
        <input 
        id="org"
          name="org"
        className='input'
      />

      <label>Message</label>
      <textarea id="message"
        name="message"
        className='input'
        rows="5"
        required></textarea>
      

      <button className='btn' type="submit" >Send Message</button>
  </form>
          
        </div>
        <div className="card span-6">
              <h3>Other ways to stay connected!</h3>
              <p> 
                Follow me on my social media pages to stay updated and get the inside scoop about me, what I do, and the projects 
                and ideas I’m working on.
                <br/><br/>
                  Connect with me, engage with my posts, and be part of my journey as I share tips, insights, 
                and behind the scenes moments.
              </p>
            <div style={{ display: "flex", gap: "20px", alignItems: "center" , justifyContent:"center", padding:"50px"}}>
    
  
    <a
      href="https://www.instagram.com/kenyattaspeaks/"
      target="_blank"
      rel="noopener noreferrer"
      style={iconStyle}
    >
      <FaInstagram />
    </a>
    <a
      href="https://www.facebook.com/people/Kenyatta-Speaks/100063772825647/"
      target="_blank"
      rel="noopener noreferrer"
      style={iconStyle}
    >
      <FaFacebookF />
    </a>
    <a
      href="https://www.linkedin.com/in/kenyatta-connaway-51228a1a5/e"
      target="_blank"
        rel="noopener noreferrer"
        style={iconStyle}
      >
        <FaLinkedinIn />
      </a>
      <a
        href="https://www.threads.com/@kenyattaspeaks?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        style={iconStyle}
      >
        <SiThreads />
      </a>
    </div>
          </div>
        </div>
      </div>
    </main>
  )
}
