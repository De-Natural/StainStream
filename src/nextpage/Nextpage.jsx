import React from 'react';
import Nav from '../components/Nav';
import imagePic from '../assets/ip woman.webp';
import Logolinepage from './Logolinepage';
import Moiveline from '../components/Moiveline';
import Footer from '../components/Footer';
import { useImageContext } from '../context/ImageContext';

export default function Nextpage() {
  const { currentImage } = useImageContext(); // Access the current image from context

  return (
    <div
      className="h-full w-screen bg-slate-950 flex items-center flex-col overflow-x-hidden bg-cover bg-center"
    //   style={{ backgroundImage: currentImage ? `url(${currentImage})` : `url(${imagePic})` }}
    >
      <Nav />
      <div className="w-full h-fit relative">
        <img className="h-full w-full" src={currentImage || imagePic} alt="Selected Movie" />
        <div className="your-custom-class h-20 w-[550px] flex items-center justify-evenly absolute right-12 top-[50%] z-50">
          <button className="h-10 w-40 border rounded-lg bg-transparent text-white/90 text-xl">
            <i className="fa fa-download" aria-hidden="true"></i> Download
          </button>
          <button className="h-10 w-28 border rounded-lg bg-transparent text-white/90 text-xl">
            <i className="fa fa-share-alt" aria-hidden="true"></i> Share
          </button>
          <button className="h-10 w-28 border rounded-lg bg-transparent text-white/90 text-xl">
            <i className="fa fa-thumbs-o-up" aria-hidden="true"></i> Like
          </button>
        </div>
        <Logolinepage />
      </div>
      <div className="h-fit w-full">
        <div className="h-20 w-96 flex items-center justify-evenly ml-20 text-white">
          <span className="cursor-pointer">Episodes</span>
          <span className="cursor-pointer">Universe</span>
          <span className="cursor-pointer">News</span>
          <span className="cursor-pointer">Reviews</span>
        </div>
        <Moiveline
          title="1-9 Episode"
          style={{ fontSize: '20px', width: '150px', position: 'absolute', left: '-40px' }}
          customStyle={{ wrapper: { marginLeft: '20px' } }}
        />
        <Moiveline
          title="Similar Movie for you"
          style={{ fontSize: '25px', width: '250px', position: 'absolute', left: '-40px' }}
          customStyle={{ wrapper: { marginLeft: '20px' } }}
        />
        <Footer />
      </div>
    </div>
  );
}
