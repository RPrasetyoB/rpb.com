import { Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./carousel.module.scss";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

import slide_image_1 from "../../assets/BE/img1.svg";
import slide_image_2 from "../../assets/BE/img2.svg";
import slide_image_3 from "../../assets/BE/img3.svg";
import slide_image_4 from "../../assets/BE/img4.svg";
import slide_image_5 from "../../assets/BE/img5.svg";
import slide_image_6 from "../../assets/BE/img6.svg";
import slide_image_7 from "../../assets/BE/img7.svg";
import slide_image_8 from "../../assets/BE/img8.svg";
import slide_image_9 from "../../assets/BE/img9.svg";
import slide_image_10 from "../../assets/BE/img10.svg";
import { ModeState } from "../../utils/GlobalState";
import { useContext } from "react";

function CarouselBE() {
  const { darkMode } = useContext(ModeState);
  return (
    <div className={`${darkMode ? style.container : style.containerLight}`}>
      <Typography variant="h5" sx={{ fontWeight: 600, paddingBottom: "10px" }}>
        Back-End
      </Typography>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        autoplay={{ delay: 2000 }}
        className="swiper_container"
        style={{ height: "170px", paddingBottom: "5px" }}
      >
        <SwiperSlide
          style={{
            textAlign: "center",
            background: darkMode ? "#DDE6ED" : "#FDF0D1",
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
            background: darkMode ? "#DDE6ED" : "#FDF0D1",
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
            background: darkMode ? "#DDE6ED" : "#FDF0D1",
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
            background: darkMode ? "#DDE6ED" : "#FDF0D1",
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
            background: darkMode ? "#DDE6ED" : "#FDF0D1",
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
            background: darkMode ? "#DDE6ED" : "#FDF0D1",
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
            background: darkMode ? "#DDE6ED" : "#FDF0D1",
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
        <SwiperSlide
          style={{
            textAlign: "center",
            background: darkMode ? "#DDE6ED" : "#FDF0D1",
            width: "45%",
            height: "90%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "8px",
          }}
        >
          <img src={slide_image_8} width={100} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide
          style={{
            textAlign: "center",
            background: darkMode ? "#DDE6ED" : "#FDF0D1",
            width: "45%",
            height: "90%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "8px",
          }}
        >
          <img src={slide_image_9} width={100} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide
          style={{
            textAlign: "center",
            background: darkMode ? "#DDE6ED" : "#FDF0D1",
            width: "45%",
            height: "90%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "8px",
          }}
        >
          <img src={slide_image_10} width={100} alt="slide_image" />
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

export default CarouselBE;
