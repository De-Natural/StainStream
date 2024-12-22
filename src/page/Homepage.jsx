import React from 'react'
import Nav from '../components/Nav'
import Firstswiper from '../components/Firstswiper';
import Plaza from '../components/Plaza';
import Moivecard from '../components/Moivecard';
import Moviedisplay from '../components/Moviedisplay';
import Select from '../components/Select';



function Homepage() {
  return (
    <div className="h-fit w-screen bg-slate-800 flex items-center flex-col overflow-x-hidden">
        <Nav />
        <Firstswiper />
        <Plaza /> 
        <Moivecard />
        <Moviedisplay />
        <Select />
    </div>
  )
}

export default Homepage;

function mac(){

}