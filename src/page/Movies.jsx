import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import logo3 from '../assets/logo3.jpg';
import logo4 from '../assets/logo4.jpg';
import logo5 from '../assets/logo5.jpg';
import logo6 from '../assets/logo6.jpg';
import logo7 from '../assets/logo7.png';

export default function Moiveline() {
    const Arritems = [
        {
            img: logo3,
            pt: 'Air Country Legend',
            sp: '43 <i class="fa fa-star" aria-hidden="true"></i>',
            pn: 'Action movie',
        },
        {
            img: logo4,
            pt: 'City Heights',
            sp: '39 <i class="fa fa-star" aria-hidden="true"></i>',
            pn: 'Drama',
        },
        {
            img: logo5,
            pt: 'Jungle Fury',
            sp: '50 <i class="fa fa-star" aria-hidden="true"></i>',
            pn: 'Adventure',
        },
        {
            img: logo6,
            pt: 'Sky Warriors',
            sp: '45 <i class="fa fa-star" aria-hidden="true"></i>',
            pn: 'Sci-fi',
        },
        {
            img: logo7,
            pt: 'Mystic Tales',
            sp: '42 <i class="fa fa-star" aria-hidden="true"></i>',
            pn: 'Fantasy',
        },
        {
            img: logo6,
            pt: 'Sky Warriors',
            sp: '45 <i class="fa fa-star" aria-hidden="true"></i>',
            pn: 'Sci-fi',
        },
        {
            img: logo7,
            pt: 'Mystic Tales',
            sp: '42 <i class="fa fa-star" aria-hidden="true"></i>',
            pn: 'Fantasy',
        },
    ];

    const [slidesPerView, setSlidesPerView] = useState(5);
    const [spaceBetween, setSpaceBetween] = useState(10);

    useEffect(() => {
        const breakpoints = [
            { maxWidth: 640, slides: 1, space: 10 },
            { maxWidth: 768, slides: 2, space: 15 },
            { maxWidth: 1024, slides: 3, space: 20 },
            { maxWidth: 1280, slides: 4, space: 25 },
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

            // Default settings for larger screens
            setSlidesPerView(5);
            setSpaceBetween(10);
        };

        updateSwiperSettings();
        window.addEventListener('resize', updateSwiperSettings);

        return () => {
            window.removeEventListener('resize', updateSwiperSettings);
        };
    }, []);

    return (
        <div className='h-[350px] w-full flex items-center'>
            <p className='text-3xl text-white font-sans translate-y-[-150px] mt-6 translate-x-20'>Series</p>
            <Swiper
                modules={[Navigation]}
                navigation={true}
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
                loop={true}
                className=''
            >
                {Arritems.map((item, index) => (
                    <SwiperSlide key={index}>
                        <section className='h-full w-56 mt-8 flex flex-col items-center justify-around'>
                            <figure className='h-48 w-full'>
                                <img src={item.img} alt={item.pt} className='h-full w-full object-cover' />
                            </figure>
                            <p className='text-lg text-white font-mono'>{item.pt}</p>
                            <p className='opacity-30 text-white'>
                                <span className='icon-wrapper' dangerouslySetInnerHTML={{ __html: item.sp }}></span> - {item.pn}
                            </p>
                        </section>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
