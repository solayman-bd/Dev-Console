import React from "react";
import "./Footer.css";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-60 mx-auto row pt-4 pb-1">
      <div className="col-12 col-md-4 d-flex align-content-between flex-wrap">
        <div className="w-100">
          <h6>Product</h6>
          <p>JioGlass</p>
        </div>
        <div className="mt-4">
          <h6>Consumer </h6>
          <p>Consumer Application</p>
        </div>
        <div className="mt-4">
          <h6>Legal</h6>
          <p>Terms and Conditions</p>
        </div>
      </div>
      <div className="col-12 col-md-4 d-flex align-content-between flex-wrap">
        <div>
          <h6>Developer</h6>
          <p>JioGlass Developers Programme</p>
        </div>
        <div className="mt-4">
          <h6>Career </h6>
          <p>Explore Open Positions</p>
        </div>
        <div className="mt-4">
          <h6>Legal</h6>
          <p>Terms and Conditions</p>
        </div>
      </div>
      <div className="col-12 col-md-4 d-flex align-content-between flex-wrap">
        <div>
          <h6>Contact</h6>
          <p>
            Tesseract Imagine Ltd. <br />
            Corporate Office : T22, Reliance Corporate Park, Navi
            <br />
            Mumbai, India - 400701
            <br />
            <a href="mailto:info@tesseract.in">Mail: info@tesseract.in</a>
          </p>
        </div>
        <div>
          <h5>Follow Us</h5>
          <p className="social-icon">
            <FaFacebookSquare className="me-2 social-icon" />
            <FaTwitterSquare className="mx-2 social-icon" />
            <FaLinkedin className="mx-2 social-icon" />
            <FaInstagram className="mx-2 social-icon" />
            <FaYoutube className="mx-2 social-icon" />
          </p>
        </div>
      </div>

      <p className="pt-3 mx-auto">
        Copyright &#169; 2021 Tesseract Imaging Limited. All right reserved
      </p>
    </footer>
  );
};

export default Footer;
