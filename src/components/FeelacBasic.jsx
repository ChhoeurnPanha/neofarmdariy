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
import banner_basic from "../assets/Banner_basic.png";
import Neofarm1 from "../assets/Feelac_pre1_1.jpeg";
import Neofarm2 from "../assets/Feelac_pre2_1.jpeg";
import Neofarm3 from "../assets/Feelac_pre3_1.jpeg";

const FeelacBasic = () => {
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
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/Feelac-Premium">Neofarm</Link>
                  </li>
                  <li>
                    <Link to="/Feelac-basic">Neofarm Premium+</Link>
                  </li>
                </ul>
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
      <section className="banner-about">
        <img src={banner_basic} alt="" />
      </section>
      <h1 className="title-basic">Our Premium Plus Products</h1>
      <section className="title-feelac1">
        <div className="container-feelac">
          <div className="detail-feelac">
            <h2>
              Neofarm Premium+ Infant Formula 1 <br />
              <span>
                Infant formula milk powder - GOS & FOS, DHA & ARA, HMO 2'FL,
                Nucleotide 0-6 months
                <p>400gm , 800gm</p>
              </span>
            </h2>
            <hr />
            <h5>Description</h5>
            <p>
              <b>Neofarm Premium+ Infant Formula 1 </b>
              products check all the nutritional boxes for what your child
              requires to thrive. The brand offers a wide range of alternatives,
              including those designed for sensitive stomachs, organic formulas,
              and everything in between. This premium formula contains the
              nutrients your baby requires while also promoting brain and eye
              development. <br />
              Natural grass-fed milk source refers to the milk source produced
              by natural fresh grass as feed and cows raised in natural grazing
              method. Because of the very strict requirements of this feeding
              style, this milk source is valuable and scarce, but it also has
              more nutrition and superior quality.
            </p>
            <hr />
            <h5>Benefits</h5>
            <ul>
              <li>
                DHA promotes specific learning outcomes, visual acuity, and
                overall brain development in newborns.
              </li>
              <li> Better absorption of key brain nutrients.</li>
              <li>
                Delivers the necessary nutrition for physical and mental
                development.
              </li>
              <li>
                Calcium is a mineral that the body needs in order to produce
                strong bones and teeth
              </li>
              <li>
                It also promotes proper neuron, muscle, and cardiac function.
              </li>
              <li> Soy Free Formula</li>
            </ul>
          </div>
          <div className="slider-feelac">
            <img src={Neofarm1} alt="" />
          </div>
        </div>
        <div className="product-detail">
          <div className="cart-product">
            <div className="card-detail">
              <h5>List of Ingredient </h5>
              <p>
                Enriched Fat Whey Powder [Demineralised Whey, Vegetable Oils
                (Sunflowerseed Oil, Rapeseed Oil, Coconut Oil), Cream, Sodium
                L-Ascorbate, Mixed Tocopherol Concentrate, Ascorbyl Palmitate],
                Whole Milk Powder, Polyfructose, 2’-fucosyllactose(2'-FL),
                Galacto-oligosaccharide, Fructo-oligosaccharide, Arachidonic
                Acid Oil, Docosahexaenoic Acid Oil, Choline,Nucleotides
                (Cytidine-5’monophosphate Disodium Salt, Disodium 5'-uridylate,
                Adenosine-5'-monophosphoric Acid, Disodium 5'-inosinate,
                Disodium 5'-guanylate), Inositol,L-Carnitine, Taurine, Lutein
              </p>
            </div>
            <div className="card-detail">
              <h5>Minerals</h5>
              <p>
                Tricalcium Phosphate, Calcium Carbonate, Potassium Chloride,
                Sodium Chloride, Magnesium Sulphate, Ferrous Sulphate, Zinc
                Lactate, Copper Sulphate, Manganese Sulphate, Potassium Iodate,
                Sodium Selenite
              </p>
            </div>
            <div className="card-detail">
              <h5>Vitamins</h5>
              <p>
                Sodium L-Ascorbate, Dl-α-tocopheryl Acetate, Niacinamide,
                D-Calcium Pantothenate, Thiamine Hydrochloride, Retinyl Acetate,
                Pyridoxine Hydrochloride, Folic Acid, Phytonadione, D-Biotin,
                Cholecalciferol, Cyanocobalamin, Ascorbyl Palmitate, Riboflavin.
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className="title-feelac1">
        <div className="container-feelac">
          <div className="slider-feelac">
            <img src={Neofarm2} alt="" />
          </div>
          <div className="detail-feelac">
            <h2>
              Neofarm Premium+ Follow on formula 2 <br />
              <span>
                <b>Neofarm Premium+ Follow on formula 2</b> Milk powder - GOS &
                FOS, DHA & ARA, HMO 2'FL, Nucleotide, 6-12 months
                <p>400gm, 800gm</p>
              </span>
            </h2>
            <hr />
            <h5>Description</h5>
            <p>
              <b>Neofarm Premium+ Follow on formula 2 </b> products check all
              the nutritional boxes for what your child requires to thrive. The
              brand offers a wide range of alternatives, including those
              designed for sensitive stomachs, organic formulas, and everything
              in between. This premium formula contains the nutrients your baby
              requires while also promoting brain and eye development. <br />
              Natural grass-fed milk source refers to the milk source produced
              by natural fresh grass as feed and cows raised in natural grazing
              method. Because of the very strict requirements of this feeding
              style, this milk source is valuable and scarce, but it also has
              more nutrition and superior quality.
            </p>
            <hr />
            <h5>Benefits</h5>
            <ul>
              <li>
                Expert-recommended DHA Fatty acid that contributes to the
                maintenance of normal brain function.
              </li>
              <li> Naturally active probiotics</li>
              <li>
                Delivers the necessary nutrition for physical and mental
                development.
              </li>
              <li>
                Combining our unique blend of ingredients with our advanced
                structured system.
              </li>
              <li> Soy Free Formula</li>
            </ul>
          </div>
        </div>
        <div className="product-detail">
          <div className="cart-product">
            <div className="card-detail">
              <h5>List of Ingredient </h5>
              <p>
                Enriched Fat Whey Powder [Demineralised Whey, Vegetable Oils
                (Sunflowerseed Oil, Rapeseed Oil, Coconut Oil), Sodium
                L-Ascorbate, Mixed Tocopherol Concentrate, Ascorbyl Palmitate],
                Whole Milk Powder, Polyfructose, 2’-fucosyllactose(2'-FL),
                Galacto-oligosacchride (GOS), Fructo-oligosaccharide(FOS),
                Arachidonic Acid Oil, Docosahexaenoic Acid Oil, Choline,
                Nucleotides (Cytidine-5’monophosphate Disodium Salt, Disodium
                5'-uridylate, Adenosine-5'-monophosphoric Acid, Disodium
                5'-inosinate, Disodium 5'-guanylate), Lutein,Taurine,
                Inositol,L-Carnitine
              </p>
            </div>
            <div className="card-detail">
              <h5>Minerals</h5>
              <p>
                : Calcium Carbonate, Tricalcium Phosphate, Potassium Chloride,
                Sodium Chloride, Magnesium Sulphate, Ferrous Sulphate, Zinc
                Lactate, Copper Sulphate, Manganese Sulphate, Potassium Iodate,
                Sodium Selenite
              </p>
            </div>
            <div className="card-detail">
              <h5>Vitamins</h5>
              <p>
                Sodium L-Ascorbate, Dl-α-tocopheryl Acetate, Niacinamide,
                D-Calcium Pantothenate, Thiamine Hydrochloride, Retinyl Acetate,
                Pyridoxine Hydrochloride, Folic Acid, Phytonadione, D-Biotin,
                Cholecalciferol, Cyanocobalamin, Riboflavin.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="title-feelac1">
        <div className="container-feelac">
          <div className="slider-feelac">
            <img src={Neofarm3} alt="" />
          </div>
          <div className="detail-feelac">
            <h2>
              Neofarm Premium+ Growing up formula 3 <br />
              <span>
                Growing up formula milk powder - GOS & FOS, DHA & ARA, HMO 2'FL,
                Nucleotide, 12- 36 months
                <p>400gm , 800gm</p>
              </span>
            </h2>
            <hr />
            <h5>Description</h5>
            <p>
              <b>Neofarm Premium+ Growing up formula 3 </b>is an infant formula
              based on cow’s milk for children from 12 to 36 months. A unique
              formula that boosts immunity. New and enhanced iron, zinc, and
              calcium formula. Clinically proven results to boost immunity.
              Better absorption of optimal brain nutrients. <br /> Natural
              grass-fed milk source refers to the milk source produced by
              natural fresh grass as feed and cows raised in natural grazing
              method. Because of the very strict requirements of this feeding
              style, this milk source is valuable and scarce, but it also has
              more nutrition and superior quality.
            </p>
            <hr />
            <h5>Benefits</h5>
            <ul>
              <li> Supports your baby’s healthy development.</li>
              <li> Rich in Iron, Zinc, Calcium, Vitamins and Minerals</li>
              <li> Easy to digest</li>
              <li> Ideal for bottle feeding </li>
              <li> Soy Free Formula</li>
            </ul>
          </div>
        </div>
        <div className="product-detail">
          <div className="cart-product">
            <div className="card-detail">
              <h5>List of Ingredient </h5>
              <p>
                Enriched Fat Whey Powder [Demineralised Whey, Vegetable Oils
                (Sunflowerseed Oil, Rapeseed Oil, Coconut Oil), Sodium
                L-Ascorbate, Mixed Tocopherol Concentrate, Ascorbyl Palmitate],
                Whole Milk Powder, Skimmed Milk Powder, Polyfructose,
                2’-fucosyllactose(2'-FL), Galacto-oligosaccharide (GOS),
                Fructo-oligosaccharide(FOS), Docosahexaenoic Acid Oil,
                Arachidonic Acid Oil, Choline, Nucleotides
                (Cytidine-5’monophosphate Disodium Salt, Disodium 5'-uridylate,
                Adenosine-5'-monophosphoric Acid, Disodium 5'-inosinate,
                Disodium 5'-guanylate), Lutein,Taurine, Inositol, L-Carnitine
              </p>
            </div>
            <div className="card-detail">
              <h5>Minerals</h5>
              <p>
                Calcium Carbonate, Tricalcium Phosphate, Potassium Chloride,
                Sodium Chloride, Magnesium Sulphate, Ferrous Sulphate, Zinc
                Lactate, Copper Sulphate, Manganese Sulphate, Potassium Iodate,
                Sodium Selenite
              </p>
            </div>
            <div className="card-detail">
              <h5>Vitamins</h5>
              <p>
                Sodium L-Ascorbate, Dl-α-tocopheryl Acetate, Niacinamide,
                D-Calcium Pantothenate, Thiamine Hydrochloride, Retinyl Acetate,
                Pyridoxine Hydrochloride, Folic Acid, Phytonadione, D-Biotin,
                Cholecalciferol, Cyanocobalamin, Riboflavin.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="image-text-banner">
        <div class="banner-content">
          <h1>Together We can Bring More Happiness into the World.</h1>
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

export default FeelacBasic;
