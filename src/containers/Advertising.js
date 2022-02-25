import React from "react";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Advertising1 from "../assets/images/Advertising1.svg";
import Advertising2 from "../assets/images/Advertising2.svg";
import Advertising3 from "../assets/images/Advertising3.svg";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Advertisings } from "../Data/Advertising";

// import AdvestingSvg from "../assets/images/AdvestisingSvg.svg";
export const Advertising = () => {
  Advertisings.map((data) => {
    console.log("data.title", data.title);
  });
  return (
    <>
      <AppBar></AppBar>

      {Advertisings.map((data) => (
        <>
          <Grid container spacing={1}>
            <Grid xs={12} sm={12} md={5} className="upper_left_div">
              <Typography className="Advertising_heading">
                {data.title}
              </Typography>
            </Grid>
            <Grid xs={12} sm={12} md={7} className="upper_right_div">
              <Typography className="Advertising_para">{data.text}</Typography>
            </Grid>
          </Grid>

          <Grid container spacing={1}>
            {data.image.map((item) => (
              <>
                <Grid item xs={12} sm={12} md={4} className="advertisingdiv">
                  <img
                    src={Advertising2}
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
              <img src={Advertising2} className="advertisingimg"></img>
            </Grid>
            <Grid item xs={12} sm={12} md={3} className="advertisingdiv">
              <img src={Advertising3} className="advertisingimg"></img>
            </Grid> */}
              </>
            ))}
          </Grid>
          <Grid container spacing={1} className="backimg">
            <Grid xs={12} sm={12} md={6} className="bottom_left_div">
              <Typography className="Advertising-heading">
                {data.textbottom}
              </Typography>
              <div
                style={{
                  paddingTop: "6%",
                  paddingRight: "68%",
                }}
                className="advertisingbtn"
              >
                <Link to="/Contact" activeClassName="active">
                  <Button variant="contained" className="Contactusbutton">
                    {data.contactbutton}
                  </Button>
                </Link>
              </div>
            </Grid>
          </Grid>
        </>
      ))}

      <div style={{ paddingTop: "4%" }}>
        <Footer></Footer>
      </div>
    </>
  );
};
