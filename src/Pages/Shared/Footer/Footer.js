import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="footer-area">
      <div className="row mx-3 py-3 ">
        <div className="footer-menu footer-block footer-block__1 col-md-3 mb-xs-30">
          <div className="title-block">CORPORATE INFO</div>

          <ul>
            <li>
              <a href="/">Who We Are ?</a>
            </li>

            <li>
              <a href="/">Corporate Responsibility</a>
            </li>

            <li>
              <a href="/">Business Laws</a>
            </li>

            <li>
              <a href="/">Careers</a>
            </li>

            <li>
              <a href="/">Privacy Policy</a>
            </li>

            <li>
              <a href="/">Terms of Use</a>
            </li>
          </ul>
        </div>

        <div className="footer-menu footer-block footer-block__2 col-md-3 mb-xs-30">
          <div className="title-block">MY ACCOUNT</div>

          <ul>
            <li>
              <a href="/">Sitemap</a>
            </li>

            <li>
              <a href="/">Privacy Policy</a>
            </li>

            <li>
              <a href="/">My Account</a>
            </li>

            <li>
              <a href="/">Advanced Search</a>
            </li>

            <li>
              <a href="/">Contact Us</a>
            </li>

            <li>
              <a href="/">My Wishlist</a>
            </li>
          </ul>
        </div>

        <div className=" footer-block  col-md-3">
          <div className="title-block">FOLLOW US</div>
          <div className="social-icons">
            <ul className="d-flex justify-content-evenly p-0">
              <li>
                <a href="https://facebook.com/" title="Facebook">
                  <FaFacebookF size={20} style={{ color: "#2d3436" }} />
                </a>
              </li>

              <li>
                <a href="https://twitter.com/" title="Twitter">
                  <FaTwitter size={20} style={{ color: "#2d3436" }} />
                </a>
              </li>

              <li>
                <a href="http://instagram.com/" title="Instagram">
                  <FaInstagram size={20} style={{ color: "#2d3436" }} />
                </a>
              </li>

              <li>
                <a href="https://www.youtube.com/" title="YouTube">
                  <FaYoutube size={20} style={{ color: "#2d3436" }} />
                </a>
              </li>
            </ul>
          </div>
          <div className="title-block mt-15">opening hours</div>
          Monday To Friday : 8.00 AM - 8.00 PM
          <br />
          Satuday Sunday : 7.30 AM - 9.30 PM
        </div>

        <div className=" footer-block  col-md-3">
          <div className="title-block">Payment Methods</div>
          <img
            style={{ maxWidth: "100%" }}
            src="https://i.ibb.co/p0XBNtC/ssl-commerce-1d268dce.png"
            alt=""
          />
        </div>
      </div>
      <p className="py-2">
        Copyright © {year}{" "}
        <span className="fw-bold text-primary">Gadget-World</span>. All rights
        reserved.
      </p>
    </div>
  );
};

export default Footer;
