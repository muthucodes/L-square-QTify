// import styles from "./Carousel.module.css";
import Card from "../Card/Card";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";
import { Tooltip } from "@mui/material";
// import { ReactComponent as PrevIcon } from "../../assets/leftNavigation.svg";
// import { ReactComponent as NextIcon } from "../../assets/rightNavigation.svg";

export default function Carousel({ carouselData }) {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={"auto"}
        spaceBetween={30}
      >
        {carouselData !== null &&
          carouselData.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Tooltip
                  title={
                    item.songs
                      ? `${item.songs.length} Songs`
                      : `${item.likes} Likes`
                  }
                >
                  <div>
                    <Card
                      title={item.title}
                      image={item.image}
                      follows={item.follows}
                      likes={item.likes}
                    />
                  </div>
                </Tooltip>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
