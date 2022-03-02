import React, { useState, useEffect } from "react";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Leftimg from "../assets/Advertisingimages/leftimg.jpg";
import Centerimg from "../assets/Advertisingimages/centerimg.jpg";
import Rightimg from "../assets/Advertisingimages/rightimg.jpg";

import FontLoader from "../components/FontLoader";
import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";
import Api from "../api/index";
import assetsURL from "../utils/Assets";

export default function Layout1 (){
  const [isLoading, setIsLoading] = useState(true);
  const [layoutData, setLayoutData] = useState(null);

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
          <></>
        ) : (
          <>
            <FontLoader
              fonts={[
                layoutData.title_font,
                layoutData.text_font,
                layoutData.textbottom_font,
              ]}
            />

            <Grid container spacing={1}>
              <Grid xs={12} sm={12} md={5} className="upper_left_div">
                <Typography
                  className="Advertising_heading"
                  style={{
                    fontFamily: layoutData.title_font,
                  }}
                >
                  {layoutData.title}
                </Typography>
              </Grid>
              <Grid xs={12} sm={12} md={7} className="upper_right_div">
                <Typography
                  className="Advertising_para"
                  style={{
                    fontFamily: layoutData.text_font,
                  }}
                >
                  {layoutData.text}
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={1}>
              <Grid item xs={12} sm={12} md={4} className="advertisingdiv">
                <img
                  src={
                    layoutData
                      ? assetsURL(layoutData.leftImg)
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
                sx={{ display: "flex", justifyContent: "center" }}
                className="advertisingdiv"
              >
                <img
                  src={
                    layoutData
                      ? assetsURL(layoutData.centerImg)
                      : Leftimg
                  }
                  className="advertisingimg"
                  style={{
                    width: "98%",
                    height: "415px",
                    objectFit: "cover",
                  }}
                ></img>
              </Grid>
              <Grid item xs={12} sm={12} md={4} className="advertisingdiv">
                <img
                  src={
                    layoutData
                      ? assetsURL(layoutData.rightImg)
                      : Rightimg
                  }
                  className="advertisingimg"
                  style={{
                    width: "98%",
                    height: "415px",
                    objectFit: "cover",
                  }}
                ></img>
              </Grid>
              {/* </>
            ))} */}
            </Grid>
            <Grid container spacing={1} className="backimg">
              <Grid xs={12} sm={12} md={6} className="bottom_left_div">
                <Typography
                  className="Advertising-heading"
                  style={{
                    fontFamily: layoutData.textbottom_font,
                  }}
                >
                  {layoutData.textbottom}
                </Typography>
                <div
                  style={{
                    paddingTop: "6%",
                    paddingRight: "68%",
                  }}
                  className="advertisingbtn"
                >
                  <Link to="/Contact" activeClassName="active">
                    {layoutData.contactbutton && (
                      <Button
                        variant="contained"
                        className="Contactusbutton"
                        sx={{ marginBottom: "8%" }}
                      >
                        {"Contact Us"}
                      </Button>
                    )}
                  </Link>
                </div>
              </Grid>
            </Grid>

            <div style={{ paddingTop: "4%" }}>
              <Footer></Footer>
            </div>
          </>
        )}
      </>
    </>
  );
};
