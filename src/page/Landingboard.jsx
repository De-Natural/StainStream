import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import autoplay styles
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import movieImage from '../assets/download.jpeg';
import movieImage1 from '../assets/download2.jpeg';
import movieImage2 from '../assets/download3.jpeg';
import movieImage3 from '../assets/download4.jpeg';
import Logoline from '../components/Logoline';


export default function Landingboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataArr,setDataArr] = useState([])

  useEffect(() => {
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=bf6cd0fd8380f4fc1c9756eb517127f5&language=en-US&page=2&sort_by=created_at.asc';
    const options = {
      method: 'GET',
      // headers: {accept: 'application/json'}
    };

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, options);
        
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
        }
        const result = await response.json();
        setDataArr(result?.results)
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

  const imageArr = [movieImage, movieImage1, movieImage2, movieImage3];
 console.log('dataArr',dataArr)
  return (
    <div className="h-[calc(100%-50px)] overflow-hidden w-full relative">

      <div className='w-full h-full relative z-10'>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]} // Add Autoplay module
          // navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false, // Continue autoplay even after user interactions
          }}
          spaceBetween={5}
          slidesPerView={1}
          loop={true}
          className="h-screen w-screen"
        >
          {dataArr?.map((item, index) => (
            <SwiperSlide key={index}>
              <DisplayCard className={`h-full w-full object-cover`} url={item?.backdrop_path? item?.backdrop_path : movieImage2} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="absolute bg-[linear-gradient(to_top,black,rgba(0,0,0,0.8),rgba(0,0,0,0.5),rgba(0,0,0,0))] w-full h-full top-0 left-0 z-30"></div>
      <Logoline />
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
