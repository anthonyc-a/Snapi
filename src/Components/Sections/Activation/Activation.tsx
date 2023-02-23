import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module

import "./Activation.css";

const Activation = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsSmallScreen(mediaQuery.matches);

    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setIsSmallScreen(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="activation">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        className="swiper-container"
        pagination
        autoplay
        slidesPerView={!isSmallScreen ? 2 : 1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="activation-item">
            <h2>
              <span>1</span> Create a Card
            </h2>
            <p>
              Make it memorable as this is the first thing most people will see.
              Upload your own image or use UnSplash.{" "}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="activation-item">
            <h2>
              <span>2</span> Add Widgets
            </h2>
            <p>
              Add social sharing, media, scheduling, ticketing, payment and
              other functionality from our growing library of widgets.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="activation-item">
            <h2>
              <span>3</span> Activate Touchpoints
            </h2>
            <p>
              Use an omnichannel approach to reach audiences through social
              media, web, computer vision and QR code, with more to come.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="activation-item">
            <h2>
              <span>4</span> Track Engagement
            </h2>
            <p>
              Watch your audience grow with realtime analytics and engagement
              funnel.
            </p>
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default Activation;
