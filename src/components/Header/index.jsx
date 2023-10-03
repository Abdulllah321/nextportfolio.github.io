// "use client";
import { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Nav from "./nav";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import MagneticButton from "../MagneticButton";

export default function index() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: "30% center",
        end: "10% top",
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(
            button.current,
            {
              scale: 0,
              duration: 0.25,
              ease: "power1.out",
            },
            setIsActive(false)
          );
        },
      },
    });
  }, []);

  return (
    <>
      <div ref={button} className={`${styles.headerButtonContainer}`}>
        <MagneticButton>
          <span
            onClick={() => {
              setIsActive(!isActive);
            }}
            className={`${styles.button} ${isActive ? "active" : ""}`}
          >
            <div className={styles.before} />
            <div
              className={`${styles.burger} ${
                isActive ? styles.burgerActive : ""
              }`}
            ></div>
          </span>
        </MagneticButton>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
