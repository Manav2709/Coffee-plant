import { useState, useEffect, useRef } from "react";
import Plant from "./assets/images/nature.png";
import "./App.css";
import NavBar from "./components/NavBar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CoffeeBeansVideo2 from "./assets/images/videos/coffee-video2.mp4";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [scrollY, setScrollY] = useState(0);
  const plantTextRef = useRef(null);
  const plantImgRef = useRef(null);
  const coffeeSectionRef = useRef(null);
  const coffeeTitleRef = useRef(null);
  const coffeeTextRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    if (plantTextRef.current && plantImgRef.current) {
      const letters = plantTextRef.current.children;

      gsap.set(plantImgRef.current, { opacity: 0, y: 150 });

      tl.set(letters, { opacity: 0, y: 20 })
        .to(letters, {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.5,
        })
        .to(plantImgRef.current, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
        });
    }

   // Hide the elements completely before animation
gsap.set(coffeeSectionRef.current, { opacity: 0, x: -200 }); // Move section off-screen (left)
gsap.set([coffeeTitleRef.current, coffeeTextRef.current], { opacity: 0, y: 50 });

// Scroll-triggered animation
ScrollTrigger.create({
  trigger: coffeeSectionRef.current,
  start: "top 60%", // Ensures animation triggers at the right scroll position
  once: true,
  onEnter: () => {
    gsap.to(coffeeSectionRef.current, {
      opacity: 1,
      x: 0, // Slides back to original position
      duration: 2,
      ease: "power3.out",
    });

    gsap.to(coffeeTitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.5,
    });

    gsap.to(coffeeTextRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.4,
    });
  },
});
}, []);

  return (
    <>
      <div className="relative w-full min-h-screen overflow-hidden bg-[#ede0d4]">
        <NavBar />

        <img
          ref={plantImgRef}
          src={Plant}
          alt="Plant"
          className="absolute w-full h-screen object-contain bg-transparent z-30  "
        />

        <div
          className="absolute top-40 left-1/2 transform -translate-x-1/2 z-20 whitespace-nowrap"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <h1 ref={plantTextRef} className="text-black text-9xl text-[350px] poppins-extrabold font-bold">
            {"PLANT".split("").map((letter, index) => (
              <span key={index} className="inline-block">{letter}</span>
            ))}
          </h1>
        </div>
      </div>

      <div className="h-[100vh] bg-[#7f5539]/50 relative">
        <video src={CoffeeBeansVideo2} autoPlay loop muted className="w-full h-full object-cover"></video>

        <div ref={coffeeSectionRef} className="absolute w-[50%] h-[100vh] bg-white/20 flex flex-col gap-5 left-0 top-0 p-10 opacity-0">
          <h1 ref={coffeeTitleRef} className="text-white text-3xl titillium-web-regular mt-20 ml-10">
            PUREST ARABICA COFFEE BEANS
          </h1>
          <p ref={coffeeTextRef} className="text-md text-white/90 w-[75%] font-mono tracking-wide ml-10">
            Sourced from the lush, fertile farms of Kerala, our coffee beans are grown in the rich, shaded plantations of the Western Ghats, renowned for their perfect climate and nutrient-rich soil. Handpicked by skilled farmers, each bean is carefully processed to preserve its bold aroma and deep, complex flavors. Experience the essence of premium, ethically sourced coffee in every cup.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;