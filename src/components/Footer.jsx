import React from 'react'

export default function Footer() {
  return (
    <footer className='h-fit gap-2 sm:h-[300px] w-full flex items-center justify-between p-10'>
        <div className="edge h-fit gap-2 sm:h-[250px] w-[400px] flex flex-col items-center justify-around">
          <p className='text-white text-left text-3xl font-medium font-sans'>Our platform is trusted by millions and features best updated moives all round the world</p>
          <p className='h-20 w-full text-white flex items-center justify-evenly'>
            <span>Private policy</span>
            <span>Terms of services</span>
            <span>Languages</span>
          </p>
        </div>
        <aside className='h-[250px] w-[400px] flex flex-col items-center justify-between'>
          <nav className='h-24 w-full text-white flex items-center justify-evenly'><span>Home /</span> <span>Discover /</span> <span>Influece /</span> <span>Release</span></nav>
          <div className="icons h-28 w-full text-white flex items-center justify-evenly">
            <i className="text-4xl fa fa-instagram" aria-hidden="true"></i>
            <i className="text-4xl fa fa-facebook-square" aria-hidden="true"></i>
            <i className="text-4xl fa fa-twitter" aria-hidden="true"></i>
            <i className="text-4xl fa fa-google" aria-hidden="true"></i>
          </div>
        </aside>
      </footer>
  )
}
