import React, { useEffect, useState } from "react";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
// import ProductLine1 from "../assets/images/Productline1.svg";
// import ProductLine2 from "../assets/images/Productline2.svg";
// import ProductLine3 from "../assets/images/Productline3.svg";
import Centerimg from "../assets/Productlineimages/centerimage.jpg";
import Productsvg from "../assets/images/Productsvg.svg";
import { ProductsLine } from "../Data/Productline";
import Api from "../api/index";
import assetsURL from "../utils/Assets";

export const ProductLine = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productlineData, setproductlineData] = useState(null);

  useEffect(() => {
    geProductlinedata();
  }, []);

  const geProductlinedata = async () => {
    let response;
    try {
      response = await Api("get", `/product/`);
      const _productlineData = response.data.products;

      setproductlineData(_productlineData);
      setIsLoading(false);
    } catch (e) {
      console.trace(e);
    }
  };
  return (
    <>
      <AppBar></AppBar>
      <>
        {isLoading ? (
          <>
            <h1>XYZ</h1>
          </>
        ) : (
          <>
            {productlineData.map((data) => (
              <>
                <Grid
                  container
                  spacing={1}
                  sx={{ paddingTop: "7%" }}
                  className="productlinemaingrid"
                >
                  <Grid
                    xs={12}
                    sm={12}
                    md={6}
                    sx={{ padding: "10%", zIndex: "1" }}
                  >
                    <Typography className="ProductHeading">
                      {data.title}
                    </Typography>
                    <Typography className="ProductDescription">
                      {data.description}
                    </Typography>
                  </Grid>
                  <Grid
                    xs={12}
                    sm={12}
                    md={6}
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      paddingTop: "5%",
                    }}
                    className="imggrid"
                  >
                    <img
                      src={
                        productlineData
                          ? assetsURL(productlineData.image)
                          : Centerimg
                      }
                      style={{
                        width: "90%",
                        zIndex: "1",
                        height: "500px",
                        objectFit: "cover",
                      }}
                    ></img>
                  </Grid>
                  {/* <Grid xs={12} sm={12} md={6} sx={{ padding: "10%" }}>
              <Typography className="ProductHeading">{data.title}</Typography>
              <Typography className="ProductDescription">
                {data.description}
              </Typography>
            </Grid>
            <Grid
              xs={12}
              sm={12}
              md={6}
              sx={{ display: "flex", alignItems: "flex-end", paddingTop: "5%" }}
              className="imggrid"
            >
              <img
                src={ProductLine2}
                style={{ width: "90%", zIndex: "1" }}
              ></img>
            </Grid> */}
                  {/* <div className="bottomgrid">
              <Grid xs={12} sm={12} md={6} sx={{ padding: "10%", zIndex: "1" }}>
                <Typography className="ProductHeading">Released</Typography>
                <Typography className="ProductDescription">
                  Guestreport analyzes visitor responses to advertising, which
                  helps build better ads. Better still it allows you to direct
                  ads to individuals depending on what was learnt about them
                  during the visit.
                </Typography>
              </Grid>
              <Grid
                xs={12}
                sm={12}
                md={6}
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  paddingTop: "5%",
                }}
                className="imggrid"
              >
                <img
                  src={ProductLine3}
                  style={{ width: "90%", zIndex: "1" }}
                ></img>
              </Grid>
            </div> */}
                  <div className="productlinesvg">
                    <img
                      src={Productsvg}
                      style={{ width: "99vw" }}
                      className="linesvg"
                    ></img>
                  </div>
                </Grid>
              </>
            ))}
            <div style={{ paddingTop: "30%" }}>
              <Footer></Footer>
            </div>
          </>
        )}
      </>
    </>
  );
};
