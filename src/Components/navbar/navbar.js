
import React, { useState, useEffect } from "react";
import logo from "../../Assets/logo.png";
import Burger from "./burger";

const Navbar = () => {
    const [navBack, setNav] = useState('transparent')
    const [bord, setBord] = useState('none')

    const listenScrollEvent = () => {
        window.scrollY > 10 ? setNav("white") : setNav("transparent");
        window.scrollY > 10 ? setBord(" 0 2px 2px -2px rgba(0,0,0,.2)") : setBord("none");
      };
      useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
          window.removeEventListener("scroll", listenScrollEvent);
        };
      }, []);
  return (
    <div style={{ backgroundColor: navBack, boxShadow: bord}}className = 'nav'>
        <a href="/"><img className  = 'log' src= {logo} alt ='log'height="90px" width="auto" ></img></a> 
      <Burger />
    </div>
  );
};

export default Navbar;
