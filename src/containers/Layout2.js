import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import Grid from "@mui/material/Grid";
import Leftimg from "../assets/Productdevimages/leftimg.jpg";
import Centerimg from "../assets/Advertisingimages/centerimg.jpg";
import Rightimg from "../assets/Advertisingimages/rightimg.jpg";
import Api from "../api/index";
import assetsURL from "../utils/Assets";
import FontLoader from "../components/FontLoader";

import { useLocation } from "react-router-dom";

const Layout2 = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [layoutData, setLayoutData] = useState({});

  const location = useLocation();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let response;
    try {
      const body = {
        path: location.pathname.replace("/", "")
      }
      response = await Api("post", `/pages/get_one`, body);
      const _data = response.data.data.layout;
      setLayoutData(_data);
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
          </>
        ) : (
          <>
            <FontLoader fonts={[layoutData.text_font]} />
            <Grid container spacing={1} className="productmaingrid">
              <Grid sx={12} sm={12} md={6} className="typographygrid">
                <Typography
                  className="productTypography"
                  style={{
                    fontFamily: layoutData.text_font,
                  }}
                >
                  {layoutData.text}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2} className="productmidgird">
              <Grid item xs={12} sm={12} md={4} className="advertisingdiv">
                <img
                  src={
                    layoutData ? assetsURL(layoutData.leftImg) : Leftimg
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
                    layoutData
                      ? assetsURL(layoutData.centerImg)
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
                    layoutData
                      ? assetsURL(layoutData.rightImg)
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

export default Layout2;
