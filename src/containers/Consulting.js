import React from "react";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import Grid from "@mui/material/Grid";
import ConsultingAmic from "../assets/images/Consulting-amico.svg";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Consulting = () => {
  return (
    <>
      <AppBar></AppBar>
      <Grid container spacing={1} sx={{ paddingBottom: "10%" }}>
        <Grid xs={12} sm={12} md={6}>
          <div className="Consultingimgdiv">
            <img src={ConsultingAmic} className="consultingimg"></img>
          </div>
        </Grid>
        <Grid xs={12} sm={12} md={5} className="Consultingtypogrid">
          <Typography className="Consultingtypo">
            An innovative thought in mind, a design on paper, a product which
            matches both. We have worked with leading consumer electronics
            manufacturers to design and provide turnkey solutions. You never
            know what is possible, till you put that thought on paper and ask us
            if it can be done!
          </Typography>
          <div className="buttondiv">
            <div className="bb">
              <Typography className="buttontypo">
                To Get Premium Services
              </Typography>
              <Link to="/Contact" activeClassName="active">
                <Button
                  variant="contained"
                  className="Contactusbutton"
                  sx={{ marginBottom: "8%" }}
                >
                  Contact us
                </Button>
              </Link>
            </div>
          </div>
        </Grid>
      </Grid>
      <div className="footergrid">
        <Footer></Footer>
      </div>
    </>
  );
};

export default Consulting;
