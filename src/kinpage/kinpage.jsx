import React from 'react';
import Nav from '../components/Nav';
import imagePic from '../assets/Tiger-Hidden.jpg';
import Logolinepage from "../nextpage/Logolinepage";
import Moiveline from '../components/Moiveline';
import Footer from '../components/Footer';


export default function Kinpage() {
    return (
        <div
            className="h-fit w-screen bg-slate-950 flex items-center flex-col overflow-x-hidden bg-cover bg-center"
            // style={{ backgroundImage: `url(${imagePic})` }}
        >
            <Nav />
            <img className='h-full w-full' src={imagePic} alt="" />
            <div className="your-custom-class h-20 w-[550px] flex items-center justify-evenly absolute right-12 top-[60%]">
                        <button className='h-10 w-40 border rounded-lg bg-transparent text-white/90 text-xl'><i class="fa fa-download" aria-hidden="true"></i> Download</button>
                        <button className='h-10 w-28 border rounded-lg bg-transparent text-white/90 text-xl'><i class="fa fa-share-alt" aria-hidden="true"></i> Share</button>
                        <button className='h-10 w-28 border rounded-lg bg-transparent text-white/90 text-xl'><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> Like</button>
                    </div>
            <Logolinepage 
            // customDiv={
            //         <div className="your-custom-class">
            //             <button></button>
            //             <button></button>
            //             <button></button>
            //         </div>
            //     } 
            />
            <div className='h-fit w-full'>
                <div className='h-20 w-96 flex items-center justify-evenly ml-20 text-white'>
                    <span className='cursor-pointer'>Universe</span>
                    <span className='cursor-pointer'>News</span>
                    <span className='cursor-pointer'>Reviews</span>
                </div>
            <Moiveline title="1-9 Episode" style={{fontSize: '20px',width: '150px',position: 'absolute',left: '-40px',}}
             customStyle={{
                wrapper: { marginLeft: '20px' },
              }} />
            <Moiveline title="Similar Movie for you" style={{fontSize: '25px',width: '250px',position: 'absolute',left: '-40px'}}
             customStyle={{
                wrapper: { marginLeft: '20px' },
              }} />
            <Footer />
            </div>
        </div>
    );
}
