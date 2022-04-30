import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import logos from "../../Assets/logos.png";

import "./footer.css";

const Footers = () => {
  const [display, setDisplay] = useState("none");

  const listenScrollEvent = () => {
    window.scrollY > 100 ? setDisplay("inline") : setDisplay("none");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <footer
      className="footer"
      id="footerId"
      style={{
        height: "2rem",
        display: display,
        transition: "all 1s",
      }}
    >
      <div className="footer-info">
        <img className="mck" src={logos}  alt="mck" />
        Designed by Mckenna Ramsay
      </div>
      <div className="social-container">
        <ul className="icons">
          <li className="ico">
            <a
              href="https://www.linkedin.com/in/dranujjoshi/"
              className="social"
            >
              <FontAwesomeIcon className="fa" icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footers;
