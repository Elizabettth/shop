import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__sign">
        <h3 className="footer__sign-title">Signup</h3>
        <form className="footer__form">
          <input className="footer__input" type="email" placeholder="enter@youremail.com" />
        </form>
        {/* <p className="">Call 1.844.335.3510 HOURS OF OPERATION: Phone, Email: 9AM – 8PM EST 6AM – 5PM PST Live Chat: 11am – 8pm EST 8am – 5pm PST</p> */}
      </div>
      <div className="footer__copy-right">©2021 NYX PROFESSIONAL MAKEUP La Casa de Papel ™/© Netflix. Used with permission.</div>
    </footer>
  );
};

export default Footer;
