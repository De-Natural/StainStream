import React from "react";
import moviePic from '../assets/logo4.jpg';
import Logoline from "../components/Logoline";
import Nav from "../components/Nav";
// import Plaza from "../components/Plaza";
import Moivecard from "../components/Moivecard";
import Moviedisplay from "../components/Moviedisplay";
import Select from "../components/Select";

export default function Firststage() {
  return (
    <div className="h-[calc(100%-50px)] w-full">
      <Nav />
      <img className="h-full w-full" src={moviePic} alt="" />
      <Logoline />
      {/* <Plaza /> */}
      <Moivecard />
      <Moviedisplay />
      <Select />
    </div>
  );
}
