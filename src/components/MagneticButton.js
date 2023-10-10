import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MagneticButton({ children }) {
  const magnetic = useRef(null);

  useEffect(() => {
    // Check if the screen width is greater than 1024px
    if (window.innerWidth > 1024 && magnetic.current) {
      const xTo = gsap.quickTo(magnetic.current, "x", {
        duration: 1,
        ease: "elastic",
      });
      const yTo = gsap.quickTo(magnetic.current, "y", {
        duration: 1,
        ease: "elastic",
      });

      magnetic.current.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } =
          magnetic.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x * 1);
        yTo(y * 1);
      });

      magnetic.current.addEventListener("mouseleave", (e) => {
        xTo(0);
        yTo(0);
      });
    }
  }, []);

  return React.cloneElement(children, { ref: magnetic });
}
