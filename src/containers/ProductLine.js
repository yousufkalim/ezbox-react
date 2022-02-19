import React from "react";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ProductLine1 from "../assets/images/Productline1.svg";
import ProductLine2 from "../assets/images/Productline2.svg";
import ProductLine3 from "../assets/images/Productline3.svg";

export const ProductLine = () => {
  return (
    <>
      <AppBar></AppBar>
      <Grid container spacing={1}>
        <Grid xs={12} sm={12} md={6} sx={{ padding: "10%" }}>
          <Typography className="ProductHeading">Coming Soon</Typography>
          <Typography className="ProductDescription">
            Custom HDMI dongles which allow you to target content to your
            audience remotely. The KIOPIus comes with 4G capability to allow
            control of the devices remotely. The devices are provided with cloud
            based administration capabilites. or Android/iOS apps to control the
            devices. Get in touch for being part of the beta program.
          </Typography>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={6}
          sx={{ display: "flex", alignItems: "flex-end", paddingTop: "5%" }}
        >
          <img src={ProductLine1} style={{ width: "90%" }}></img>
        </Grid>
        <Grid xs={12} sm={12} md={6} sx={{ padding: "10%" }}>
          <Typography className="ProductHeading">Released</Typography>
          <Typography className="ProductDescription">
            Watch your content with Zebcast, from anywhere, on any device.
          </Typography>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={6}
          sx={{ display: "flex", alignItems: "flex-end", paddingTop: "5%" }}
        >
          <img src={ProductLine2} style={{ width: "90%" }}></img>
        </Grid>

        <Grid xs={12} sm={12} md={6} sx={{ padding: "10%" }}>
          <Typography className="ProductHeading">Released</Typography>
          <Typography className="ProductDescription">
            Guestreport analyzes visitor responses to advertising, which helps
            build better ads. Better still it allows you to direct ads to
            individuals depending on what was learnt about them during the
            visit.
          </Typography>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={6}
          sx={{ display: "flex", alignItems: "flex-end", paddingTop: "5%" }}
        >
          <img src={ProductLine3} style={{ width: "90%" }}></img>
        </Grid>
      </Grid>
      <Footer></Footer>
    </>
  );
};
