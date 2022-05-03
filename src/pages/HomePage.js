import * as React from "react";
import { Card, CardContent, Typography, Box, Container } from "@mui/material";
import HeaderImg from "../assets/photos/sunset.jpg";
import homepageImgGalleryData from "../data/homepageImageGallery.json";
import BottomNavLabel from "../components/navigation/BottomNavLabel";
// testimonies
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// framer motion
import { motion, AnimatePresence } from "framer-motion";
import "../App.css";

export default function HomePage() {
  const John = {
    name: "John",
    review:
      "I love how Jonathan and Juan really took the time to make sure they were making my home look exactly the way I wanted. Everything turned out phenomenal.",
    img: "https://live.staticflickr.com/65535/51995160128_ef797fb6dd_z.jpg",
  };

  const Stacy = {
    name: "Stacy",
    review:
      "Jonathan and Juan are amazing! They constructed the PERFECT luxury bathroom for me. I'd recommend them to anyone in the valley!",
    img: "https://live.staticflickr.com/65535/51995653115_8d5de6ed7f_z.jpg",
  };

  const Robin = {
    name: "Robin",
    review:
      "My Kitchen remodel turned out amazing! I couldn't be happier with the results, they really went above and beyond to make everything look so great!",
    img: "https://live.staticflickr.com/65535/51995387404_bd22ae445c_z.jpg",
  };

  const [name, setName] = React.useState(John.name);
  const [review, setReview] = React.useState(John.review);
  const [custImg, setCustImg] = React.useState(John.img);

  const flipReviews = () => {
    if (name === "Stacy") {
      setName(John.name);
      setReview(John.review);
      setCustImg(John.img);
    } else if (name === "John") {
      setName(Robin.name);
      setReview(Robin.review);
      setCustImg(Robin.img);
    } else {
      setName(Stacy.name);
      setReview(Stacy.review);
      setCustImg(Stacy.img);
    }
  };

  // center card style
  const cardStyles = {
    borderRadius: "5px 25px 5px 25px",
    display: "grid",

    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.5)",
    margin: "auto",
    backgroundColor: "rgba(255, 255, 255, 0.53)",
    padding: 2,
    spacing: 12,
  };

  const topImageContainerStyles = {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    justifyItems: "center",
    width: "100%",
    marginTop: "12rem",
    display: { xs: "none", md: "flex" },
  };

  const topImageStyles = {
    width: "100%",
    height: "55%",
    position: "absolute",
    zIndex: -1,
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.5)",
  };

  const introCardContentContainerStyles = {
    display: "flex",
    gap: 2,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    justifyItems: "center",
    marginRight: "10rem",
    width: "90%",
  };
  const introContentCardStyles = {
    borderRadius: "5px 25px 5px 25px",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.5)",
    margin: 5,
    padding: 2,
    backgroundColor: "rgba(255, 255, 255, 0.53)",
    display: { xs: "grid", md: "grid" },
  };

  const customerReviewContainerStyles = {
    backgroundColor: "gray",
    width: "95%",
    borderRadius: 1.5,
    display: "flex",
    justifyContent: "space-around",
    alignContent: "center",
    justifyItems: "center",
    alignItems: "center",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.5)",
    marginBottom: 10,
  };
  const customerReviewCardStyles = {
    borderRadius: "5px 25px 5px 25px",
    display: "grid",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.4)",
    margin: "10px auto 10px auto",
    backgroundColor: "rgba(255, 255, 255, 0.53)",
    minWidth: "100%",
  };

  const horizontalImgGalleryContainerStyles = {
    position: "absolute",
    width: "100%",
    bgcolor: "accordion.main",
    left: 0,
    right: 0,
    display: { xs: "none", md: "grid" },
  };
  const spacerStyles = {
    margin: "0 0 -50px 0",
    height: "100px",
    bgcolor: "primary.dark",
  };

  return (
    <AnimatePresence>
      <motion.div
        transition={{ delay: 0.17 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Box
          id="desktopViewHomepage"
          sx={{ display: { xs: "none", md: "grid" } }}
        >
          <Box id="imageContainer" sx={topImageContainerStyles}>
            <img
              style={topImageStyles}
              src={HeaderImg}
              alt="
        desert landscape"
            />{" "}
            <Box id="cardContainer" sx={{ position: "absolute" }}>
              <Card sx={cardStyles}>
                <CardContent>
                  <div>
                    <Typography variant="h4">
                      {" "}
                      Phoenix General Contractors
                    </Typography>
                  </div>

                  <div>
                    <Typography variant="h4" color="success.main">
                      {" "}
                      Our quality of service is BEYOND comparison!
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Box>
          </Box>
          <Box
            id="pageContentContainer"
            sx={{
              marginTop: "20rem",
              display: "grid",
              gridTemplateColumns: "auto",
            }}
          >
            <Box
              id="introContentContainer"
              sx={introCardContentContainerStyles}
            >
              <div className="hexagonTop" id="hexagonTop"></div>
              <Box>
                <Card sx={introContentCardStyles}>
                  <CardContent
                    sx={{
                      borderRadius: "5px 25px 5px 25px",
                      boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.5)",
                      margin: 1,
                      backgroundColor: "rgba(255, 255, 255, 0.53)",
                    }}
                  >
                    <Typography variant="h4" color="secondary.main">
                      {" "}
                      Who are we?
                    </Typography>
                  </CardContent>{" "}
                  <CardContent>
                    {" "}
                    <Typography>
                      We're a team of Phoenix locals providing only the BEST
                      general contracting services in the valley. We provide all
                      types of services to our customers. From home remodels,
                      plumbing to HVAC. Find out for yourself why we remain as
                      one of Phoenix's preferred General Contractors. Look
                      around our site to find out more about what Beyond
                      Services has to offer. Feel free to use our contact form
                      or give us a call if you want us to help turn your house
                      into the perfect home!
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
              <Box>
                <Box sx={{ position: "relative" }}>
                  <Card
                    sx={{
                      borderRadius: "50%",
                      width: "260px",
                      height: "260px",
                      position: "relative",
                      top: "12rem",
                      left: "2rem",
                      border: "5px #801313 solid;",
                      boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.6)",
                    }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                      alt="pool"
                      style={{
                        width: "260px",
                        height: "260px",
                        borderRadius: "50%",
                      }}
                    />
                  </Card>
                  <Card
                    sx={{
                      borderRadius: "50%",
                      width: "350px",
                      height: "350px",
                      position: "relative",
                      bottom: "15rem",
                      left: "9rem",
                      zIndex: -1,
                      border: "5px #000000 solid;",
                      boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.6)",
                    }}
                  >
                    {" "}
                    <img
                      src="https://images.unsplash.com/flagged/photo-1573168710465-7f7da9a23a15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
                      alt="pool"
                      style={{
                        width: "350px",
                        height: "350px",
                        borderRadius: "50%",
                      }}
                    />
                  </Card>
                </Box>
              </Box>{" "}
              <div className="hexagonBottom" id="hexagonBottom"></div>
            </Box>
            <Box id="spacer" sx={spacerStyles}>
              {" "}
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              <Box sx={customerReviewContainerStyles}>
                {" "}
                <ArrowBackIosIcon onClick={flipReviews} />
                <Box>
                  {" "}
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
                        <img
                          src={`${custImg}`}
                          alt={`${name}`}
                          style={{
                            width: "115px",
                            height: "115px",
                            borderRadius: "50%",
                            boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.6)",
                          }}
                        />
                      </Container>{" "}
                      <Container sx={{ width: "80%" }}>
                        <Typography> {name}</Typography>
                        <Typography variant="caption"> {review}</Typography>
                      </Container>
                      <div>
                        <ul style={{ display: "inline-flex" }}>
                          <li
                            style={{
                              marginRight: 20,
                            }}
                          >
                            {" "}
                          </li>
                          <li
                            style={{
                              marginRight: 20,
                            }}
                          >
                            {" "}
                          </li>
                          <li> </li>
                        </ul>
                      </div>{" "}
                    </CardContent>
                  </Card>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    <Typography variant="subtitle2">
                      {" "}
                      Read more customer testimonials{" "}
                      <a
                        style={{ textDecoration: "none" }}
                        href="/customerTestimonials"
                      >
                        {" "}
                        here{" "}
                      </a>
                    </Typography>
                  </Box>
                </Box>
                <ArrowForwardIosIcon onClick={flipReviews} />
              </Box>
            </Box>{" "}
          </Box>{" "}
        </Box>
        {/*horizontal image gallery in seperate container on bottom bc it keeps getting pushed to the top */}
        <Box
          id="horizontalImgGalleryContainer"
          sx={horizontalImgGalleryContainerStyles}
        >
          <ul
            style={{
              marginLeft: 0,
              padding: 0,
              whiteSpace: "nowrap",
              width: "100%",
              overflowX: "auto",
            }}
          >
            {homepageImgGalleryData.homepageImgGalleryData.map((item) => (
              <a href="#" key={item.img}>
                <img
                  src={item.img}
                  alt={item.alt}
                  width="220"
                  height="220"
                  style={{ margin: " 0 7px" }}
                />
              </a>
            ))}{" "}
          </ul>{" "}
          <Box id="spacer" sx={spacerStyles}></Box>
          <BottomNavLabel />
        </Box>{" "}
        {/*MOBILE HOMEPAGE*/}
        {/*The desktop page isn't working on mobile so here we are. writing more code. ITS NOT DRY BUT IT'LL WORK*/}
        <Box
          id="mobileHomepageContainer"
          sx={{
            display: { xs: "grid", md: "none" },
            gridTemplateColumns: "1fr",
            gridTemplateRows: "auto auto",
            gap: "3rem",
          }}
        >
          <Box
            id="mobileHeaderImageContainer"
            sx={{
              margin: "-15% -5%",
              zIndex: -1,
              position: "relative",
            }}
          >
            <img
              width="100%"
              style={{
                boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.5)",
              }}
              src={HeaderImg}
              alt="
        desert landscape"
            />
          </Box>
          <Box
            id="cardContainer"
            sx={{
              position: "absolute",
            }}
          >
            <Card
              sx={{
                width: "70%",
                borderRadius: "5px 25px 5px 25px",
                display: "grid",
                alignContent: "center",
                justifyContent: "center",
                textAlign: "center",
                boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.5)",
                margin: "auto",
                backgroundColor: "rgba(255, 255, 255, 0.53)",
                padding: 2,
                spacing: 12,
              }}
            >
              <CardContent>
                <div>
                  <Typography variant="h6">
                    {" "}
                    Phoenix General Contractors
                  </Typography>
                </div>

                <div>
                  <Typography variant="h6" color="success.main">
                    {" "}
                    Our quality of service is BEYOND comparison!
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Box>
          <br />
          <Box
            id="imageContainer"
            sx={{ display: "flex", gap: 2, justifyContent: "space-evenly" }}
          >
            <img
              src="https://live.staticflickr.com/65535/51992455012_077db39e1b_z.jpg"
              alt="kitchen remodel"
              width="150px"
              height="150px"
              style={{
                borderRadius: "50%",
                boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.6)",
              }}
            />
            <img
              src="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt="tub"
              width="150px"
              height="150px"
              style={{
                borderRadius: "50%",
                boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.6)",
              }}
            />
          </Box>
          <Box id="identityContainer">
            <Card sx={cardStyles}>
              <CardContent
                sx={{
                  borderRadius: "5px 25px 5px 25px",
                  boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.7)",
                  margin: 1,
                  backgroundColor: "secondary.main",
                }}
              >
                <Typography variant="h5" color="white">
                  {" "}
                  Who are we?
                </Typography>
              </CardContent>{" "}
              <CardContent>
                {" "}
                <Typography>
                  We're a team of Phoenix locals providing only the BEST general
                  contracting services in the valley. We provide all types of
                  services to our customers. From home remodels, plumbing to
                  HVAC. Find out for yourself why we remain as one of Phoenix's
                  preferred General Contractors. Look around our site to find
                  out more about what Beyond Services has to offer. Feel free to
                  use our <a href="/contact">contact form</a> or give us a call
                  if you want us to help turn your house into the perfect home!
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box
            id="imageContainer"
            sx={{ display: "flex", gap: 2, justifyContent: "space-evenly" }}
          >
            {" "}
            <img
              src="https://images.unsplash.com/photo-1521783593447-5702b9bfd267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1804&q=80"
              alt="bathroom"
              width="150px"
              height="150px"
              style={{
                borderRadius: "50%",
                boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.6)",
              }}
            />
            <img
              src="https://images.unsplash.com/flagged/photo-1573168710465-7f7da9a23a15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt="kitchen remodel"
              width="150px"
              height="150px"
              style={{
                borderRadius: "50%",
                boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.6)",
              }}
            />
          </Box>
          <Box id="whyUsContainer">
            <Card sx={cardStyles}>
              <CardContent
                sx={{
                  borderRadius: "5px 25px 5px 25px",
                  boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.7)",
                  margin: 1,
                  backgroundColor: "secondary.main",
                }}
              >
                <Typography variant="h5" color="white">
                  {" "}
                  Why choose us?
                </Typography>
              </CardContent>{" "}
              <CardContent>
                {" "}
                <Typography>
                  Finding the right person to do work on your home is a big
                  deal. Our team at Beyond Service is dedicated to delivering
                  high quality results to our customers by placing a high value
                  on open communication and attention to detail. We do our best
                  to understand each persons specific needs and provide results
                  beyond expectations. Check out past projects in our{" "}
                  <a href="projectGalleryMobile">photo gallery</a> and read
                  through some of our{" "}
                  <a href="/customerTestimonials"> customer testimonials</a> to
                  find what Beyond Service can offer you.
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box
            id="imageContainer"
            sx={{ display: "flex", gap: 2, justifyContent: "space-evenly" }}
          >
            {" "}
            <img
              src="https://images.unsplash.com/photo-1541604193435-22287d32c2c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              alt="bathroom"
              width="150px"
              height="150px"
              style={{
                borderRadius: "50%",
                boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.6)",
              }}
            />
            <img
              src="https://images.unsplash.com/photo-1549407294-0bf7c458df48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
              alt="kitchen remodel"
              width="150px"
              height="150px"
              style={{
                borderRadius: "50%",
                boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.6)",
              }}
            />
          </Box>
          <hr size="1" width="100%" color="gray" />
          <BottomNavLabel />
        </Box>{" "}
      </motion.div>
    </AnimatePresence>
  );
}
