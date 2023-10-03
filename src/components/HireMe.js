import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CircularText } from "./Icons";
import Link from "next/link";
import MagneticButton from "./MagneticButton";

const HireMe = () => {
  const [scrollDown, setScrollDown] = useState(false);
  const lastScrollY = useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const scrollDelta = currentScrollY - lastScrollY.current;
    lastScrollY.current = currentScrollY;

    if (scrollDelta < 0) {
      setScrollDown(false);
    } else if (scrollDelta > 0) {
      setScrollDown(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        damping:9,

      },
    },
  };

  const Circle = {
    animate: {
      rotate: -360,
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 7,
      },
    },
  };

  const Circle1 = {
    animate: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 7,
      },
    },
  };

  const circleVariant = scrollDown ? Circle1 : Circle;

  return (
    <MagneticButton>

    <div className="fixed flex items-center justify-center bottom-4 left-4 z-50">
      <motion.div
        className="w-40 h-auto items-center justify-center relative"
        initial="initial"
        animate="animate"
        transition="transition"
        variants={Hire}
      >
        <motion.div
          variants={circleVariant}
          initial="initial"
          animate="animate"
          transition="transition"
        >
          <CircularText className={`fill-[--dark]`} />
        </motion.div>
        <Link
          href="/contact"
          className="flex items-center justify-center text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[--dark] text-[--light] shadow-md border-2 transition-all duration-300 ease-in-out border-solid border-[--dark] w-[4.5rem] h-[4.5rem] rounded-full font-semibold hover:bg-[--light] hover:text-[--dark] text-[.9rem] p-1"
        >
          Hire Me
        </Link>
      </motion.div>
    </div>
    </MagneticButton>
  );
};

export default HireMe;
