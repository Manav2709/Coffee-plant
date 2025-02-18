import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import CoffeeBean from "../assets/images/coffee-2.png";

const NavBar = () => {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(navRef.current, 
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
    )
    .fromTo('.nav-title',
      { opacity: 0, x: -20 },
      { 
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out"
      },
      "-=0.7"
    )
    .fromTo('.nav-item',
      { opacity: 0, y: 20 },
      { 
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "back.out(1.7)"
      },
      "-=0.5"
    );
  }, []);

  return (
    <nav ref={navRef} className="absolute top-5 left-[50%] transform h-16 -translate-x-1/2 w-[95%] md:w-[80%] bg-[#b08968]/50 rounded-lg backdrop-blur-3xl z-40 px-4 p-1 flex items-center justify-between">
      <div className='flex items-center'>
        <h1 className='nav-title text-xl md:text-3xl exo-2 text-amber-900'>Coffee</h1>
        <img src={CoffeeBean} alt="Coffee Logo" className='size-10 md:size-16' />
      </div>
      
      <button 
        className="md:hidden p-2 text-amber-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      <div className="hidden md:flex w-full justify-end">
        <ul className='flex gap-4 md:gap-6 titillium-web-regular text-base md:text-lg'>
          {["Home", "About", "Contact", "Products"].map((item, index) => (
            <li key={index} className="nav-item relative cursor-pointer">
              {item}
              <span className="nav-underline"></span>
            </li>
          ))}
        </ul>
      </div>

      <div className={`md:hidden absolute top-full left-0 right-0 bg-[white]/70 backdrop-blur-3xl rounded-lg transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <ul className='flex flex-col items-center py-4 gap-4 titillium-web-regular text-lg'>
          {["Home", "About", "Contact", "Products"].map((item, index) => (
            <li 
              key={index} 
              className="nav-item relative cursor-pointer text-amber-900"
              
            >
              {item}
              <span className="nav-underline"></span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;