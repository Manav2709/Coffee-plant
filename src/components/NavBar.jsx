import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Coffee from "../assets/images/coffee.png"
import CoffeeBean from "../assets/images/coffee-2.png"

const NavBar = () => {
  const navRef = useRef(null);

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
    .fromTo('.titillium-web-regular li',
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
    <nav ref={navRef} className="w-[80%] h-16 bg-[#b08968]/50 rounded-lg backdrop-blur-3xl z-40 absolute top-5 px-4 left-40 p-2 flex items-center justify-between overflow-hidden">
    <div className='flex items-center'>
        <h1 className='nav-title text-3xl exo-2 text-amber-900'>Coffee</h1>
        <img src={CoffeeBean} alt="Coffee Logo" className='size-16 ' />
    </div>
    <div className="w-full flex justify-end">
        <ul className='flex gap-4 titillium-web-regular text-lg'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Products</li>
        </ul>
    </div>
</nav>
  )
}

export default NavBar