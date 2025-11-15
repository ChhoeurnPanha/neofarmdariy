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
import banner from "../assets/Banner_About.png";
import about_img from "../assets/About_image.png";

const About = () => {
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
      <section className="banner-about">
        <img src={banner} alt="" />
      </section>
      <section className="detail-about">
        <div className="detail-handing">
          <h2>ABOUT US</h2>
          <h4>Premium Formula for a Healthy Childhood</h4>
          <p>
            Neofarm combines years of baby care with scientific research and
            expertise to benefit the children. <br />
            The French meadows have plenty of rain and sunshine, which promotes
            the growth of grassland and fodder crops. The annual sunshine
            exceeds 2,000 hours; the annual grazing is up to 270 days; the
            pastures follow low-density natural grazing, with an average of 62
            cows per pasture; France Dairy farmers are generally passed down
            through families, and they treat milk like children, only producing
            high-quality milk with soy free formula.
          </p>

          <p>
            We are always aiming to enhance our offers. Whether it’s our
            products for babies, and toddlers, or educating parents, we’ve got
            you covered. When it comes to making an impact on the field of early
            life nutrition, we are always trying hard to do effectively.
          </p>
        </div>
        <div className="detail-img">
          <img src={about_img} alt="" />
        </div>
      </section>
      <section class="vision-and-care-section">
        <div class="container">
          <div class="content-column">
            <div class="heading-box">
              <h3 class="heading-text">BRAND VISION</h3>
            </div>
            <div class="content-text">
              <p>
                Our goal is to help babies live healthier lives. We believe that
                nurturing a child's metabolism and immune system effectively
                over the first 1,000 days is important to prepare them for any
                environmental changes that may affect their health. Visit our
                partners, <strong>shoes</strong> – leaders in fashionable
                footwear!
              </p>
              <p>
                Individual effort begins with safety, and our employees receive
                the training they need to succeed in their duties in a safe
                manner while bringing high-quality products to market.
              </p>
            </div>
          </div>

          <div class="content-column">
            <div class="heading-box">
              <h3 class="heading-text">COMMITTED TO CARE</h3>
            </div>
            <div class="content-text">
              <p>
                Our commitment to quality and compliance provides consumers with
                safe, effective, and economical products on which they can rely
                and trust.
              </p>
              <p>
                The quality management system is more strict than international
                food standards (Codex Alimentarius) and EU requirements, and it
                has received several standard certifications. Fully automatic
                production, complete inspection, and traceability:
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="why-feelac-section">
        <h2 class="section-title">Why Feelac?</h2>
        <div class="container">
          <div class="feature-grid">
            <div class="feature-item">
              <span className="icon">
                <FaCheck className="check-icon-svg" />
              </span>
              <h3 class="feature-title">EFFECTIVE FORMULATION</h3>
              <p>
                Feelac is a baby formula created in France with all essential
                ingredients and organic cows' milk sourced. Developed by a team
                with more than a decade of industry expertise.
              </p>
            </div>

            <div class="feature-item">
              <span className="icon">
                <FaCheck className="check-icon-svg" />
              </span>
              <h3 class="feature-title">THOUGHTFUL INGREDIENTS</h3>
              <p>
                We provide a variety of Protein and Nutritional formulas to meet
                the ever-changing demands of the food and nutrition sector and
                its consumers.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="image-text-banner">
        <div class="banner-content">
          <h1>A proper nutrition can change your baby’s life</h1>
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

export default About;
