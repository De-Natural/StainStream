import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import studio1 from '../assets/Ip man.avif';
import studio2 from '../assets/ip woman.webp';
// import studio3 from '../assets/magnificy.jpg';
import studio4 from '../assets/Tiger-Hidden.jpg';
import Merging from './Merging';

export default function Plaza() {
  const [selectedUrl, setSelectedUrl] = useState(null);

  return (
    <div className="h-full w-full relative">
      <div className="w-full h-full relative z-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={5}
          slidesPerView={1}
          className="h-screen w-screen overflow-x-hidden"
        >
          <SwiperSlide>
            {/* Render the selected card */}
            <DisplayCard
              className="h-full w-full object-cover object-center"
              url={selectedUrl || studio1} // Use the selected URL or fallback
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="absolute bg-[linear-gradient(to_right,black,rgba(0,0,0,0.8),rgba(0,0,0,0.5),rgba(0,0,0,0))] w-full h-full top-0 left-0 z-40"></div>
      {/* Pass setSelectedUrl to Merging */}
      <Merging setSelectedUrl={setSelectedUrl} />
    </div>
  );
}

function DisplayCard({ url, className }) {
  return (
    <div className={className}>
      <img src={url} alt="Swiper Card" className="object-[100%] w-full h-full" />
    </div>
  );
}
