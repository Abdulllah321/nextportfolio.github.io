import Link from "next/link";
import styles from "@/styles/SlidingImages.module.css";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";
import waveCafeUrl from "@/components/assets/project/wavecafe.png";

export default function SlidingImages() {
  const slider = useRef(null);
  const xPercentRef = useRef(0);
  const directionRef = useRef(-1);

  const projectRefs = Array.from({ length: 10 }, () => useRef(null));

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: "200% top",
        end: "500% bottom",
        onUpdate: (e) => (directionRef.current = e.direction * -1),
        // markers: true
      },
      x: "0px",
    });

    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercentRef.current < -100) {
      xPercentRef.current = 0;
    } else if (xPercentRef.current > 0) {
      xPercentRef.current = -100;
    }

    projectRefs.forEach((ref) => {
      gsap.set(ref.current, { xPercent: xPercentRef.current });
    });

    requestAnimationFrame(animate);

    xPercentRef.current -= .3 * directionRef.current;
  };


  return (
    <motion.div className={styles.sliderContainer}>
      <div ref={slider} className={`${styles.slider} -translate-x-2/4`}>
        {projectRefs.map((projectRef, index) => (
          <div key={index} ref={projectRef}>
            <Link href={`https://abd-wavecafe.netlify.app/`} target="_blank">
              <div className={styles.videos}>
                <Image
                  priority
                  className={styles.video}
                  src={waveCafeUrl}
                  alt="waveCafe"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
