import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets';
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            At DelishDeliver, we believe in delivering more than just meals; we deliver love, joy, and convenience right to your doorstep. Our mission is to bring you a delightful culinary experience with every order, carefully prepared by top chefs and delivered with the utmost care.
          </p>
          <p>Let us bring happiness to your table, one delicious bite at a time.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-234-567-8901</li>
            <li>contact@delishdeliver.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © DelishDeliver.com - All Right Reserved</p>
    </div>
  );
}

export default Footer
