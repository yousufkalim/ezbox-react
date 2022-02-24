// Init
import React from "react";
import { useRef } from "react";
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
// import GetData from "../utils/Data";
import CustomerReview from "../components/CustomerReviews";
import Left from "../assets/images/Left.svg";
import Right from "../assets/images/Right.svg";

// Home Component
export default function Home() {
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
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
          style={{ position: "absolute", top: "110%" }}
          className="downarrowsvg"
          onClick={executeScroll}
        ></img>
      </div>
      <Grid
        container
        spacing={2}
        sx={{ paddingTop: "5%", display: "flex", justifyContent: "center" }}
      >
        <Grid
          xs={12}
          sm={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
          className="ytplayer"
        >
          <img src={Player} style={{ width: "68%" }}></img>
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
        <div className="cleintreviewsheadingdiv" ref={myRef}>
          <Typography className="Clientreviewsheading">
            Client Reviews
          </Typography>
        </div>
        <Grid container spacing={1} sx={{ paddingTop: "5%" }}>
          <Grid xs={12} sm={12} md={2.5}>
            <img src={Left} className=""></img>
          </Grid>
          <Grid xs={12} sm={12} md={7} className="custrev">
            <CustomerReview></CustomerReview>
          </Grid>
          <Grid xs={12} sm={12} md={2.5} className="carouselimg">
            <img src={Right} style={{ width: "" }}></img>
          </Grid>
        </Grid>
      </Grid>

      <div style={{ paddingTop: "20%" }}>
        <Footer></Footer>
      </div>
    </>
  );
}
