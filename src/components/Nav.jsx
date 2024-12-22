import React, { useState } from 'react'

export default function Nav() {
  const [ active, setActive] = useState(false)
  return (
    <div className='h-26 w-screen flex items-center justify-around bg-tansparent z-[3]'>
        <div className="h-20 w-40 flex flex-col items-center justify-center">
        <p className='font-bold text-3xl font-serif capitalize text-white'>StainStream</p>
        </div>
        <ul className="h-20 w-[480px] flex items-center justify-around cursor-pointer text-white">
            <li>Home</li>
            <li>Discover</li>
            <li>Movie Release</li>
            <li>Forum</li>
            <li>Login</li>
        </ul>
        <div className="h-20 w-[360px] flex items-center justify-around">
           <div className={`h-8 w-48 rounded-md flex items-center justify-around ${active? 'border border-gray-300' : ''}`}> 
                <input className='h-6 w-40 font-sm indent-1 outline-none bg-transparent text-white' type="text" id='search'/>
                <label htmlFor="search"
                  onClick={()=>setActive(!active)}
                ><i className="fa fa-search cursor-pointer text-white" aria-hidden="true" ></i></label>
            </div>
            <button className='h-8 w-20 bg-transparent border border-white rounded cursor-pointer text-white'>Sign up</button>
            <button className='h-8 w-20 bg-green-600 text-white rounded cursor-pointer'>Login</button>
        </div>
    </div>
  )
}
