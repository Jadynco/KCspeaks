import React from 'react';

import { Routes, Route, NavLink } from 'react-router-dom';
import { Mail } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

import KSLogo from "./images/KS-logo.png";

import MI1 from "./images/MI1.png";
import MI2 from "./images/MI2.png";
import MI3 from "./images/MI3.png";
import MI4 from "./images/MI4.png";
import MI5 from "./images/MI5.png";
import MI6 from "./images/MI6.png";
import MI7 from "./images/MI7.png";
import MI8 from "./images/MI8.png";
import MI9 from "./images/MI9.png";
import MI10 from "./images/MI10.png";
import MI11 from "./images/MI11.png";
import MI12 from "./images/MI12.png";
import MI13 from "./images/MI13.png";
import MI14 from "./images/MI14.png";

function Navbar(){
  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <div className="brand">
          <div className="brand-logo"><img src={KSLogo}/></div>
          <div className='head'>Kenyatta Speaks</div>
        </div>
        <div className="nav-links">
          <NavLink to="/" end className={({isActive})=>`nav-link ${isActive ? 'active':''}`}>Home</NavLink>
           <NavLink to="/services" className={({isActive})=>`nav-link ${isActive ? 'active':''}`}>Services</NavLink>
          <NavLink to="/about" className={({isActive})=>`nav-link ${isActive ? 'active':''}`}>About</NavLink>
          <a className="btn" href="#contact">
            <Mail size={15}/> Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  const logos = [
    MI1, MI2, MI3, MI4, MI5, MI6, MI7,
    MI8, MI9, MI10, MI11, MI12, MI13, MI14
  ];

  return (
    <footer className="footer">
      <div className="container">

        <div className="kicker">Purpose Driven Partners</div>
        <h3>Organizations We've Supported</h3>
        <p className="small">
          We’re honored to have collaborated with schools, nonprofits, public agencies, 
          and organizations that share our commitment to growth, resilience, and 
          transformative leadership.
        </p>

        {/* marquee of logos */}
        <div className="marquee" aria-label="Partner logos marquee">
          <div className="marquee-track">
            {logos.concat(logos).map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt={`Partner logo ${i + 1}`}
                className="logo-img"
              />
            ))}
          </div>
        </div>

        <div style={{ marginTop: "24px" }} className="small">
          © {new Date().getFullYear()} Kenyatta Speaks, LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function App(){
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </div>
  )
}
