import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaCheck,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import banner_blogs from "../assets/Banner-blogs.png";
import MotherBabyImage from "../assets/Mother_baby.png";
import BadgeImage from "../assets/Group-5730.png";

const Contact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header className="header">
        {/* --- Top Bar --- */}
        <div className="header-top-bar">
          <div className="top-bar-left">
            <button className="request-quote-btn">Request A Quote</button>
            <span className="contact-info">| Email: info@feelac.net</span>
          </div>
          <div className="top-bar-right">
            <span className="contact-info">
              Customer Care: +971 52 755 6655 |
            </span>
            <span className="follow-us">Follow us:</span>
            <div className="social-icons">
              {/* 2. Use the imported React components */}
              <a
                href="https://www.facebook.com/NeofarmFrance"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a
                href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* --- Main Navigation --- */}
        <nav className="header-nav">
          <div className="logo">
            <span className="logo-text">
              <img src={Logo} alt="" />
            </span>
          </div>

          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            &#9776;
          </button>

          {/* Navigation Links */}
          <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <li>
              <a href="#" className="active">
                <Link to="/">Home</Link>
              </a>
            </li>
            <li>
              <a href="#">
                <Link to="/about">About</Link>
              </a>
            </li>

            {/* *** UPDATED: Products Dropdown Structure *** */}
            <li className="nav-dropdown-item">
              <a href="#">Products ▼</a>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/Feelac-Premium">Neofarm</Link>
                </li>
                <li>
                  <Link to="/Feelac-basic">Neofarm Premium+</Link>
                </li>
              </ul>
            </li>

            <li>
              <a href="#">
                <Link to="/blogs">Blogs</Link>
              </a>
            </li>
            <li>
              <a href="#">
                <Link to="/contact">Contact</Link>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {/* --- Hero Section Content (from the image) --- */}
      <section class="astronaut-banner">
        <div class="banner-text-content">
          <h1>CONTACT US</h1>
        </div>
      </section>
      <section className="contact-section">
        <div className="contact-container">
          {/* --- Left Column: Contact Information --- */}
          <div className="contact-info-column">
            <div className="contact-detail-group">
              <div className="contact-detail">
                <div className="contact-detail email-detail">
                  <span className="contact-icon email-icon">✉️</span>
                  <div className="detail-text">
                    <p className="detail-heading">E-mail</p>
                    <p className="detail-content">
                      danutgroup@gmail.com, info@neofarmdairy.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact-detail">
                <span className="contact-icon phone-icon">📞</span>
                <div className="detail-text">
                  <p className="detail-heading">Phone No.</p>
                  <p className="detail-content">+971-52-755 6655</p>
                </div>
              </div>
            </div>

            <div className="contact-detail email-detail">
              <span className="contact-icon email-icon">✉️</span>
              <div className="detail-text">
                <p className="detail-heading">Linked in</p>
                <a
                  href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
                  className="detail-content"
                >
                  https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit
                </a>
              </div>
            </div>
          </div>

          {/* --- Right Column: Contact Form --- */}
          <div className="contact-form-column">
            <form className="contact-form">
              <label htmlFor="firstName">First Name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="E.g. John"
                required
              />

              <label htmlFor="emailAddress">Email Address *</label>
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                placeholder="E.g. john@doe.com"
                required
              />

              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="E.g. +1 3004005000"
              />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Enter your message..."
              ></textarea>

              {/* Note: The 0/180 counter is typically handled by JavaScript */}
              <div className="message-char-count">0/180</div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <main className="hero-section-contact">
        <div className="hero-content-wrapper">
          <div className="hero-image-container-contact">
            {/* Image of Mother and Baby */}
            <img
              src={MotherBabyImage}
              alt="Mother holding baby"
              className="mother-baby-image"
            />
          </div>
          <div className="badge-container">
            {/* The Badge Image */}
            <img
              src={BadgeImage}
              alt="DHA ARA Cholins 12-36 months"
              className="nutrition-badge"
            />
          </div>
        </div>

        {/* Bottom Blue Banner */}
        <div className="hero-blue-banner">
          <h2 className="banner-text">
            Babies older than 12 months should gradually begin eating Feelac
            premium 3
          </h2>
        </div>
      </main>
      <section className="site-footer">
        {/* The angled golden shape is created using CSS pseudo-elements on the main footer class */}

        <div className="footer-content-container">
          {/* --- Column 1: Logo and About/Mission --- */}
          <div className="footer-col about-col">
            <div className="footer-logo">
              {/* Assuming FooterLogo is the Feelac text in golden color */}
              <img src={Logo} alt="Feelac Logo" className="logo-img" />
            </div>
            <p className="footer-mission-text">
              Feelac is committed to using only the finest ingredients and
              adhering to the strictest safety standards for all of our
              products. The quality management system has earned a range of
              standard certifications and is more strict than EU and Codex
              Alimentarius international food requirements. Fully automatic
              production, full inspection, traceable. The health and safety of
              babies are our top priority.
            </p>
            <div className="footer-social-icons">
              <a
                href="https://www.facebook.com/NeofarmFrance"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a
                href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* --- Column 2: Quick View Links --- */}
          <div className="footer-col nav-col">
            <h4 className="footer-heading">Quick View</h4>
            <ul className="footer-nav-links">
              <li>
                <a href="/" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* --- Column 3: Our Products Links --- */}
          <div className="footer-col products-col">
            <h4 className="footer-heading">Our Products</h4>
            <ul className="footer-nav-links">
              <li>
                <a href="/products/basic" className="active">
                  Feelac Basic
                </a>
              </li>
              <li>
                <a href="/products/premium">Feelac Premium</a>
              </li>
              <li>
                <a href="/products/lf">Feelac -LF</a>
              </li>
            </ul>
          </div>
        </div>

        {/* --- Copyright Bar --- */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            Copyright © 2025 Feelac. Powered By Feelac.
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
