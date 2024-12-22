import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import logo1 from '../assets/logo1.jpeg';
import logo2 from '../assets/logo2.jpg';
import logo3 from '../assets/logo3.jpg';
import logo4 from '../assets/logo4.jpg';
import logo5 from '../assets/logo5.jpg';
import logo6 from '../assets/logo6.jpg';
import logo7 from '../assets/logo7.png';

export default function Logolinepage( { customDiv } ) {
    const ArryLogo = [
        logo1, logo2, logo3, logo4, logo5, logo6, logo7,
        logo1, logo2, logo3, logo4, logo5, logo6, logo7,
    ];

    const [slidesPerView, setSlidesPerView] = useState(6);
    const [spaceBetween, setSpaceBetween] = useState(50);

    useEffect(() => {
        const breakpoints = [
            { maxWidth: 640, slides: 2, space: 10 },
            { maxWidth: 768, slides: 4, space: 20 },
            { maxWidth: 1024, slides: 5, space: 30 },
        ];

        const updateSwiperSettings = () => {
            const width = window.innerWidth;

            for (const breakpoint of breakpoints) {
                if (width <= breakpoint.maxWidth) {
                    setSlidesPerView(breakpoint.slides);
                    setSpaceBetween(breakpoint.space);
                    return;
                }
            }

            // Default settings if no breakpoints match
            setSlidesPerView(6);
            setSpaceBetween(30);
        };

        updateSwiperSettings();
        window.addEventListener('resize', updateSwiperSettings);

        return () => {
            window.removeEventListener('resize', updateSwiperSettings);
        };
    }, []);

    return (
        <div className='absolute flex flex-col w-full h-fit z-40 bottom-0 g-red-400 left-3 bg-[linear-gradient(to_top,black,rgba(0,0,0,0.8),rgba(0,0,0,0.8),rgba(0,0,0,0.8),rgba(0,0,0,0.5),rgba(0,0,0,0))]'>
        {customDiv && (
                <div className="custom-div">
                    {/* {customDiv} */}
                </div>
            )}
            <main className='board h-60 w-2/4 p-2 flex flex-col items-center justify-evenly'>
                <h2 className='text-xl font-serif text-white'>Star wars: The forces Awaken</h2>
                <span className='text-white text-xs opacity-50'>2hrs:40min.2022.Fantasy.Action</span>
                <p className='text-white text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, neque vitae.
                    Doloremque officia explicabo quae iure quia nihil. Culpa quos laborum
                    provident doloribus similique nostrum iste, temporibus exercitationem, qui
                    soluta labore voluptatibus ipsum cupiditate harum officiis sunt, saepe natus
                    maiores consectetur.
                </p>
                <section className='h-12 w-4/5 flex items-center justify-around'>
                    <button className='h-10 w-36 rounded-md bg-green-500 text-white'>
                        <i className="fa fa-play-circle" aria-hidden="true"></i> Watch Trailer
                    </button>
                    <button className='h-10 w-36 rounded-md bg-transparent text-white'>
                        <i className="fa fa-plus-square-o" aria-hidden="true"></i> Add WatchList
                    </button>
                </section>
            </main>
            <figure className='h-40 w-full text-2xl  text-white/50 p-3 px-10 '>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In modi ut animi, molestiae libero sapiente.
                Ex numquam at cumque eligendi quidem incidunt non earum ratione nesciunt magnam illo veniam, veritatis 
                fuga perspiciatis ipsam obcaecati consequuntur alias inventore maiores. Sequi doloribus, iste eaque facilis 
                consequuntur exercitationem eum perspiciatis ex quas quis.
            </figure>
            <div className="logoline h-fit w-[98%] sm:overflow-y-hidden m-4 translate-x-[-15px] bg-transparent ml-10">
                    <p className='text-2xl text-white ml-5'>Top Cast</p>
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={false}
                    slidesPerView={slidesPerView}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 30
                        }
                    }}
                    spaceBetween={spaceBetween}
                    className="logoline_swiper"
                >
                    {ArryLogo.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex items-center h-full gap-2'>
                                <img className="object-cover h-[100px] w-[100px] aspect-square overflow-hidden rounded-[50%]" src={item} />
                                <div>
                                    <p className='text-lg font-semibold text-white'>Bella Ramsey</p>
                                    <p className='text-xs font-normal text-white/30'>Joel Miller</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

// Example DisplayCard Component
function DisplayCard({ url, className }) {
    return (
        <div className={className}>
            <img src={url} alt="Logo" className="object-cover h-20 w-48" />
        </div>
    );
}
