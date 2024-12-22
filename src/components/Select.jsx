import React, { useState } from 'react';
import stable from '../assets/download2.jpeg';
import normal from '../assets/download3.jpeg';
import Ipman from '../assets/Ip man.avif';
import ipwoman from '../assets/ip woman.webp';
import maginficy from '../assets/maginficy.jpg';
import Tiger from '../assets/Tiger-Hidden.jpg';
import short3 from '../assets/download4.jpeg';

function Select() {
  const [imageSrc, setImageSrc] = useState(stable);

  // Function to handle image click
  const handleImageClick = (src) => {
    setImageSrc(src);
  };

  // Array of images
  const images = [
    { src: normal, title: 'Normal' },
    { src: Ipman, title: 'Ipman' },
    { src: ipwoman, title: 'Ipwoman' },
    { src: maginficy, title: 'Magnificy' },
    { src: Tiger, title: 'Tiger Hidden' },
    { src: short3, title: 'Short 3' },
  ];

  return (
    <div className="sm:h-screen w-full flex flex-col items-center justify-evenly">
      <nav className="h-20 w-full flex items-center justify-around">
        <p className="text-xl text-white">Movies on Awards</p>
        <ul className="h-20 w-[60%] flex items-center justify-around">
          <aside className="h-10 w-20 flex items-center justify-around">
            <i className="text-white text-2xl cursor-pointer fa fa-angle-left" aria-hidden="true"></i>
            <i className="text-white text-2xl cursor-pointer fa fa-angle-right" aria-hidden="true"></i>
          </aside>
          <p className="text-sm text-white">fast</p>
          <aside className="h-10 w-20 flex items-center justify-around">
            <i className="text-white text-2xl cursor-pointer fa fa-angle-left" aria-hidden="true"></i>
            <i className="text-white text-2xl cursor-pointer fa fa-angle-right" aria-hidden="true"></i>
          </aside>
          <p className="text-sm text-white">live</p>
          <aside className="h-10 w-20 flex items-center justify-around">
            <i className="text-white text-2xl cursor-pointer fa fa-angle-left" aria-hidden="true"></i>
            <i className="text-white text-2xl cursor-pointer fa fa-angle-right" aria-hidden="true"></i>
          </aside>
        </ul>
      </nav>
      <main className=" h-fit sm:h-[650px] w-full flex gap-12 flex-col items-center sm:flex-row">
        <figcaption className="h-full w-full gap-3 sm:w-[50%] flex flex-col items-center justify-around">
          <div className="imgDiv h-[280px] w-[90%] border border-purple-700">
            <img className="h-full w-full" src={imageSrc} alt="Selected" />
          </div>
          <button className="w-32 text-white border border-white bg-transparent rounded-md">Best Pictures</button>
          <div className="h-fit sm:h-60 w-[80%] p-2 flex flex-col items-center justify-evenly">
            <h2 className="text-xl font-serif text-white">Gundala</h2>
            <span className="text-white text-xs opacity-50">2hrs:40min.2022.Fantasy.Action</span>
            <p className="text-white text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, neque vitae. Doloremque officia explicabo quae iure quia nihil. Culpa quos laborum
              provident doloribus similique nostrum iste, temporibus exercitationem, qui soluta labore voluptatibus ipsum cupiditate harum officiis sunt, saepe natus
              maiores consectetur
            </p>
            <section className="h-12 w-4/5 flex items-center justify-around">
              <button className="h-10 w-36 rounded-md bg-green-500 text-white">
                <i className="fa fa-play-circle" aria-hidden="true"></i> play
              </button>
              <button className="h-10 w-36 rounded-md bg-transparent text-white">
                <i className="fa fa-plus-square-o" aria-hidden="true"></i> Add Watchlist
              </button>
            </section>
          </div>
        </figcaption>
        <div className="h-full w-full gap-2 sm:w-[50%] grid grid-cols-2 p-5 place-items-center">
          {images.map((image, index) => (
            <div key={index} className="h-40 w-64 flex items-center justify-around">
              <article className="h-28 w-28 border rounded-md cursor-pointer">
                <img className="h-full w-full" src={image.src} alt={image.title} onClick={() => handleImageClick(image.src)} />
              </article>
              <menu className="text-white text-sm w-[80px]">
                <p className="rounded-md bg-transparent text-white w-12 h-5 text-center border border-gray-400">PG-34</p>
                <p>{image.title}</p>
                <p className="text-white opacity-50">Comedy.Action</p>
                <p>
                  <i className="text-yellow-400 fa fa-star" aria-hidden="true"></i>
                  43<span className="text-white opacity-50">/movie</span>
                </p>
              </menu>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Select;
