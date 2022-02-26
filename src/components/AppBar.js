import React, { useState, useEffect } from "react";
import EzbozLogo from "../assets/images/Ezlogo.svg";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { Link, useHistory } from "react-router-dom";
import Api from "../api/index";
import assetsURL from "../utils/Assets";

const AppBar = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [navData, setnavData] = useState({});

  useEffect(() => {
    getNav();
  }, []);

  const getNav = async () => {
    let response;
    try {
      response = await Api("get", `/navigation`);
      const _navData = response.data.navigation;

      setnavData(_navData);
      // setIsLoading(false);
    } catch (e) {
      console.trace(e);
    }
  };

  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const ITEM_HEIGHT = 48;
  return (
    <>
      <nav id="navbar" class="">
        <div className="nav-wrapper">
          <div className="logoImage" style={{ paddingTop: "16px" }}>
            <Link to="/" activeClassName="active">
              <img
                className="logo"
                src={navData.logo ? assetsURL(navData.logo) : EzbozLogo}
                alt=""
              />
            </Link>
          </div>
          <ul id="menu">
            <li>
              <Link
                to="/Advertising"
                className={`${
                  history.location.pathname === "/Advertising"
                    ? "background"
                    : ""
                }`}
              >
                Advertising
              </Link>
            </li>
            <li>
              <Link
                to="/ProductDevelopment"
                className={`${
                  history.location.pathname === "/ProductDevelopment"
                    ? "background"
                    : ""
                }`}
              >
                Product Development
              </Link>
            </li>
            <li>
              <Link
                to="/Consulting"
                className={`${
                  history.location.pathname === "/Consulting"
                    ? "background"
                    : ""
                }`}
              >
                Consulting
              </Link>
            </li>
            <li>
              <Link
                to="/ProductLine"
                className={`${
                  history.location.pathname === "/ProductLine"
                    ? "background"
                    : ""
                }`}
              >
                Product line
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className={`${
                  history.location.pathname === "/Contact" ? "background" : ""
                }`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link to={navData.blog}>Blog</Link>
            </li>
            <li>
              <Link tp={navData.forum}>Forum</Link>
            </li>
          </ul>
        </div>
        <div className="hamburgermenu">
          <IconButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon fontSize="large"> </MenuIcon>
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "100%",
                borderRadius: "10px",
                background: "#3399FE",
              },
            }}
          >
            <div className="mobilenav">
              <a href="/Advertising">Advertising</a>
              <a href="/ProductDevelopment">Product Development</a>
              <a href="/Consulting">Consulting</a>
              <a href="/ProductLine">Product Line</a>
              <a href="/Contact">Contact</a>
              <a href="#contact">Blog</a>
              <a href="#contact">Forum</a>
            </div>
          </Menu>
        </div>
      </nav>
      );
    </>
  );
};

export default AppBar;
