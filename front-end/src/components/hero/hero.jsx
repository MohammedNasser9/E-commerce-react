import { Box, Container, Typography, Button, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./heroStyle.css";

export default function Hero() {
  //  Array for Swiper slides
  const slides = [
    {
      image: "/watch.png",
      title: "MEN-WOMEN",
      sale: "45% OFF",
    },
    {
      image: "/banner-15.jpg",
      title: "MEN",
      sale: "30% OFF",
    },
    {
      image: "/banner-25.jpg",
      title: "WOMEN",
      sale: "20% OFF",
    },
  ];

  //  Array for right side mini banners
  const smallBanners = [
    {
      image: "/banner-16.jpg",
      season: "SUMMER",
      sale: "SALE 20% OFF",
    },
    {
      image: "/banner-17.jpg",
      season: "WINTER",
      sale: "SALE 25% OFF",
    },
  ];

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 2,
      }}
    >
      {/*  Left Side: Swiper for main banners */}
      <Swiper
        pagination={{ dynamicBullets: true }}
        modules={[Pagination]}
        className="mySwiper"
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                flex: 2,
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: {xs:'65% center', sm:"center"},
                borderRadius: 2,
                p: 4,
                color: "#000",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                minHeight: 340,
              }}
            >
              {/* Small heading */}
              <Typography variant="subtitle2" sx={{ letterSpacing: 2 }}>
                LIFESTYLE COLLECTION
              </Typography>

              {/* Main title (Men/Women) */}
              <Typography variant="h4" fontWeight="bold" sx={{ mt: 1 }}>
                {slide.title}
              </Typography>

              {/* Sale info */}
              <Typography variant="h6" sx={{ mt: 1 }}>
                SALE UP TO{" "}
                <Box
                  component="span"
                  sx={{ color: "#ff3b3b", fontWeight: "600" }}
                >
                  {slide.sale}
                </Box>
              </Typography>

              {/* Free shipping text */}
              <Typography variant="body2" color="primary" sx={{ mt: 1 }}>
                Get free shipping on orders over $99.00
              </Typography>

              {/* Call-to-action button */}
              <Button
                variant="contained"
                sx={{
                  color: "#fff",
                  background: "#000",
                  mt: 2,
                  width: "fit-content",
                  borderRadius: "25px",
                  px: 3,
                  textTransform: "capitalize",
                }}
              >
                Shop Now
              </Button>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Right Side: Two mini banners */}
      <Stack
        flex={1}
        sx={{
          display:{xs:'none' , sm:'flex'},
          flexDirection: { sm: "row", md: "column" },
          gap: "14px",
        }}
      >
        {smallBanners.map((banner, index) => (
          <Box
            key={index}
            sx={{
              backgroundImage: `url(${banner.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center 90%",
              borderRadius: 2,
              p: 3,
              color: "#000",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minHeight: { xs: 200, md: 195 },
              minWidth: 250,
              flexGrow: { xs: 1, md: 0 },
            }}
          >
            {/* Heading */}
            <Typography variant="subtitle2" sx={{ letterSpacing: 1 }}>
              NEW ARRIVALS
            </Typography>

            {/* Season name */}
            <Typography variant="h5" fontWeight="bold">
              {banner.season}
            </Typography>

            {/* Sale text */}
            <Typography variant="body2">{banner.sale}</Typography>

            {/* Shop now link */}
            <Stack
              direction="row"
              alignItems="center"
              spacing={0.5}
              sx={{ mt: 1, cursor: "pointer" }}
            >
              <Typography variant="body2" sx={{ opacity: .65 }}>
                Shop now
              </Typography>
              <ArrowForwardIcon fontSize="small" />
            </Stack>
          </Box>
        ))}
      </Stack>
    </Container>
  );
}
