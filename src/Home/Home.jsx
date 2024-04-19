import React, { useState } from "react";
import "../index.css";
import AdovelopersLogo from "../assets/Adovelopers.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import ImageRight from "../nakaupo/Image"; 
import Group2Image from "../assets/Group 2.png";

function App() {
  const [isOpenHome, setIsOpenHome] = useState(false);
  const [isOpenServices, setIsOpenServices] = useState(false);
  const [isOpenAbout, setIsOpenAbout] = useState(false);
  const [isOpenTeam, setIsOpenTeam] = useState(false);
  
  const toggleDropdownHome = () => {
    setIsOpenHome(!isOpenHome);
  };
  const toggleDropdownServices = () => {
    setIsOpenServices(!isOpenServices);
  };

  const toggleDropdownAbout = () => {
    setIsOpenAbout(!isOpenAbout);
  };

  const toggleDropdownTeam = () => {
    setIsOpenTeam(!isOpenTeam);
  };

  return (
    <div>
      <div className="background-container">
        <div className="top-section">
          <div className="container">
            <header>
              <div className="logo-container">
                <img src={AdovelopersLogo} alt="Adovelopers Logo" className="logo" />
                <span className="company-name">Adovelopers</span>
              </div>
              <nav>
                <ul>
                  <li className="dropdown">
                    <a href="#" onClick={toggleDropdownHome}>
                      Home
                      <FontAwesomeIcon icon={isOpenHome ? faAngleUp : faAngleDown} />
                    </a>
                    {isOpenHome && (
                      <ul className="dropdown-menu">
                        <li><a href="#">pogi</a></li>
                        <li><a href="#">pogi</a></li>
                        <li><a href="#">pogi</a></li>
                      </ul>
                    )}
                  </li>
                  <li className="dropdown">
                    <a href="#" onClick={toggleDropdownServices}>
                      Service
                      <FontAwesomeIcon icon={isOpenServices ? faAngleUp : faAngleDown} />
                    </a>
                    {isOpenServices && (
                      <ul className="dropdown-menu">
                        <li><a href="#"></a>pogi</li>
                      </ul>
                    )}
                  </li>
                  <li className="dropdown">
                    <a href="#" onClick={toggleDropdownAbout}>
                      About
                      <FontAwesomeIcon icon={isOpenAbout ? faAngleUp : faAngleDown} />
                    </a>
                    {isOpenAbout && (
                      <ul className="dropdown-menu">
                        <li><a href="#"></a></li>
                       
                      </ul>
                    )}
                  </li>
                  <li className="dropdown">
                    <a href="#" onClick={toggleDropdownTeam}>
                      Our Team
                      <FontAwesomeIcon icon={isOpenTeam ? faAngleUp : faAngleDown} />
                    </a>
                    {isOpenTeam && (
                      <ul className="dropdown-menu">
                        <li><a href="#">pogi</a></li>
                      </ul>
                    )}
                  </li>
                  <li><a href="/contact">Contact Us</a></li>
                </ul>
                <div className="get-started oblong-container">
                  <a href="/get-started" className="oblong">Get Started</a>
                  <a href="/notifications" className="bell-icon">
                    <span className="bell-circle">
                      <FontAwesomeIcon icon={faBell} />
                    </span>
                  </a>
                </div>
              </nav>
            </header>
          </div>
        </div>
        <div className="empowering">
          <h1>Empowering Businesses to Thrive in the Digital Age</h1>
        </div>
        <div className="empoweringSub">
          <p>Adovelopers: Innovate. Customize. Succeed. Crafting Software <br /> Solutions as Unique as You</p>
        </div>
        <div style={{ position: "relative", top: "-220px", right: "-160px" }}>
          <img src={Group2Image} alt="upo" style={{ width: "420px" }} />
        </div>
        <ImageRight /> 
      </div>
    </div>
  );
}

export default App;
