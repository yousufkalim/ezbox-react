import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import { toast } from "react-toastify";

// import Contactsvg from "../assets/images/Contactsvg.svg";
import Contactsvg from "../assets/Contactus/contactus.jpg";
import Button from "@mui/material/Button";
import Border from "../assets/images/contactusborder.svg";
import Api from "../api/index";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) {
      return;
    }

    const data = new FormData(event.currentTarget);

    let response;

    try {
      const body = {
        name: data.get("Name"),
        number: data.get("Number"),
        email: data.get("Email"),
        message: data.get("Message"),
      };

      console.log(body);

      setLoading(true);

      response = await Api("post", "/contact", body);

      console.log(response);
    } catch (e) {
      console.trace(e);
    }

    setLoading(false);
  };
  return (
    <>
      <AppBar></AppBar>
      <form noValidate onSubmit={handleSubmit}>
        <Grid container spacing={1} sx={{ paddingBottom: "10% !important" }}>
          <Grid xs={12} sm={12} md={6}>
            <div className="form">
              <img src={Border} className="borderimg"></img>
              <div className="contactform">
                <input
                  type="text"
                  placeholder="Name"
                  name="Name"
                  className="inputfield"
                />
                <input
                  type="text"
                  name="Number"
                  placeholder="Contact No"
                  className="inputfield"
                />
                <input
                  type="text"
                  name="Email"
                  placeholder="Email Address"
                  className="inputfield"
                />
                <textarea
                  type="text"
                  placeholder="You want to ask?"
                  name="Message"
                  className="textarea"
                />
                <Button
                  type="submit"
                  variant="contained"
                  className="Contactusbutton"
                  sx={{
                    marginTop: "8% !important",
                    marginRight: "32% !important",
                  }}
                >
                  Contact us
                </Button>
              </div>
            </div>
          </Grid>
          <Grid xs={12} sm={12} md={6} sx={{ paddingTop: "10% !important" }}>
            <img src={Contactsvg} className="contactsvg"></img>
          </Grid>
        </Grid>
      </form>
      <div style={{ paddingTop: "4%" }}>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Contact;
