import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import pod1 from '../assets/short1.jpg';
import pod2 from '../assets/short2.jpeg';
import pod3 from '../assets/short3.jpeg';
import pod4 from '../assets/short4.avif';

export default function Merging({ setSelectedUrl }) {
  const podCast = [pod1, pod2, pod3, pod4, pod1, pod2, pod3, pod4];

  return (
    <div className="h-[450px] w-full flex items-center gap-20 absolute z-50 top-[30%] left-3">
      <main className="h-full w-[60%] p-2 flex flex-col items-center justify-evenly">
        <div className="pasty h-[80px] w-full">
          <h2 className="text-xl font-serif text-white">Features in saintStream</h2>
          <span className="text-white text-xs opacity-50">
            best feature for you today
          </span>
        </div>
        <p className="text-white text-lg ml-[-80%]">#1 in Australia</p>
        <div className="carry h-[200px] w-full flex flex-col items-center justify-around">
          <h2 className="text-xl font-serif text-white">Air Courtying a Legend</h2>
          <span className="text-white text-xs opacity-50">
            2hrs:40min.2022.Fantasy.Action
          </span>
          <p className="text-white text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            neque vitae...
          </p>
          <section className="h-10 w-4/5 flex items-center justify-around">
            <button className="h-10 w-36 rounded-md bg-green-500 text-white">
              <i className="fa fa-play-circle" aria-hidden="true"></i> Watch
              Trailer
            </button>
            <button className="h-10 w-36 rounded-md bg-transparent text-white">
              <i className="fa fa-plus-square-o" aria-hidden="true"></i> Add to
              WatchList
            </button>
          </section>
        </div>
      </main>

      <div className="h-full w-[30%] mr-[-10px] sm:mr-[10px] sm:ml-[-40px] sm:w-[60%]">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={false}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            640: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          className="h-full w-[70%] rounded-xl"
        >
          {podCast.map((item, index) => (
            <SwiperSlide key={index} className="h-full">
              {/* Call setSelectedUrl on click */}
              <DisplayCard
                className="h-full w-full object-cover"
                url={item}
                onClick={() => setSelectedUrl(item)} // Update selected URL
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

function DisplayCard({ url, className, onClick }) {
  return (
    <div className={className} onClick={onClick}>
      <img
        src={url}
        alt="Logo"
        className="object-cover h-full w-full cursor-pointer"
      />
    </div>
  );
}
