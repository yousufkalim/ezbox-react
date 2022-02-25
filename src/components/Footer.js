import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Ezboximg from "../assets/images/Exboximg.svg";
import Followus from "../assets/images/Followus.svg";
import Socialimg from "../assets/images/Footersocialimg.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Grid container spacing={1} className="footer_grid1">
        <Grid
          item
          xs={12}
          sm={12}
          md={4.6}
          // className="footer_div"
          sx={{ paddingTop: "3% !important" }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={Ezboximg} className="ezimg"></img>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "15%",
              }}
            >
              <Typography className="Footer_typo">Privacy Policy</Typography>
              <Typography className="Footer_typo" sx={{ marginLeft: "4%" }}>
                Terms & Conditions
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "3%",
              }}
            >
              <Typography className="footer_typography">© 2022</Typography>
              <Typography className="footer_ezbox"> EZBox Media</Typography>
              <Typography className="footer_typography">
                , All rights Reserved
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={3.4} className="footer_div">
          <Link to="/Advertising">
            <Typography className="footer_list">Advertising</Typography>
          </Link>
          <Link to="/ProductDevelopment">
            <Typography className="footer_list">Product Development</Typography>
          </Link>
          <Link to="/Consulting">
            <Typography className="footer_list">Consulting</Typography>
          </Link>
          <Link to="/ProductLine">
            <Typography className="footer_list">Product Line</Typography>
          </Link>
          <Link to="/Contact">
            <Typography className="footer_list">Contact</Typography>
          </Link>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <div
            style={{ position: "absolute", left: "62%" }}
            className="followus"
          >
            <img src={Followus}></img>
          </div>
          <div style={{ paddingLeft: "20%" }} className="footersvg">
            <img src={Socialimg} style={{ width: "93%" }}></img>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
