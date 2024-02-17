import { Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "swiper/css";
import "swiper/css/effect-creative";
import styles from "./carousel.module.scss";
import {
  Autoplay,
  EffectCreative,
  Navigation,
  Pagination,
} from "swiper/modules";

import slide_image_1 from "../../assets/FE/img1.svg";
import slide_image_2 from "../../assets/FE/img2.svg";
import slide_image_3 from "../../assets/FE/img3.svg";
import slide_image_4 from "../../assets/FE/img4.svg";
import slide_image_5 from "../../assets/FE/img5.svg";
import slide_image_6 from "../../assets/FE/img6.svg";
import slide_image_7 from "../../assets/FE/img7.svg";

function CarouselFE() {
  return (
    <div className={styles.container}>
      <Typography variant="h5" sx={{ fontWeight: 600, paddingBottom: "10px" }}>
        Front-End
      </Typography>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        modules={[EffectCreative, Pagination, Navigation, Autoplay]}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-125%", 0, -800],
            rotate: [0, 0, -90],
          },
          next: {
            shadow: true,
            translate: ["125%", 0, -800],
            rotate: [0, 0, 90],
          },
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{ delay: 500 }}
        className="swiper_container"
        style={{ height: "170px", paddingBottom: "5px" }}
      >
        <SwiperSlide
          style={{
            textAlign: "center",
            background: "#DDE6ED",
            width: "45%",
            height: "90%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "8px",
          }}
        >
          <img src={slide_image_1} width={100} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide
          style={{
            textAlign: "center",
            background: "#DDE6ED",
            width: "45%",
            height: "90%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "8px",
          }}
        >
          <img src={slide_image_2} width={100} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide
          style={{
            textAlign: "center",
            background: "#DDE6ED",
            width: "45%",
            height: "90%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "8px",
          }}
        >
          <img src={slide_image_3} width={100} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide
          style={{
            textAlign: "center",
            background: "#DDE6ED",
            width: "45%",
            height: "90%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "8px",
          }}
        >
          <img src={slide_image_4} width={100} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide
          style={{
            textAlign: "center",
            background: "#DDE6ED",
            width: "45%",
            height: "90%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "8px",
          }}
        >
          <img src={slide_image_5} width={100} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide
          style={{
            textAlign: "center",
            background: "#DDE6ED",
            width: "45%",
            height: "90%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "8px",
          }}
        >
          <img src={slide_image_6} width={100} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide
          style={{
            textAlign: "center",
            background: "#DDE6ED",
            width: "45%",
            height: "90%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "8px",
          }}
        >
          <img src={slide_image_7} width={100} alt="slide_image" />
        </SwiperSlide>
        {/* <div
          className="slider-controler"
          style={{ position: "relative", width: "100%" }}
        >
          <div>
            <ArrowBackIosNewIcon
              name="arrow-back-outline"
              className="swiper-button-prev slider-arrow"
              sx={{
                left: "-4px",
                padding: "4px 0",
                color: "#B9B4C7",
                "&:hover": {
                  color: "white",
                  padding: "2px 0",
                },
                "&:active": {
                  color: "#F3D7CA",
                  padding: 0,
                },
              }}
            />
          </div>
          <div>
            <ArrowForwardIosIcon
              name="arrow-forward-outline"
              className="swiper-button-next slider-arrow"
              sx={{
                padding: "4px 0",
                color: "#B9B4C7",
                "&:hover": {
                  color: "white",
                  padding: "2px 0",
                },
                "&:active": {
                  color: "#F3D7CA",
                  padding: 0,
                },
              }}
            />
          </div>
        </div> */}
      </Swiper>
    </div>
  );
}

export default CarouselFE;
