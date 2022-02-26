import React, { useState, useEffect } from "react";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Leftimg from "../assets/Advertisingimages/leftimg.jpg";
import Centerimg from "../assets/Advertisingimages/centerimg.jpg";
import Rightimg from "../assets/Advertisingimages/rightimg.jpg";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Advertisings } from "../Data/Advertising";
import Api from "../api/index";
import assetsURL from "../utils/Assets";

// import AdvestingSvg from "../assets/images/AdvestisingSvg.svg";
export const Advertising = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [advertisingData, setadvertisingData] = useState(null);

  useEffect(() => {
    getAdvertising();
  }, []);

  const getAdvertising = async () => {
    let response;
    try {
      response = await Api("get", `/advertising/`);
      const _advertisingData = response.data.advertise;

      setadvertisingData(_advertisingData);
      setIsLoading(false);
    } catch (e) {
      console.trace(e);
    }
  };

  return (
    <>
      <AppBar></AppBar>
      <>
        {console.log(`THSI IS THE advertisingData: ${advertisingData}`)}
        {isLoading ? (
          <></>
        ) : (
          <>
            <Grid container spacing={1}>
              <Grid xs={12} sm={12} md={5} className="upper_left_div">
                <Typography className="Advertising_heading">
                  {advertisingData.title}
                </Typography>
              </Grid>
              <Grid xs={12} sm={12} md={7} className="upper_right_div">
                <Typography className="Advertising_para">
                  {advertisingData.text}
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={1}>
              <Grid item xs={12} sm={12} md={4} className="advertisingdiv">
                <img
                  src={
                    advertisingData
                      ? assetsURL(advertisingData.leftImg)
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
                    advertisingData
                      ? assetsURL(advertisingData.centerImg)
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
                    advertisingData
                      ? assetsURL(advertisingData.rightImg)
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
                <Typography className="Advertising-heading">
                  {advertisingData.textbottom}
                </Typography>
                <div
                  style={{
                    paddingTop: "6%",
                    paddingRight: "68%",
                  }}
                  className="advertisingbtn"
                >
                  <Link to="/Contact" activeClassName="active">
                    {advertisingData.contactbutton && (
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
