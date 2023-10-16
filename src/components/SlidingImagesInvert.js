import Link from "next/link";
import styles from "@/styles/SlidingImages.module.css";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";
import { slideImg } from "./Constants";

function shuffleArray(array) {
  // Create a copy of the original array
  const shuffledArray = [...array];

  // Perform Fisher-Yates shuffle
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}

export default function SlidingImages() {
  const shuffledSlideImg = shuffleArray(slideImg);

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: "200% top",
        end: "550% bottom",
        onUpdate: (e) => (direction = e.direction * -1),
        // markers: true,
      },
      x: "-2000px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -75) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -75;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent -= 0.02 * direction;
  };

  return (
    <motion.div className={styles.sliderContainer}>
      <div ref={slider} className={`${styles.slider}`}>
        <div ref={firstText} className={`${styles.sliders}`}>
          {shuffledSlideImg.map((slide, index) => (
            <Link href={slide.href} key={index}>
              <div className={styles.videos}>
                <Image
                  priority
                  className={styles.video}
                  src={slide.src}
                  alt={slide.title}
                />
              </div>
            </Link>
          ))}
        </div>
        <div ref={secondText} className={`${styles.sliders}`}>
          {shuffledSlideImg.map((slide, index) => (
            <Link
              key={index}
              href={slide.href}
              className="absolute left-full top-0 border-dark border-2"
            >
              <div className={styles.videos}>
                <Image
                  priority
                  className={styles.video}
                  src={slide.src}
                  alt={slide.title}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
