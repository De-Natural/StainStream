import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { useImageContext } from '../context/ImageContext';
import action1 from '../assets/action1.jpeg';
import action2 from '../assets/action2.jpg';
import action3 from '../assets/action3.jpeg';
import action4 from '../assets/action4.jpeg';
import action5 from '../assets/action5.jpeg';

export default function Moivecard() {
  const [slidesPerView, setSlidesPerView] = useState(5);
  const [spaceBetween, setSpaceBetween] = useState(20);
  const { setCurrentImage } = useImageContext(); // Access the context
  const navigate = useNavigate(); // Initialize the navigation hook

  const ArrMovie = [action1, action2, action3, action4, action5];

  const handleImageClick = (item) => {
    setCurrentImage(item); // Update context with the clicked image
    navigate('/nextpage'); // Navigate to the next page
  };

  return (
    <div className="h-[50%] w-screen bg-slate-950 flex items-center justify-around flex-col">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={false}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        className="h-full w-full"
      >
        {ArrMovie.map((item, index) => (
          <SwiperSlide key={index} onClick={() => handleImageClick(item)}>
            <DisplayCard className="h-fit w-full object-cover cursor-pointer" url={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function DisplayCard({ url, className }) {
  return (
    <div className={className}>
      <img src={url} alt="Logo" className="object-cover h-full w-full rounded-xl" />
    </div>
  );
}
