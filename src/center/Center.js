import React from "react";
import "../center/cent.css";
import my from "../center/my-pic2.png";
// import { MoveDown } from "lucide-react";
// import { Link } from 'react-router-dom';

function Center() {
  return (
    <div className="main">
      <div className="left-main">
        <p>
          MD <br /> Swaley
        </p>
        <a href="#">Instagram</a>
        <a href="#" style={{ border: "none" }}>
          Linkedln
        </a>
        <br />
        <a href="#">Behance</a>
        <a href="#" style={{ border: "none" }}>
          dribbble
        </a>
        <br />
        <button>contact me</button>
      </div>
      <div className="center-main">
        <svg
          id="sw-js-blob-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <defs>
            {" "}
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              {" "}
              <stop
                id="stop1"
                stop-color="rgba(212.111, 68.139, 0, 1)"
                offset="0%"
              ></stop>
              <stop
                id="stop2"
                stop-color="rgba(208.013, 150.407, 55.321, 1)"
                offset="100%"
              ></stop>{" "}
            </linearGradient>{" "}
          </defs>
          <mask id="mask1" mask-type="alpha">
          <path
            fill="url(#sw-gradient)"
            d="M24.6,-28.2C31.6,-23.5,36.7,-15.4,38.1,-6.8C39.5,1.7,37,10.9,32.7,19.5C28.4,28.1,22.3,36.2,14,39.6C5.8,43.1,-4.5,41.9,-14.3,38.6C-24.1,35.3,-33.4,30,-38.2,21.9C-43,13.8,-43.4,3.1,-41.1,-6.7C-38.7,-16.5,-33.6,-25.3,-26.3,-29.9C-19,-34.6,-9.5,-35.1,-0.4,-34.7C8.8,-34.3,17.6,-32.9,24.6,-28.2Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            stroke-width="0"
            style={{transition: "all 0.3s ease 0s;"}}
            stroke="url(#sw-gradient)"
          ></path>{" "}

          </mask>
          <g mask="url(#mask1)">
          <path
            fill="url(#sw-gradient)"
            d="M24.6,-28.2C31.6,-23.5,36.7,-15.4,38.1,-6.8C39.5,1.7,37,10.9,32.7,19.5C28.4,28.1,22.3,36.2,14,39.6C5.8,43.1,-4.5,41.9,-14.3,38.6C-24.1,35.3,-33.4,30,-38.2,21.9C-43,13.8,-43.4,3.1,-41.1,-6.7C-38.7,-16.5,-33.6,-25.3,-26.3,-29.9C-19,-34.6,-9.5,-35.1,-0.4,-34.7C8.8,-34.3,17.6,-32.9,24.6,-28.2Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            stroke-width="0"
            style={{transition: "all 0.3s ease 0s;"}}
            stroke="url(#sw-gradient)"
          ></path>{" "}
           <image href={my} width="100%" height="100%" style={{transform:"scale(1,1)"}} />
          </g>
        </svg>
        
      </div>
      <div className="right-main">
        <div className="inner-right">
        <h1>introduction</h1>
        <p className="intr">Logic Building,<br/>
        Frontend Web<br/> Developer
        </p>
        <p className="pass">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus enim, sed animi labore numquam inventore consectetur.</p>
        {/* <Link to="#">Learn More</Link> */}
        {/* <span className="move-down"><MoveDown/></span> */}
        </div>

      </div>
    </div>
  );
}

export default Center;
