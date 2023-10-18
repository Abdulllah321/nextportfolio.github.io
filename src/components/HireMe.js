import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CircularText } from "./Icons";
import Link from "next/link";
import MagneticButton from "./MagneticButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const HireMe = () => {
  const firstText = useRef(null);
  const slider = useRef(null);
  let rotation = 0;
  let direction = -1;

  const Hire = {
    initial: {
      opacity: 0,
      x: -100,
      y: 100,
      scale: 0,
      pathLength: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        delay: 1,
        duration: 1,
        type: "spring",
        stiffness: 300,
        damping: 9,
      },
    },
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: "0% top",
        end: "580% bottom",
        onUpdate: (e) => (direction = e.direction * -1),
        // markers: true,
      },
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (rotation >= 360) {
      rotation = 0;
    }

    gsap.set(firstText.current, { rotation: rotation });
    requestAnimationFrame(animate);
    rotation += 1 * direction;
  };

  return (
    <MagneticButton>
      <div className="fixed flex items-center justify-center bottom-4 left-4 z-[200] sm:right-0 sm:-top-1 sm:left-auto sm:bottom-auto sm:absolute">
        <motion.div
          className="w-40 h-auto items-center justify-center relative sm:w-28 md:w-30 lg:w-35"
          initial="initial"
          animate="animate"
          transition="transition"
          variants={Hire}
        >
          <div ref={slider}>
            <motion.div ref={firstText}>
              <CircularText className={`fill-[--dark] mix-blend-difference`} />
            </motion.div>
          </div>
          <Link
            href={`/contact`}
            className="flex items-center justify-center text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[--dark] text-[--light] shadow-md border-2 transition-all duration-300 ease-in-out border-solid border-[--dark] w-[4.5rem] h-[4.5rem] rounded-full font-semibold hover:bg-[--light] hover:text-[--dark] text-[.9rem] p-1 sm:w-[3.2rem] sm:h-[3.2rem] sm:text-[.6rem] mix-blend-difference"
          >
            Hire Me
          </Link>
        </motion.div>
      </div>
    </MagneticButton>
  );
};

export default HireMe;
