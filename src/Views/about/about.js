import React from "react";
import { Button } from "react-bootstrap";
import "./about.css";

const About = () => {
  return (
    <div className="abCont">
      <div className="descP">
        <p className="words">
          A private firm providing excellent accounting and financial services
          for over 30 years.
        </p>
        <Button
            variant="primary"
            onClick={() => (window.location = "mailto:wram@wassermanramsay.ca")}
            className="button"
          >
            
            Contact
          </Button>{" "}
      </div>
    </div>
  );
};

export default About;
