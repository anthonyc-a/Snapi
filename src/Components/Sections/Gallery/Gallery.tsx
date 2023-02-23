import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper";

// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module

import GalleryItem from "./GalleryItem/GalleryItem";

import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="gallery">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        className="swiper-container"
        autoplay
        navigation
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <GalleryItem
            image="/1.jpg"
            buttonText="People to Influence?"
            description="Share your social media, contact and scheduling calendar to grow your network."
          />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryItem
            image="/2.jpg"
            buttonText="Crowds to Please? "
            description="Streamline event experiences from promotion through to ticket sales and venue access."
          />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryItem
            image="/3.jpg"
            buttonText="Customers to Serve?"
            description="Integrate front of house reservations, orders, loyalty rewards and payment."
          />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryItem
            image="/4.jpg"
            buttonText="Creativity to Share?"
            description="Share your creative power directly with  audiences.  Add streaming, social sharing, take bookings and build a fan club."
          />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryItem
            image="/5.jpg"
            buttonText="Planet to Save?"
            description="We have your back. Talk to use about a discount for NGO’s "
          />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryItem
            image="/6.jpg"
            buttonText="Need your Campaign to stand out? "
            description="Turn OOH media assets into digital touchpoints and track engagement in realtime."
          />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryItem
            image="/7.jpg"
            buttonText="Crowds to Please? "
            description="Streamline event experiences from promotion through to ticket sales and venue access."
          />
        </SwiperSlide>
        <SwiperSlide>
          <GalleryItem
            image="/8.jpg"
            buttonText="Crowds to Please? "
            description="Streamline event experiences from promotion through to ticket sales and venue access."
          />
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default Gallery;
