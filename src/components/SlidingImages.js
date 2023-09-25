import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/SlidingImages.module.css";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";
import waveCafeUrl from "@/components/assets/project/wavecafe.png"

export default function SlidingImages() {
  const firstProject = useRef(null);
  const secondProject = useRef(null);
  const thirdProject = useRef(null);
  const fourthProject = useRef(null);
  const fifthProject = useRef(null);
  const sixthProject = useRef(null);
  const seventhProject = useRef(null);
  const eighthProject = useRef(null);
  const ninthProject = useRef(null);
  const tenthProject = useRef(null);
  const slider = useRef(null);

  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: "top top",
        end: "bottom top",
        onUpdate: (e) => {
          direction = e.direction === 1 ? -1 : 1;
        },
      },
      x: "-500px",
    });

    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(firstProject.current, { xPercent: xPercent });
    gsap.set(secondProject.current, { xPercent: xPercent });
    gsap.set(thirdProject.current, { xPercent: xPercent });
    gsap.set(fourthProject.current, { xPercent: xPercent });
    gsap.set(fifthProject.current, { xPercent: xPercent });
    gsap.set(sixthProject.current, { xPercent: xPercent });
    gsap.set(seventhProject.current, { xPercent: xPercent });
    gsap.set(eighthProject.current, { xPercent: xPercent });
    gsap.set(ninthProject.current, { xPercent: xPercent });
    gsap.set(tenthProject.current, { xPercent: xPercent });

    requestAnimationFrame(animate);

    xPercent += .5 * direction;
  };

  return (
    <motion.div className={styles.sliderContainer}>
      <div ref={slider} className={styles.slider}>
        <div ref={firstProject}>
          <Link href={`https://abd-wavecafe.netlify.app/`} target="_blank">
            <div className={styles.videos}>
              <Image
                className={styles.video}
                src={waveCafeUrl}
                autoPlay
                loop
                muted
              />
            </div>
          </Link>
        </div>
        <div ref={secondProject}>
          <Link href={``}>
            <div className={styles.videos}>
              <Image
                className={styles.video}
                src={waveCafeUrl}
                autoPlay
                loop
                muted
              />
            </div>
          </Link>
        </div>
        <div ref={thirdProject}>
          <Link href={``}>
            <div className={styles.videos}>
              <Image
                className={styles.video}
                src={waveCafeUrl}
                autoPlay
                loop
                muted
              />
            </div>
          </Link>
        </div>
        <div ref={fourthProject}>
          <Link href={``}>
            <div className={styles.videos}>
              <Image
                className={styles.video}
                src={waveCafeUrl}
                autoPlay
                loop
                muted
              />
            </div>
          </Link>
        </div>
        <div ref={fifthProject}>
          <Link href={``}>
            <div className={styles.videos}>
              <Image
                className={styles.video}
                src={waveCafeUrl}
                autoPlay
                loop
                muted
              />
            </div>
          </Link>
        </div>
        <div ref={sixthProject}>
          <Link href={``}>
            <div className={styles.videos}>
              <Image
                className={styles.video}
                src={waveCafeUrl}
                autoPlay
                loop
                muted
              />
            </div>
          </Link>
        </div>
        <div ref={seventhProject}>
          <Link href={``}>
            <div className={styles.videos}>
              <Image
                className={styles.video}
                src={waveCafeUrl}
                autoPlay
                loop
                muted
              />
            </div>
          </Link>
        </div>
        <div ref={eighthProject}>
          <Link href={``}>
            <div className={styles.videos}>
              <Image
                className={styles.video}
                src={waveCafeUrl}
                autoPlay
                loop
                muted
              />
            </div>
          </Link>
        </div>
        <div ref={ninthProject}>
          <Link href={``}>
            <div className={styles.videos}>
              <Image
                className={styles.video}
                src={waveCafeUrl}
                autoPlay
                loop
                muted
              />
            </div>
          </Link>
        </div>
        <div ref={tenthProject}>
          <Link href={``}>
            <div className={styles.videos}>
              <Image
                className={styles.video}
                src={waveCafeUrl}
                autoPlay
                loop
                muted
              />
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
} 
