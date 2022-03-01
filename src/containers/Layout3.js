import React, { useEffect, useState } from "react";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import Grid from "@mui/material/Grid";
// import ConsultingAmic from "../assets/images/Consulting-amico.svg";
import Centerimg from "../assets/Consultingimages/centerimg.jpg";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
// import { Consultings } from "../Data/Consulting.js";
import Api from "../api/index";
import assetsURL from "../utils/Assets";
import FontLoader from "../components/FontLoader";

import { useParams } from "react-router-dom";

const Layout3 = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [layoutData, setLayoutData] = useState({});

  const { layout_id } = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let response;
    try {
      response = await Api("get", `/layout/${layout_id}`);
      const _data = response.data.data;
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
              fonts={[layoutData.text_font, layoutData.textbottom_font]}
            />
            <Grid container spacing={1} sx={{ paddingBottom: "10%" }}>
              <Grid xs={12} sm={12} md={6}>
                <div className="Consultingimgdiv">
                  <img
                    src={
                      layoutData
                        ? assetsURL(layoutData.image)
                        : Centerimg
                    }
                    className="consultingimg"
                    style={{
                      width: "98%",
                      height: "580px",
                      objectFit: "cover",
                    }}
                  ></img>
                </div>
              </Grid>
              <Grid xs={12} sm={12} md={5} className="Consultingtypogrid">
                <Typography
                  className="Consultingtypo"
                  style={{
                    fontFamily: layoutData.text_font,
                  }}
                >
                  {layoutData.text}
                </Typography>
                <div className="buttondiv">
                  <div className="bb">
                    <Typography
                      className="buttontypo"
                      style={{
                        fontFamily: layoutData.textbottom_font,
                      }}
                    >
                      {layoutData.textbottom}
                    </Typography>
                    <Link to="/Contact">
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
                </div>
              </Grid>
            </Grid>
            <div className="footergrid">
              <Footer></Footer>
            </div>
          </>
        )}
      </>
    </>
  );
};

export default Layout3;
