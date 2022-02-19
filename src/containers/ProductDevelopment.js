import { Typography } from "@mui/material";
import React from "react";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import Grid from "@mui/material/Grid";
import Productdevelopmen1 from "../assets/images/Productdevelopment1.svg";
import Productdevelopmen2 from "../assets/images/Productdevelopment2.svg";
import Productdevelopmen3 from "../assets/images/Productdevelopment3.svg";

const ProductDevelopment = () => {
  return (
    <>
      <AppBar></AppBar>
      <Grid container spacing={1} className="productmaingrid">
        <Grid sx={12} sm={12} md={6}>
          <Typography className="productTypography">
            Every business challenge and process bottleneck can be solved, with
            the wide variety of technologies available today. Al enhances
            decision making, the Web is accessible from the smallest of devices
            and data flows between all digital mediums. Get in touch with us for
            a chat on how we could help you build your next generation product.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} className="productmidgird">
        <Grid item xs={12} sm={12} md={3}>
          <img src={Productdevelopmen1}></img>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <img src={Productdevelopmen2}></img>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          sx={{ paddingLeft: "36px !important" }}
        >
          <img src={Productdevelopmen3}></img>
        </Grid>
      </Grid>
      <div style={{ paddingTop: "4%" }}>
        <Footer></Footer>
      </div>
    </>
  );
};

export default ProductDevelopment;
