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
import MotherBabyImage from "../assets/Screenshot_2023-12-21_200520-removebg-preview.png";
import BadgeImage from "../assets/Group-5730.png";
import Neofarm1 from "../assets/Neofarm Normal1.png";
import Neofarm2 from "../assets/Neofarm 2.png";
import Neofarm3 from "../assets/Neofarm Pre3.png";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <header className="header">
        <div className="header-top-bar">
          <div className="top-bar-left">
            <button className="request-quote-btn">
              <Link className="Quote" to="/contact">
                Request A Quote
              </Link>
            </button>
            <span className="contact-info">| Email: info@feelac.net</span>
          </div>
          <div className="top-bar-right">
            <span className="contact-info">
              Customer Care: +971 52 755 6655 |
            </span>
            <span className="follow-us">Follow us:</span>
            <div className="social-icons">
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
            <li
              className={`nav-dropdown-item ${isDropdownOpen ? "active" : ""}`}
            >
              <a onClick={toggleDropdown} className="dropdown-toggle" href="#">
                Products ▼
              </a>
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
      <main className="hero-section">
        <div className="hero-content-wrapper">
          <div className="hero-image-container">
            {/* Image of Mother and Baby */}
            <img
              src={MotherBabyImage}
              alt="Mother holding baby"
              className="mother-baby-image"
            />
          </div>

          <div className="hero-text-container">
            <h1 className="hero-heading">NUTRITION.</h1>
            <h1 className="hero-heading1">
              Strengthening the baby's immunity with each step of nutrition.
            </h1>
            <p className="hero-text">
              Baby milk formulas are an easy and quick way to guarantee your
              baby receives the nutrition he or she requires. They are not a
              substitute for mother’s milk, but they can be a nutritious
              addition.
            </p>
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
            Selection of high-quality French milk sources.
          </h2>
        </div>
      </main>
      <section className="nutritional-functions-section">
        <div className="container1">
          <h2 className="section-title1">
            Combination of Nutritional Functions
          </h2>

          <p className="description-text">
            The composition of ingredients is simple, no sucrose and flavours
            are added to the 1st stage/2nd stage, and it is rich in 13 kinds of
            vitamins, 12 kinds of minerals, omega-3 fatty acids (alpha-linolenic
            acid), and omega-6 fatty acids (linoleic acid) to help babies
            comprehensively grow healthy. <br />
            <br /> Pure lactose formula, high whey protein content, natural
            affinity, easy to digest and absorb. This work is a beautiful
            tribute to traditional culture.
          </p>

          <ul className="function-list">
            <li className="function-item">
              <span className="icon">
                <FaCheck className="check-icon-svg" />
              </span>
              <div className="function-details">
                <p className="function-heading">
                  Vitamin A + Vitamin B2 + Zinc
                </p>
                <p className="function-benefit">
                  Helps the health of the skin and mucous membranes, and
                  protects the baby’s tender skin.
                </p>
              </div>
            </li>

            <li className="function-item">
              <span className="icon">
                <FaCheck className="check-icon-svg" />
              </span>
              <div className="function-details">
                <p className="function-heading">Vitamin C + Iron</p>
                <p className="function-benefit">
                  Helps in the formation of red blood cells.
                </p>
              </div>
            </li>

            {/* Placeholder for the function that was cut off in the image */}
            <li className="function-item">
              <span className="icon">
                <FaCheck className="check-icon-svg" />
              </span>
              <div className="function-details">
                <p className="function-heading">
                  Vitamin D + Calcium + Phosphorus + Magnesium
                </p>
                <p className="function-benefit">
                  Contributes to the health of bones and teeth.
                </p>
              </div>
            </li>

            {/* Placeholder for potential additional functions */}
            <li className="function-item">
              <span className="icon">
                <FaCheck className="check-icon-svg" />
              </span>
              <div className="function-details">
                <p className="function-heading">GOS, FOS, and polyfructose</p>
                <p className="function-benefit">
                  Promote the growth of beneficial gut bacteria. They are
                  commonly used in combination in supplements and infant
                  formulas to support digestive and overall health.
                </p>
              </div>
            </li>
            <li className="function-item">
              <span className="icon">
                <FaCheck className="check-icon-svg" />
              </span>
              <div className="function-details">
                <p className="function-heading">HMO 2FL</p>
                <p className="function-benefit">
                  That is the most abundant type in breast milk and acts as a
                  prebiotic.
                </p>
              </div>
            </li>
            <li className="function-item">
              <span className="icon">
                <FaCheck className="check-icon-svg" />
              </span>
              <div className="function-details">
                <p className="function-heading"> Nucleotide </p>
                <p className="function-benefit">
                  The enzyme is crucial for nucleotide metabolism and its levels
                  are often measured in blood tests to evaluate liver function,
                  especially in cases of suspected biliary obstruction. The five
                  nucleotide types are the building blocks of DNA and RNA.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="video">
        <video
          src="https://feelac.net/wp-content/uploads/2022/08/Feelac_Ad-1.mp4"
          controls
          autoplay
          loop
          playsinline
        ></video>
      </section>
      <section className="product-cards-section">
        <div className="product-card-container">
          {/* --- Card 1: BASIC --- */}
          <div className="product-card">
            <h3 className="card-heading">
              Feelac Formula <span className="card-subtitle-basic">BASIC</span>
            </h3>
            <p className="card-description">
              Infant Formula Milk Powder for 0-6 Months
            </p>
            <div className="card-image-wrapper basic-bg">
              {/* Replace with your actual image source */}
              <img
                src={Neofarm1}
                alt="Feelac Basic Formula Can"
                className="product-image"
              />
            </div>
          </div>

          {/* --- Card 2: PREMIUM --- */}
          <div className="product-card">
            <h3 className="card-heading">
              Feelac Formula{" "}
              <span className="card-subtitle-premium">PREMIUM</span>
            </h3>
            <p className="card-description">
              Infant formula milk powder – Cholins, DHA, ARA, 0-6 months
            </p>
            <div className="card-image-wrapper premium-bg">
              {/* Replace with your actual image source */}
              <img
                src={Neofarm2}
                alt="Feelac Premium Formula Can"
                className="product-image"
              />
            </div>
          </div>

          {/* --- Card 3: LACTOSE-FREE --- */}
          <div className="product-card">
            <h3 className="card-heading">
              Feelac Formula{" "}
              <span className="card-subtitle-lactose-free">LACTOSE-FREE</span>
            </h3>
            <p className="card-description">
              Lactose-free formula powder for infants from 0-12 months
            </p>
            <div className="card-image-wrapper lactose-free-bg">
              {/* Replace with your actual image source */}
              <img
                src={Neofarm3}
                alt="Feelac Lactose-Free Formula Can"
                className="product-image"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="blog-section">
        <div className="blog-header-container">
          <p className="blog-subheader">Blog And News</p>
          <h2 className="blog-main-title">Tips and Tricks for Parents</h2>
        </div>

        {/* Blog Content Area */}
        <h2 className="Not">Not Found</h2>
      </section>
      <section className="contact-section">
        <div className="contact-container">
          {/* --- Left Column: Contact Information --- */}
          <div className="contact-info-column">
            <p className="contact-info-subheader">Our Contact</p>
            <h2 className="contact-info-title">Get In Touch</h2>

            <div className="contact-detail-group">
              <div className="contact-detail">
                <span className="contact-icon address-icon">📍</span>
                <div className="detail-text">
                  <p className="detail-heading">Address</p>
                  <p className="detail-content">
                    No.1 Puhuawei Street, Tangyuan County, Jiamusi City,
                    Hellongjiang Province
                  </p>
                </div>
              </div>

              <div className="contact-detail">
                <span className="contact-icon phone-icon">📞</span>
                <div className="detail-text">
                  <p className="detail-heading">Phone No.</p>
                  <p className="detail-content">+971-52 755 6655</p>
                </div>
              </div>
            </div>

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

export default Home;
