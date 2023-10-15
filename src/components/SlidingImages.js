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
  const slider = useRef(null);
  const xPercentRef = useRef(0);
  const directionRef = useRef(-1);
  const projectRefs = [];

  // Shuffle the slideImg array
  const shuffledSlideImg = shuffleArray(slideImg);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: "200% top",
        end: "500% bottom",
        onUpdate: (e) => (directionRef.current = e.direction * -1),
      },
      x: "0px",
    });

    requestAnimationFrame(animate);
  });

  const animate = () => {
    if (xPercentRef.current < -100) {
      xPercentRef.current = 0;
    } else if (xPercentRef.current > 0) {
      xPercentRef.current = -100;
    }

    projectRefs.forEach((ref) => {
      gsap.set(ref, { xPercent: xPercentRef.current });
    });

    requestAnimationFrame(animate);

    xPercentRef.current += 0.3 * directionRef.current;
  };

  return (
    <motion.div className={styles.sliderContainer}>
      <div ref={slider} className={`${styles.slider} -translate-x-2/4`}>
        {shuffledSlideImg.map((slide, index) => (
          <div key={index} ref={(ref) => projectRefs.push(ref)}>
            <Link href={slide.href} target="_blank">
              <div className={styles.videos}>
                <Image
                  priority
                  className={styles.video}
                  src={slide.src}
                  alt={slide.title}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
