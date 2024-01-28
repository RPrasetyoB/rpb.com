import { Navigation, Pagination, EffectCube, Autoplay } from "swiper/modules";
import { Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/effect-cube";
import styles from "./carousel.module.scss";

import slide_image_1 from "../../assets/utils/img1.svg";
import slide_image_2 from "../../assets/utils/img2.svg";
import slide_image_3 from "../../assets/utils/img3.svg";
import slide_image_4 from "../../assets/utils/img4.svg";
import slide_image_5 from "../../assets/utils/img5.svg";
import slide_image_6 from "../../assets/utils/img6.svg";
import slide_image_7 from "../../assets/utils/img7.svg";
import slide_image_8 from "../../assets/utils/img6.svg";
import slide_image_9 from "../../assets/utils/img7.svg";

function CarouselCube() {
  return (
    <div className={styles.container}>
      <Typography variant="h5" sx={{ fontWeight: 600, paddingBottom: "10px" }}>
        Others
      </Typography>
      <Swiper
        speed={1000}
        pagination={false}
        effect="cube"
        grabCursor={true}
        loop={true}
        modules={[EffectCube, Pagination, Navigation, Autoplay]}
        autoplay={{ delay: 500 }}
        className="swiper_container"
        style={{ height: "180px", width:"180px", paddingBottom: "5px" }}
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
            borderRadius: "4px",
            border:"none"
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
            borderRadius: "4px",
            border:"none"
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
            borderRadius: "4px",
            border:"none"
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
            borderRadius: "4px",
            border:"none"
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
            borderRadius: "4px",
            border:"none"
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
            borderRadius: "4px",
            border:"none"
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
            borderRadius: "4px",
            border:"none"
          }}
        >
          <img src={slide_image_7} width={100} alt="slide_image" />
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
            borderRadius: "4px",
            border:"none"
          }}
        >
          <img src={slide_image_8} width={100} alt="slide_image" />
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
            borderRadius: "4px",
            border:"none"
          }}
        >
          <img src={slide_image_9} width={100} alt="slide_image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CarouselCube;
