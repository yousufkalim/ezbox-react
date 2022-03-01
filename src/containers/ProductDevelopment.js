import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import Grid from "@mui/material/Grid";
import Leftimg from "../assets/Productdevimages/leftimg.jpg";
import Centerimg from "../assets/Advertisingimages/centerimg.jpg";
import Rightimg from "../assets/Advertisingimages/rightimg.jpg";
// import Productdevelopmen1 from "../assets/images/Productdevelopment1.svg";
// import Productdevelopmen2 from "../assets/images/Productdevelopment2.svg";
// import Productdevelopmen3 from "../assets/images/Productdevelopment3.svg";
import { ProductsDevelopment } from "../Data/ProductDevelopment.js";
import Api from "../api/index";
import assetsURL from "../utils/Assets";
import FontLoader from "../components/FontLoader";

const ProductDevelopment = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productdevData, setproductdevData] = useState({});

  useEffect(() => {
    getProductdev();
  }, []);

  const getProductdev = async () => {
    let response;
    try {
      response = await Api("get", `/layout2/`);
      const _productdevData = response.data.data[0];

      setproductdevData(_productdevData);
      setIsLoading(false);
    } catch (e) {
      console.trace(e);
    }
  };

  // ProductsDevelopment.map((data) => {
  //   console.log("data is ", data.text);
  // });
  return (
    <>
      <AppBar></AppBar>
      {/* {ProductsDevelopment.map((data) => ( */}
      <>
        {isLoading ? (
          <>
            <h1>XYZ</h1>
          </>
        ) : (
          <>
            <FontLoader fonts={[productdevData.text_font]} />
            <Grid container spacing={1} className="productmaingrid">
              <Grid sx={12} sm={12} md={6} className="typographygrid">
                <Typography
                  className="productTypography"
                  style={{
                    fontFamily: productdevData.text_font,
                  }}
                >
                  {productdevData.text}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2} className="productmidgird">
              <Grid item xs={12} sm={12} md={4} className="advertisingdiv">
                <img
                  src={
                    productdevData ? assetsURL(productdevData.leftImg) : Leftimg
                  }
                  className="advertisingimg"
                  style={{
                    width: "98%",
                    height: "415px",
                    objectFit: "cover",
                  }}
                ></img>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                sx={{ display: "flex", justifyContent: "center" }}
                className="advertisingdiv"
              >
                <img
                  src={
                    productdevData
                      ? assetsURL(productdevData.centerImg)
                      : Centerimg
                  }
                  className="advertisingimg"
                  style={{
                    width: "98%",
                    height: "415px",
                    objectFit: "cover",
                  }}
                ></img>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                sx={{ paddingLeft: "36px !important" }}
                className="advertisingdiv"
              >
                <img
                  src={
                    productdevData
                      ? assetsURL(productdevData.rightImg)
                      : Centerimg
                  }
                  className="advertisingimg"
                  style={{
                    width: "98%",
                    height: "415px",
                    objectFit: "cover",
                  }}
                ></img>
              </Grid>
            </Grid>
            <div style={{ paddingTop: "4%" }} className="footer_grid">
              <Footer></Footer>
            </div>
          </>
        )}
      </>
    </>
  );
};

export default ProductDevelopment;
