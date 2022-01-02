import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <div className="kaki">
      <hr />
      <div className="footer">
        <div className="phone">
          <h3>Phone</h3>
          <p>+62 813 8738 0826</p>
        </div>
        <div className="email">
          <h3>Email</h3>
          <p>setiawanaldi504@gmail.com</p>
        </div>
        <div className="follow">
          <h3>Follow Me</h3>
          <div className="footer_img">
            <i class="fa fa-linkedin"></i>
            <i class="fa fa-twitter"></i>
          </div>
        </div>
        <div className="footer_last">
          <p>
            © 2022 By Aldi Setiawan. <br />
            Sabar Subur Kalo Gamau <br />
            Sabar Dikubur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
