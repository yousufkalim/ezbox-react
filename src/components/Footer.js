import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Ezboximg from "../assets/images/Exboximg.svg";
import Followus from "../assets/images/Followus.svg";
import Socialimg from "../assets/images/Footersocialimg.svg";
import { Link } from "react-router-dom";
import Api from "../api/index";

const Footer = () => {

  const [appRoutes, setAppRoutes] = useState([]);

  useEffect(() => {
    getPages();
  }, []);

  // func to get patient assigned therapists
  const getPages = async () => {
    let response;
    try {
      response = await Api("post", `/pages/get_all`);
      let data = response.data.data;
      data = data.sort( (a,b) => a.rank - b.rank );
      setAppRoutes(data);
    } catch (e) {
      console.trace(e);
    }
  };

  const navToExternal = (link) => {
    window.open(link, "_blank");
  }

  return (
    <>
      <Grid container spacing={1} className="footer_grid1">
        <Grid
          item
          xs={12}
          sm={12}
          md={4.6}
          // className="footer_div"
          sx={{ paddingTop: "3% !important" }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={Ezboximg} className="ezimg"></img>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "15%",
              }}
            >
              <Typography className="Footer_typo">Privacy Policy</Typography>
              <Typography className="Footer_typo" sx={{ marginLeft: "4%" }}>
                Terms & Conditions
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "3%",
              }}
            >
              <Typography className="footer_typography">© 2022</Typography>
              <Typography className="footer_ezbox"> EZBox Media</Typography>
              <Typography className="footer_typography">
                , All rights Reserved
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={3.4} className="footer_div">
          {
            appRoutes.map(
              v =>
              v.rel == "external"
              ?
              <Typography
                className="footer_list"
                style={{
                  "cursor": "pointer"
                }}
                onClick={() => navToExternal(v.path)}
              >
                {v.name}
              </Typography>
              :
              <Link to={`/${v.path}`}>
                <Typography className="footer_list">{v.name}</Typography>
              </Link>
            )
          }
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <div
            style={{ position: "absolute", left: "62%" }}
            className="followus"
          >
            <img src={Followus}></img>
          </div>
          <div style={{ paddingLeft: "20%" }} className="footersvg">
            <img src={Socialimg} style={{ width: "93%" }}></img>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
