import React from "react";
import "./index.css";
import Group85Icon from "../assets/Group 85.svg";
import Group86Icon from "../assets/Group 86.svg";
import Group87Icon from "../assets/Group 87.svg";
import Group88Icon from "../assets/Group 88.svg";

function Social() {
  return (
    <footer className="footer">
      <div className="social-icons-container">
        <a href="https://www.facebook.com">
          <img src={Group85Icon} alt="Facebook" />
        </a>
        <a href="https://www.twitter.com">
          <img src={Group86Icon} alt="Twitter" />
        </a>
        <a href="https://www.instagram.com">
          <img src={Group87Icon} alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com">
          <img src={Group88Icon} alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
}

export default Social;
