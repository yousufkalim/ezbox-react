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

const Consulting = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [consultingData, setconsultingData] = useState({});

  useEffect(() => {
    getConsultingdata();
  }, []);

  const getConsultingdata = async () => {
    let response;
    try {
      response = await Api("get", `/consulting/`);
      const _consultingData = response.data.consulting;

      setconsultingData(_consultingData);
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
            <Grid container spacing={1} sx={{ paddingBottom: "10%" }}>
              <Grid xs={12} sm={12} md={6}>
                <div className="Consultingimgdiv">
                  <img
                    src={
                      consultingData
                        ? assetsURL(consultingData.image)
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
                <Typography className="Consultingtypo">
                  {consultingData.text}
                </Typography>
                <div className="buttondiv">
                  <div className="bb">
                    <Typography className="buttontypo">
                      {consultingData.textbottom}
                    </Typography>
                    <Link to="/Contact">
                      {consultingData.contactbutton && (
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

export default Consulting;
