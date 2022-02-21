import React from "react";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Advertising1 from "../assets/images/Advertising1.svg";
import Advertising2 from "../assets/images/Advertising2.svg";
import Advertising3 from "../assets/images/Advertising3.svg";
import Button from "@mui/material/Button";
// import AdvestingSvg from "../assets/images/AdvestisingSvg.svg";
export const Advertising = () => {
  return (
    <>
      <AppBar></AppBar>
      <Grid container spacing={1}>
        <Grid xs={12} sm={12} md={5} className="upper_left_div">
          <Typography className="Advertising_heading">
            We’re all yours
          </Typography>
        </Grid>
        <Grid xs={12} sm={12} md={7} className="upper_right_div">
          <Typography className="Advertising_para">
            Use media content from the internet to display advertisements on
            devices of your choice. Understand how your audience reacts to the
            advertising shown to them, fully compliant with GDPR. Target ads
            based on non personal criteria
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={3} className="advertisingdiv">
          <img src={Advertising1} className="advertisingimg"></img>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
          className="advertisingdiv"
        >
          <img src={Advertising2} className="advertisingimg"></img>
        </Grid>
        <Grid item xs={12} sm={12} md={3} className="advertisingdiv">
          <img src={Advertising3} className="advertisingimg"></img>
        </Grid>
      </Grid>
      <Grid container spacing={1} className="backimg">
        <Grid xs={12} sm={12} md={6} className="bottom_left_div">
          <Typography className="Advertising-heading">
            WE help you to grow your Business
          </Typography>
          <div
            style={{
              paddingTop: "6%",
              paddingRight: "68%",
            }}
          >
            <Button variant="contained" className="Contactusbutton">
              Contact us
            </Button>
          </div>
        </Grid>
      </Grid>
      <div style={{ paddingTop: "4%" }}>
        <Footer></Footer>
      </div>
    </>
  );
};
