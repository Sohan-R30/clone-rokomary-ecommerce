// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

import bookSliderimg1 from "../../assets/books/bookslider1.png"
import bookSliderimg2 from "../../assets/books/bookslider2.png"
import bookSliderimg3 from "../../assets/books/bookslider3.webp"
import bookSliderimg4 from "../../assets/books/bookslider4.webp"
import bookSliderimg5 from "../../assets/books/bookslider5.webp"


const BookSlider = () => {
    return (
        <div className="mx-auto text-center max-w-7xl">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={bookSliderimg1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bookSliderimg2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bookSliderimg3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bookSliderimg4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bookSliderimg5} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default BookSlider;