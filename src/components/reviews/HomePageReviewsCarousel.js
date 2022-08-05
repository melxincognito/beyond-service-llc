import React from "react";
import "./HomePageReviewsCarousel.css";
import { Card, CardContent, Container, Typography, Box } from "@mui/material";

function ReviewCard({ Img, name, review }) {
  const customerReviewCardStyles = {
    borderRadius: "5px 25px 5px 25px",
    display: "grid",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.4)",
    margin: "10px auto 10px auto",
    backgroundColor: "rgba(255, 255, 255, 0.53)",
    width: "90%",
  };

  const imageStyles = {
    width: "115px",
    height: "115px",
    borderRadius: "50%",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.6)",
  };
  return (
    <Card sx={customerReviewCardStyles}>
      {" "}
      <CardContent>
        <Container
          sx={{
            margin: "5px auto",
            minWidth: "100%",
          }}
        >
          {" "}
          <img src={`${Img}`} alt={`${name}`} style={imageStyles} />
        </Container>{" "}
        <Container sx={{ width: "80%" }}>
          <Typography> {name}</Typography>
          <Typography variant="caption"> {review}</Typography>
        </Container>
      </CardContent>
    </Card>
  );
}

export default function HomePageReviewsCarousel() {
  const John = {
    name: "John",
    review:
      "I love how Jonathan and Juan really took the time to make sure they were making my home look exactly the way I wanted. Everything turned out phenomenal.",
    Img: "https://live.staticflickr.com/65535/51995160128_ef797fb6dd_z.jpg",
  };

  const Stacy = {
    name: "Stacy",
    review:
      "Jonathan and Juan are amazing! They constructed the PERFECT luxury bathroom for me. I'd recommend them to anyone in the valley!",
    Img: "https://live.staticflickr.com/65535/51995653115_8d5de6ed7f_z.jpg",
  };

  const Robin = {
    name: "Robin",
    review:
      "My Kitchen remodel turned out amazing! I couldn't be happier with the results, they really went above and beyond to make everything look so great!",
    Img: "https://live.staticflickr.com/65535/51995387404_bd22ae445c_z.jpg",
  };

  //styles variables

  const readMoreTestimonialsBoxStyles = {
    display: "flex",
    justifyContent: "center",
    color: "white",
    position: "relative",
    top: 4,
  };

  return (
    <div>
      <div>
        <div className="carousel">
          <ul className="slides">
            <input type="radio" name="radio-buttons" id="img-1" checked />
            <li className="slide-container">
              <div className="slide-image">
                <ReviewCard {...John} />
              </div>
              <div className="carousel-controls">
                <label for="img-2" className="next-slide">
                  <span>&rsaquo; </span>
                </label>
              </div>
            </li>
            <input type="radio" name="radio-buttons" id="img-2" />

            <li className="slide-container">
              <div className="slide-image">
                <ReviewCard {...Stacy} />
              </div>
              <div className="carousel-controls">
                <label for="img-1" className="prev-slide">
                  <span>&lsaquo;</span>
                </label>
                <label for="img-3" className="next-slide">
                  <span>&rsaquo;</span>
                </label>
              </div>
            </li>

            <input type="radio" name="radio-buttons" id="img-3" />
            <li className="slide-container">
              <div className="slide-image">
                <ReviewCard {...Robin} />
              </div>
              <div className="carousel-controls">
                <label for="img-2" className="prev-slide">
                  <span>&lsaquo;</span>
                </label>
                <label for="img-1" className="next-slide">
                  <span>&rsaquo;</span>
                </label>
              </div>
            </li>
            <div className="carousel-dots">
              <label
                for="img-1"
                className="carousel-dot"
                id="img-dot-1"
              ></label>
              <label
                for="img-2"
                className="carousel-dot"
                id="img-dot-2"
              ></label>
              <label
                for="img-3"
                className="carousel-dot"
                id="img-dot-3"
              ></label>
            </div>
          </ul>
        </div>
      </div>
      <Box
        className="read-more-testimonials-box"
        sx={readMoreTestimonialsBoxStyles}
      >
        <Typography variant="subtitle2" color="black">
          Read more customer testimonials by clicking
          <a style={{ textDecoration: "none" }} href="/customerTestimonials">
            {" "}
            here{" "}
          </a>
        </Typography>
      </Box>
    </div>
  );
}
