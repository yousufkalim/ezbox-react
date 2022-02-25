import React, { useEffect, useState } from "react";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import Grid from "@mui/material/Grid";
import ConsultingAmic from "../assets/images/Consulting-amico.svg";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Consultings } from "../Data/Consulting.js";
import axios from "axios";
const Consulting = () => {
  // const [data, setData] = useState({});
  // useEffect(() => {
  //   axios.get("http://localhost:5000/api/consulting").then((response) => {
  //     setData(response.data.data);
  //   });
  // }, []);
  return (
    <>
      <AppBar></AppBar>
      {Consultings.map((data) => (
        <>
          <Grid container spacing={1} sx={{ paddingBottom: "10%" }}>
            <Grid xs={12} sm={12} md={6}>
              <div className="Consultingimgdiv">
                <img
                  src={ConsultingAmic}
                  className="consultingimg"
                  style={{ width: "98%", height: "580px", objectFit: "cover" }}
                ></img>
              </div>
            </Grid>
            <Grid xs={12} sm={12} md={5} className="Consultingtypogrid">
              <Typography className="Consultingtypo">{data.text}</Typography>
              <div className="buttondiv">
                <div className="bb">
                  <Typography className="buttontypo">
                    {data.textbottom}
                  </Typography>
                  <Link to="/Contact" activeClassName="active">
                    {data.contactbutton && (
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
        </>
      ))}
      <div className="footergrid">
        <Footer></Footer>
      </div>
    </>
  );
};

export default Consulting;
