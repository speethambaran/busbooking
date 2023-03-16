import { React } from "react";
import { useSwiper } from "swiper/react";

import {GrLinkNext} from "react-icons/gr"

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <div className="flex justify-between">
      <button onClick={() => swiper.slidePrev()}> <GrLinkNext className="rotate-180"/> </button>
      <button onClick={() => swiper.slideNext()}> <GrLinkNext /> </button>
    </div>
  );
}
