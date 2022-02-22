import React from "react";
import EzbozLogo from "../assets/images/Ezboxlogo.svg";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
const AppBar = () => {
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
          <div className="" style={{ paddingTop: "16px" }}>
            <Link to="/">
              <img className="logo" src={EzbozLogo} alt="" />
            </Link>
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
