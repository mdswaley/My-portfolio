import React from "react";
import "../navbar/Navbar.css";
import { Twitter, Facebook } from "lucide-react";

function Nav() {
  return (
    <div className="navbar">
      <div className="right">
        <a class="active" href="#">
          <i class="fa fa-fw fa-home"></i>Home
        </a>
        <a href="#section">
          <i class="fa fa-fw fa-search"></i>Service
        </a>
        <a href="#achivem">
          <i class="fa fa-fw fa-envelope"></i>Achivements
        </a>
        <a href="#contact" className="contact">
          <i class="fa fa-fw fa-user"></i>Contact
        </a>
        <div className="logoright">
          <a href="#" style={{ color: "blue", fontSize: "8px" }}>
            <Twitter />
          </a>
          <a href="#">
            <Facebook />
          </a>
        </div>
      </div>
      <div className="left">
        <button href="#">MDS</button>
      </div>
    </div>
  );
}

export default Nav;
