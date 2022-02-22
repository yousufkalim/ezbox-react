// Init
import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AppBar from "../components/AppBar";
import Frame from "../assets/images/Frame.svg";
import DownArrow from "../assets/images/Down_Arrow.svg";
import Player from "../assets/images/Player.svg";
import Ezboximg from "../assets/images/Exboximg.svg";
import QuestionMark from "../assets/images/Questionmark.svg";
import Ez from "../assets/images/EZ.svg";
import Footer from "../components/Footer";
// Home Component
export default function Home() {
  return (
    <>
      <AppBar></AppBar>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
          className="Typo_Grid"
        >
          <Typography className="Home_typo">
            A product creation house, dealing with creating bespoke and ready
            made cutting edge products utilising Al for advertising and audience
            engagement measurement.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={7} className="Home_img">
          <div className="Home_img">
            <img src={Frame} className="frame"></img>
          </div>
        </Grid>
      </Grid>
      <div className="Down_Arrow">
        <img
          src={DownArrow}
          style={{ position: "absolute", top: "100%" }}
        ></img>
      </div>
      <Grid container spacing={2} sx={{ paddingTop: "0%" }}>
        <Grid
          xs={12}
          sm={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
          className="ytplayer"
        >
          <img src={Player} style={{ width: "80%" }}></img>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={6}
          xs={{ display: "flex", alignItems: "center" }}
        >
          <div className="ezboxx">
            <img
              src={Ezboximg}
              style={{ paddingTop: "31%" }}
              className="homeezbox"
            ></img>
            <img src={QuestionMark}></img>
          </div>
          <div
            style={{ display: "flex", justifyContent: "right" }}
            className="ezbox_logo"
          >
            <img src={Ez} className="ezbox_img"></img>
          </div>
        </Grid>
      </Grid>
      <div style={{ paddingTop: "15%" }}>
        <Footer></Footer>
      </div>
    </>
  );
}
