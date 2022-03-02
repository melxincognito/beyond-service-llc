import React from "react";

import {
  Card,
  CardContent,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

export default function ProjectGalleryPage() {
  const mainCardStyles = {
    bgcolor: "secondary.light",
    borderRadius: 5,
    padding: 2,
  };

  const headerCardStyles = {
    display: "flex",
    justifyContent: "center",
    margin: 2,
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.2)",
    borderRadius: "4px 25px 4px 25px",
    bgcolor: "secondary.light",
  };

  const mainContainerStyles = {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    margin: "auto",
    justifyContent: "space-around",
  };

  const galleryStyles = {
    width: 500,
    height: 450,
    overflowY: "scroll",
  };

  const galleryTitleStyles = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          transition={{ delay: 0.17 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Card sx={mainCardStyles}>
            <CardContent sx={headerCardStyles}>
              <Typography variant="h4"> Project Gallery</Typography>
            </CardContent>
            <Box sx={mainContainerStyles}>
              <Box sx={galleryStyles}>
                <Box sx={galleryTitleStyles}>
                  <Typography variant="h6"> Bathrooms</Typography>
                </Box>

                <ImageList variant="masonry" cols={3} gap={8}>
                  {itemDataBathrooms.map((item) => (
                    <ImageListItem key={item.img}>
                      <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Box>

              <Box sx={galleryStyles}>
                <Box sx={galleryTitleStyles}>
                  <Typography variant="h6"> Kitchen Remodels</Typography>
                </Box>

                <ImageList variant="masonry" cols={3} gap={8}>
                  {itemDataRemodels.map((item) => (
                    <ImageListItem key={item.img}>
                      <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Box>
              <Box sx={galleryStyles}>
                <Box sx={galleryTitleStyles}>
                  <Typography variant="h6"> Project 3</Typography>
                </Box>

                <ImageList variant="masonry" cols={3} gap={8}>
                  {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                      <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Box>
              <Box sx={galleryStyles}>
                <Box sx={galleryTitleStyles}>
                  <Typography variant="h6"> Project 4</Typography>
                </Box>
                <ImageList variant="masonry" cols={3} gap={8}>
                  {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                      <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Box>
            </Box>
          </Card>
          <hr size="1" width="100%" color="gray" />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
];

const itemDataBathrooms = [
  {
    img: "https://images.unsplash.com/photo-1571781418606-70265b9cce90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    title: "Bathroom",
  },
  {
    img: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    title: "Tub",
  },
  {
    img: "https://images.unsplash.com/photo-1519868343531-805e97cbda3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGx1eHVyeSUyMHNob3dlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60",
    title: "Another Tib",
  },
  {
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    title: "Title Tub",
  },
  {
    img: "https://images.unsplash.com/photo-1564540583246-934409427776?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2053&q=80",
    title: "Tub Stuff",
  },
  {
    img: "https://images.unsplash.com/photo-1561817223-f67e69e6bd6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80",
    title: "Another Tub",
  },
  {
    img: "https://images.unsplash.com/photo-1523772354886-34a1dc2f72e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80",
    title: "Standing Shower",
  },
  {
    img: "https://images.unsplash.com/photo-1512916958891-fcf61b2160df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    title: "Bathroom Corner",
  },
  {
    img: "https://images.unsplash.com/photo-1638799869566-b17fa794c4de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    title: "Pool",
  },
  {
    img: "https://images.unsplash.com/photo-1595515770107-dd8e21146361?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1281&q=80",
    title: "Weird Toilet",
  },
  {
    img: "https://images.unsplash.com/photo-1609280069904-ab36feb3f20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
    title: "Another Shower",
  },
];

const itemDataRemodels = [
  {
    img: "https://images.unsplash.com/flagged/photo-1573168710465-7f7da9a23a15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1601760561441-16420502c7e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJlbW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    title: "Square Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    title: "NOther one",
  },
  {
    img: "https://images.unsplash.com/photo-1560440021-33f9b867899d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHJlbW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1591924450983-b8f7587ea332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    title: "Luxury Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1610733374054-59454fe657cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGx1eHVyeSUyMGtpdGNoZW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    title: "Island Counter",
  },
  {
    img: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGx1eHVyeSUyMGtpdGNoZW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    title: "More Counters",
  },
  {
    img: "https://images.unsplash.com/photo-1586208958839-06c17cacdf08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGx1eHVyeSUyMGtpdGNoZW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    title: "Green Thing",
  },
  {
    img: "https://images.unsplash.com/photo-1567767326925-e2047bf469d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGx1eHVyeSUyMGtpdGNoZW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    title: "Island View",
  },
  {
    img: "https://images.unsplash.com/photo-1552155235-a68a6c02d512?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGx1eHVyeSUyMGtpdGNoZW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    title: "Triangular Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1514237487632-b60bc844a47d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGx1eHVyeSUyMGtpdGNoZW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    title: "Pantry",
  },
  {
    img: "https://images.unsplash.com/photo-1590311825160-a6263b093200?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBhbnRyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    title: "Another Pantry",
  },
];
