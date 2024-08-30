import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
// Import all the SVG files
import Home from "../assets/home-solid.svg";
import Team from "../assets/social.svg";
import Calender from "../assets/sceduled.svg";
import Projects from "../assets/starred.svg";
import Documents from "../assets/draft.svg";

function Sidebar  ({ children })  {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="sidebar-container hidden md:block ">
      <div className="sidebar">
        {/* <button
          className={`sidebar-button ${click ? "clicked" : ""}`}
          onClick={handleClick}
        >
        </button> */}
        <div className="sidebar-content">
          {/* <div className="logo">
            <img src={logo} alt="logo" />
          </div> */}
          <ul className={`slick-bar ${click ? "clicked" : ""}`}>
            <NavLink
              to="/home"
              exact
              activeClassName="active"
              onClick={() => setClick(false)}
            >
              <img src={Home} alt="Home" />
              <span className={`text ${click ? "clicked" : ""}`}>Home</span>
            </NavLink>
            <NavLink
              to="/history"
              activeClassName="active"
              onClick={() => setClick(false)}
            >
              <img src={Team} alt="chat" />
              <span className={`text ${click ? "clicked" : ""}`}>Chat</span>
            </NavLink>
            <NavLink
              to="/history"
              activeClassName="active"
              onClick={() => setClick(false)}
            >
              <img src={Calender} alt="Calender" />
              <span className={`text ${click ? "clicked" : ""}`}>History</span>
            </NavLink>
            <NavLink
              to="/about"
              activeClassName="active"
              onClick={() => setClick(false)}
            >
              <img src={Documents} alt="Documents" />
              <span className={`text ${click ? "clicked" : ""}`}>
                About Us
              </span>
            </NavLink>
            <NavLink
              to="/entertainment"
              activeClassName="active"
              onClick={() => setClick(false)}
            >
              <img src={Projects} alt="Projects" />
              <span className={`text ${click ? "clicked" : ""}`}>Entertainment</span>
            </NavLink>
          </ul>
        </div>
      </div>
      <div className="main-content">{children}</div>
    </div>
  );
};

export default Sidebar;
