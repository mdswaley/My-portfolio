import { useState, useEffect } from "react";
import React from "react";
import "../Service/ser.css";
import { PenTool, Code, Search, CircleDollarSign } from "lucide-react";

function Ser() {
  const [counters, setCounters] = useState({
    yearsOfExperience: 0,
    satisfiedCustomers: 0,
    designItems: 0,
    clientsServed: 0,
  });

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Set your target scroll position here
    const targetScroll = 500;

    if (scrollTop >= targetScroll) {
      // Update the counters to your desired values
      setCounters((prevCounters) => ({
        yearsOfExperience: Math.min(prevCounters.yearsOfExperience + 1, 2),
        satisfiedCustomers: Math.min(prevCounters.satisfiedCustomers + 1, 10),
        designItems: Math.min(prevCounters.designItems + 1, 40),
        clientsServed: Math.min(prevCounters.clientsServed + 1, 20),
      }));
    } else {
      // Reset counters when the user scrolls up
      setCounters({
        yearsOfExperience: 0,
        satisfiedCustomers: 0,
        designItems: 0,
        clientsServed: 0,
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleScroll();
    }, 200); // Adjust the interval time as needed (in milliseconds)

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="service" id="section">
      <div className="ser-title">
        <h3>service</h3>
        <h2>What I Am Good At</h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu
          <br /> fugiat nulla pariatur. Excepteur sint occaecat cupida non
          proident, sunt in
          <br /> culpa qui officia
        </p>
      </div>
      <div className="ser-lan">
        <div className="design">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
<path d="M 28.1875 0 C 30.9375 6.363281 18.328125 10.292969 17.15625 15.59375 C 16.082031 20.464844 24.648438 26.125 24.65625 26.125 C 23.355469 24.109375 22.398438 22.449219 21.09375 19.3125 C 18.886719 14.007813 34.535156 9.207031 28.1875 0 Z M 36.5625 8.8125 C 36.5625 8.8125 25.5 9.523438 24.9375 16.59375 C 24.6875 19.742188 27.847656 21.398438 27.9375 23.6875 C 28.011719 25.558594 26.0625 27.125 26.0625 27.125 C 26.0625 27.125 29.609375 26.449219 30.71875 23.59375 C 31.949219 20.425781 28.320313 18.285156 28.6875 15.75 C 29.039063 13.324219 36.5625 8.8125 36.5625 8.8125 Z M 19.1875 25.15625 C 19.1875 25.15625 9.0625 25.011719 9.0625 27.875 C 9.0625 30.867188 22.316406 31.089844 31.78125 29.25 C 31.78125 29.25 34.296875 27.519531 34.96875 26.875 C 28.765625 28.140625 14.625 28.28125 14.625 27.1875 C 14.625 26.179688 19.1875 25.15625 19.1875 25.15625 Z M 38.65625 25.15625 C 37.664063 25.234375 36.59375 25.617188 35.625 26.3125 C 37.90625 25.820313 39.84375 27.234375 39.84375 28.84375 C 39.84375 32.46875 34.59375 35.875 34.59375 35.875 C 34.59375 35.875 42.71875 34.953125 42.71875 29 C 42.71875 26.296875 40.839844 24.984375 38.65625 25.15625 Z M 16.75 30.71875 C 15.195313 30.71875 12.875 31.9375 12.875 33.09375 C 12.875 35.417969 24.5625 37.207031 33.21875 33.8125 L 30.21875 31.96875 C 24.351563 33.847656 13.546875 33.234375 16.75 30.71875 Z M 18.1875 35.9375 C 16.058594 35.9375 14.65625 37.222656 14.65625 38.1875 C 14.65625 41.171875 27.371094 41.472656 32.40625 38.4375 L 29.21875 36.40625 C 25.457031 37.996094 16.015625 38.238281 18.1875 35.9375 Z M 11.09375 38.625 C 7.625 38.554688 5.375 40.113281 5.375 41.40625 C 5.375 48.28125 40.875 47.964844 40.875 40.9375 C 40.875 39.769531 39.527344 39.203125 39.03125 38.9375 C 41.933594 45.65625 9.96875 45.121094 9.96875 41.15625 C 9.96875 40.253906 12.320313 39.390625 14.5 39.8125 L 12.65625 38.75 C 12.113281 38.667969 11.589844 38.636719 11.09375 38.625 Z M 44.625 43.25 C 39.226563 48.367188 25.546875 50.222656 11.78125 47.0625 C 25.542969 52.695313 44.558594 49.535156 44.625 43.25 Z"  fill="#dadada"></path>
</svg>
          <h2>Java Programming</h2>
          <p>10 Projects</p>
        </div>
        <div className="web">
          <Code className="code"/>
          <h2>Web Development</h2>
          <p>6 Projects</p>
        </div>
        <div className="search">
          <Search style={{ height: "70px", width: "70px", color: "white" }} />
          <h2>Web Research</h2>
          <p>10 Projects</p>
        </div>
      
      </div>
      <div className="ser-exp">
        <div className="year-exp">
          <p style={{ color: "rgb(212, 212, 81)", fontSize: "37px" }}>
            {counters.yearsOfExperience}+
          </p>
          <p style={{ color: "white", padding: "0" }}>Years of Experience</p>
        </div>
        <div className="sats-cust">
          <p style={{ color: "rgb(212, 212, 81)", fontSize: "37px" }}>
            {counters.satisfiedCustomers}+
          </p>
          <p style={{ color: "white", padding: "0" }}>Satisfied Customers</p>
        </div>
        <div className="design-item">
          <p style={{ color: "rgb(212, 212, 81)", fontSize: "37px" }}>
            {counters.designItems}+
          </p>
          <p style={{ color: "white", padding: "0" }}>Design Items</p>
        </div>
      </div>
    </div>
  );
}

export default Ser;
