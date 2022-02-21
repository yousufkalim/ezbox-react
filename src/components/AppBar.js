import React from "react";
import EzbozLogo from "../assets/images/Ezboxlogo.svg";
const AppBar = () => {
  return (
    <div className="main-list">
      <div className="flex_rowAlign_center">
        <a href="" style={{ width: "32%" }}>
          <img className="home-logo" src={EzbozLogo} alt="" />
        </a>
        <ul className="list">
          <li>
            <ul>
              <li>
                <a href=""> Advertising </a>
              </li>
              <li>
                <a href=""> Product</a>
              </li>
              <li>
                <a href=""> Consulting </a>
              </li>
              <li>
                <a href=""> Product Line </a>
              </li>
              <li>
                <a href=""> Contact </a>
              </li>
              <li>
                <a href=""> Blog </a>
              </li>
              <li>
                <a href=""> Forum </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppBar;
