import React from "react";
import ClientImg1 from "../assets/images/picture.svg";
import Rating from "@mui/material/Rating";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Reviews } from "../Data/Reviews";

const CustomerReviews = () => {
  const [value, setValue] = React.useState(5);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1438 },
      items: 3,
      //   slidesToSlide: 5,
    },
    tablet: {
      breakpoint: { max: 1438, min: 641 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 641, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="Customerreviewcaruseldiv1">
        <Carousel
          responsive={responsive}
          infinite={true}
          arrows={false}
          autoPlay={true}
          className="CustomerreviewCarousel"
        >
          {Reviews.map((item) => (
            <div className="clientreview">
              <img src={ClientImg1} className="customerimg" alt="img" />
              <h5 className="customername">{item.name}</h5>
              <Rating
                name="read-only"
                value={value}
                size="small"
                readOnly
                // sx={{ color: "yellow !important" }}
              />

              <p className="customerdescription">{item.message}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default CustomerReviews;
