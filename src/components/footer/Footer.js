import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer(){
  return (
    <footer className="footer">
      <div>
        <h4 className="title">GET IN TOUCH</h4>
        <div className="icon-container">
          <AiOutlineMail className="icon" />
          <span>msa.edu.eg</span>
        </div>
        <div className="icon-container">
          <AiOutlinePhone className="icon" />
          <span>01012345678</span>
        </div>
      </div>
      <div className="contact-section">
        <Link to={"/contactUs"}><button className="contact-button">CONTACT US</button></Link>
      </div>
      <div className="icon-container">
        <FaFacebook className="icon" />
        <FaTwitter className="icon" />
        <FaLinkedin className="icon" />
      </div>
    </footer>
  );
};