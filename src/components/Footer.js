import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Ezboximg from "../assets/images/Exboximg.svg";
import Followus from "../assets/images/Followus.svg";
import Socialimg from "../assets/images/Footersocialimg.svg";
const Footer = () => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          // className="footer_div"
          sx={{ paddingTop: "3% !important" }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={Ezboximg}></img>
          </div>
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
        </Grid>
        <Grid item xs={12} sm={12} md={4} className="footer_div">
          <Typography className="footer_list">Advertising</Typography>
          <Typography className="footer_list">Product Development</Typography>
          <Typography className="footer_list">Consulting</Typography>
          <Typography className="footer_list">Product Line</Typography>
          <Typography className="footer_list">Contact</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <div
            style={{ position: "absolute", left: "62%" }}
            className="followus"
          >
            <img src={Followus}></img>
          </div>
          <div style={{ paddingLeft: "20%" }}>
            <img src={Socialimg} style={{ width: "93%" }}></img>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
