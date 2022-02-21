import React from "react";
import EzbozLogo from "../assets/images/Ezboxlogo.svg";
const AppBar = () => {
  return (
    <>
      <nav id="navbar" class="">
        <div className="nav-wrapper">
          <div className="" style={{ paddingTop: "16px" }}>
            <img className="logo" src={EzbozLogo} alt="" />
          </div>
          <ul id="menu">
            <li>
              <a href="/Advertising">Advertising</a>
            </li>
            <li>
              <a href="/ProductDevelopment">Product Development</a>
            </li>
            <li>
              <a href="/Consulting">Consulting</a>
            </li>
            <li>
              <a href="/ProductLine">Product Line</a>
            </li>
            <li>
              <a href="/Contact">Contact</a>
            </li>

            <li>
              <a href="#contact">Blog</a>
            </li>
            <li>
              <a href="#contact">Forum</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default AppBar;
