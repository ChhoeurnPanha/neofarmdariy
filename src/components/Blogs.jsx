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

const Blogs = () => {
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
          <h1>BLOGS</h1>
        </div>
      </section>
      <section className="content-Found">
        <h1>No Posts Found!</h1>
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

export default Blogs;
