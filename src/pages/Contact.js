import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="bodyJudul">
        <h1>Contact</h1>
        <div className="contact">
          <div className="mycontact">
            <p style={{ marginBottom: 40 }}>
              Looking forward to hearing from you
            </p>
            <div className="hubungi">
              <h3>Phone</h3>
              <p>+62 813 8738 0826</p>
            </div>
            <div>
              <h3>Email</h3>
              <p>setiawanaldi504@gmail.com</p>
            </div>
          </div>
          <div className="send">
            <form>
              <div className="name">
                <div className="form">
                  <label>First Name</label>
                  <input />
                </div>
                <div className="form">
                  <label>Last Name</label>
                  <input />
                </div>
              </div>
              <div className="subject">
                <div className="form">
                  <label>Email</label>
                  <input />
                </div>
                <div className="form">
                  <label>Subject</label>
                  <input />
                </div>
              </div>
              <div className="message">
                <div className="form">
                  <label>Message</label>
                  <textarea />
                </div>
                <div className="submit">
                  <Link to="/">submit</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
