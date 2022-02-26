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
  const [contact, setContact] = useState({});

  const handleInput = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) {
      return;
    }

    try {
      setLoading(true);

      await Api("post", "/contact", contact);

      setContact({
        name: "",
        number: "",
        email: "",
        message: "",
      });
      toast.success("Request submitted successfully");
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
                  name="name"
                  value={contact.name}
                  className="inputfield"
                  onChange={handleInput}
                />
                <input
                  type="text"
                  name="number"
                  placeholder="Contact No"
                  className="inputfield"
                  value={contact.number}
                  onChange={handleInput}
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  className="inputfield"
                  value={contact.email}
                  onChange={handleInput}
                />
                <textarea
                  type="text"
                  placeholder="You want to ask?"
                  name="message"
                  className="textarea"
                  value={contact.message}
                  onChange={handleInput}
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
