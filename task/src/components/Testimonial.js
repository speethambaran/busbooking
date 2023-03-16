import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideNextButton from "./SwiperButton";

import Das from "../assets/Das.jpeg";
import Abe from "../assets/bruhAbe.jpeg";
import Man from "../assets/man1.jpeg";

const Testimonial = () => {
  return (
    <div className="w-full h-[600px] flex justify-center ">
      <div className="w-[1000px] h-[300px] mt-[100px] bg-lime-500 ">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="h-[300px] ">
              <div className="flex justify-center mt-3">
                <img src={Das} alt="" className="w-20 rounded-[100%] " />
              </div>
              <p className="mt-5 mx-[100px]">
                I appreciated the clear and detailed information provided on
                this bus booking site, which helped me make an informed
                decision. This bus booking site offered a wide range of options
                and prices to choose from, making it easy to find the perfect
                option for my travel needs. I had a great experience booking my
                bus ticket through this site, the process was simple and
                efficient.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[300px]">
              <div className="flex justify-center mt-3">
                <img src={Man} alt="" className="w-20 rounded-[100%] " />
              </div>
              <p className="mt-5 mx-[100px]">
                I had a great experience using this bus booking site. The
                information provided was clear and detailed, which helped me
                make an informed decision. There were many options available
                with different prices, making it easy to find the perfect one
                for my travel needs. The booking process was simple and
                efficient. Overall, I highly recommend this site for anyone
                looking to book a bus ticket.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[300px]">
              <div className="flex justify-center mt-3 ">
                <img src={Abe} alt="" className="w-20 rounded-[100%] " />
              </div>
              <p className="mt-5 mx-[100px]">
                I appreciated the clear and detailed information provided on
                this bus booking site, which helped me make an informed
                decision. This bus booking site offered a wide range of options
                and prices to choose from, making it easy to find the perfect
                option for my travel needs. I had a great experience booking my
                bus ticket through this site, the process was simple and
                efficient.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[300px]">
              <div className="flex justify-center mt-3">
                <img src={Man} alt="" className="w-20 rounded-[100%] " />
              </div>
              <p className="mt-5 mx-[100px]">
                I had a great experience using this bus booking site. The
                information provided was clear and detailed, which helped me
                make an informed decision. There were many options available
                with different prices, making it easy to find the perfect one
                for my travel needs. The booking process was simple and
                efficient. Overall, I highly recommend this site for anyone
                looking to book a bus ticket.
              </p>
            </div>
          </SwiperSlide>
          <SlideNextButton />
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
