import React from "react";
import ClientImg1 from "../assets/images/picture.svg";
import Rating from "@mui/material/Rating";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CustomerReviews = () => {
  const [value, setValue] = React.useState(5);
  var items = [
    {
      img: ClientImg1,
      name: "Alee Zebat",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      img: ClientImg1,
      name: "Alee Zebat",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      img: ClientImg1,
      name: "Alee Zebat",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      img: ClientImg1,
      name: "Alee Zebat",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      img: ClientImg1,
      name: "Alee Zebat",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
  ];
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
          {items.map((item, i) => (
            <div className="clientreview">
              <img src={item.img} className="customerimg" alt="img" />
              <h5 className="customername">{item.name}</h5>
              <Rating name="read-only" value={value} size="small" readOnly />
              <p className="customerdescription">{item.description}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default CustomerReviews;
