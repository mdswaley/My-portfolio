import React from "react";
import "../Contact/cont.css";
import { Mail,Phone,Linkedin } from "lucide-react";
function Contact() {
  return (
    <div className="cont" id="contact">
      <div className="cont-title">
        <h3>CONTACT US</h3>
        <h1>Ways To Contact Me</h1>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu
          <br /> fugiat nulla pariatur. Excepteur sint occaecat cupida non
          proident, sunt in
          <br /> culpa qui officia
        </p>
      </div>
      <div className="cont-coll">
        <div className="container">
          <div className="email">
            <div className="email-left">
              <a href="">
                <Mail style={{color:"white"}}/>
              </a>
            </div>
            <div className="email-right">
              <a href="">mdswaley075@gmail.com</a>
            </div>
          </div>
          <div className="number">
          <div className="number-left">
              <a href="">
                <Phone style={{color:"white"}}/>
              </a>
            </div>
            <div className="number-right">
              <a href="">+91 7608045313</a>
            </div>
          </div>
          <div className="linkedin">
            <div className="linkedin-left">
            <a href="https://www.linkedin.com/in/md-swaley-034a1126b/">
                <Linkedin style={{color:"white"}}/>
              </a>
            </div>
            <div className="linkedin-right">
            <a href="https://www.linkedin.com/in/md-swaley-034a1126b/">Md Swaley</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
