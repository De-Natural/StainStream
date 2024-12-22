import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import autoplay styles
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import studio1 from '../assets/Ip man.avif'
import studio2 from '../assets/ip woman.webp'
import studio3 from '../assets/maginficy.jpg'
import studio4 from '../assets/Tiger-Hidden.jpg'
import Merging from './Merging';

export default function Plaza() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = 'https://mojipop.p.rapidapi.com/api/FaceDetection/CreateAvatar';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'e4635f38a0mshaba1deda88736d7p1c0241jsnc42b7f346751',
        'x-rapidapi-host': 'mojipop.p.rapidapi.com',
      },
    };

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
        }
        const result = await response.json();
        setData(Array.isArray(result.Search) ? result.Search : []);
      } catch (err) {
        console.error('Error:', err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-white">Loading...</p>;

  const studioArr = [studio1, studio2, studio3, studio4, studio1, studio2, studio3, studio4];

  return (
    <div className="h-full w-full relative">

      <div className='w-full h-full relative z-10'>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]} // Add Autoplay module
          // navigation
        //   pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false, // Continue autoplay even after user interactions
          }}
          spaceBetween={5}
          slidesPerView={1}
          className="h-screen w-screen overflow-x-hidden"
        >
          {studioArr.map((item, index) => (
            <SwiperSlide key={index}>
              <DisplayCard className={`h-full w-full object-cover object-center`} url={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="absolute bg-[linear-gradient(to_right,black,rgba(0,0,0,0.8),rgba(0,0,0,0.5),rgba(0,0,0,0))] w-full h-full top-0 left-0 z-40"></div>
      <Merging />
    </div>
  );
}

// Example DisplayCard Component
function DisplayCard({ url, className }) {
  return (
    <div className={className}>
      <img src={url} alt="Swiper Card" className="object-cover w-full h-full" />
    </div>
  );
}
