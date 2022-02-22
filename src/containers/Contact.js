import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import Contactsvg from "../assets/images/Contactsvg.svg";
import Button from "@mui/material/Button";

const Contact = () => {
  return (
    <>
      <AppBar></AppBar>
      <Grid container spacing={1} sx={{ paddingBottom: "10% !important" }}>
        <Grid xs={12} sm={12} md={6}>
          <div className="form">
            <input
              type="text"
              placeholder="Name"
              id="fname"
              name="fname"
              className="inputfield"
            />
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Contact No"
              className="inputfield"
            />
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Email Address"
              className="inputfield"
            />
            <textarea
              type="text"
              placeholder="You want to ask?"
              id="fname"
              name="fname"
              className="textarea"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingRight: "31%",
              marginTop: "0",
            }}
          >
            <Button
              variant="contained"
              className="Contactusbutton"
              // sx={{ marginBottom: "8% !important" }}
            >
              Contact us
            </Button>
          </div>
        </Grid>
        <Grid xs={12} sm={12} md={6} sx={{ paddingTop: "10% !important" }}>
          <img src={Contactsvg} className="contactsvg"></img>
        </Grid>
      </Grid>
      <div style={{ paddingTop: "4%" }}>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Contact;
