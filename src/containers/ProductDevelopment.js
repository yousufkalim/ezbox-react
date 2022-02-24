import { Typography } from "@mui/material";
import React from "react";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import Grid from "@mui/material/Grid";
import Productdevelopmen1 from "../assets/images/Productdevelopment1.svg";
import Productdevelopmen2 from "../assets/images/Productdevelopment2.svg";
import Productdevelopmen3 from "../assets/images/Productdevelopment3.svg";
import { ProductsDevelopment } from "../Data/ProductDevelopment.js";

const ProductDevelopment = () => {
  ProductsDevelopment.map((data) => {
    console.log("data is ", data.text);
  });
  return (
    <>
      <AppBar></AppBar>
      {ProductsDevelopment.map((data) => (
        <>
          <Grid container spacing={1} className="productmaingrid">
            <Grid sx={12} sm={12} md={6} className="typographygrid">
              <Typography className="productTypography">{data.text}</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2} className="productmidgird">
            {data.image.map((item) => (
              <>
                <Grid item xs={12} sm={12} md={4} className="advertisingdiv">
                  <img
                    src={Productdevelopmen2}
                    className="advertisingimg"
                    style={{
                      width: "98%",
                      height: "415px",
                      objectFit: "cover",
                    }}
                  ></img>
                </Grid>
                {/* <Grid
              item
              xs={12}
              sm={12}
              md={6}
              sx={{ display: "flex", justifyContent: "center" }}
              className="advertisingdiv"
            >
              <img src={Productdevelopmen2} className="advertisingimg"></img>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              sx={{ paddingLeft: "36px !important" }}
              className="advertisingdiv"
            >
              <img src={Productdevelopmen3} className="advertisingimg"></img>
            </Grid> */}
              </>
            ))}
          </Grid>
        </>
      ))}
      <div style={{ paddingTop: "4%" }} className="footer_grid">
        <Footer></Footer>
      </div>
    </>
  );
};

export default ProductDevelopment;
