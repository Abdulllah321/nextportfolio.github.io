import React, { useEffect } from "react";
import gsap from "gsap";

import { motion } from "framer-motion";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const cursorAfter = cursor.querySelector(".cursor-after");
    var mouseX = 0,
      mouseY = 0;

    gsap.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        gsap.set(cursor, {
          css: {
            left: mouseX,
            top: mouseY,
          },
        });
      },
    });

    window.addEventListener("mousemove", function (e) {
      mouseX = e.clientX - 10;
      mouseY = e.clientY - 10;
    });
    window.addEventListener("click", function () {
      cursor.classList.add("cursor-click");
      cursorAfter.style.display = "none"
      setTimeout(() => {
        cursor.classList.remove("cursor-click");
        cursorAfter.style.display = "block"
      }, 700);
    });

    const links = document.querySelectorAll(
      "a, .project_projectVideo__Scvvx, input, .style_nav__I2WqP, .style_headerButtonContainer__LMJxd"
    );

    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        cursor.style.backgroundColor = "var(--light)";
        cursor.style.scale = 2;
        cursor.style.mixBlendMode = "difference";
        cursorAfter.style.display = "none";
      });

      link.addEventListener("mouseleave", () => {
        cursor.style.backgroundColor = "transparent"
        cursor.style.scale = 1
        cursor.style.mixBlendMode = "normal";
        cursorAfter.style.display = "block";
      })
    });

    return () => {
      // Remove the event listeners when the component unmounts
      links.forEach((link) => {
        link.removeEventListener("mouseenter", () => {
          cursor.style.backgroundColor = "var(--light)";
          cursor.style.scale = 2;
          cursor.style.mixBlendMode = "difference";
          cursorAfter.style.display = "none";
          console.log(cursorAfter);
        });

        link.removeEventListener("mouseleave", () => {
          cursor.style.backgroundColor = "transparent";
          cursor.style.scale = 1
          cursor.style.mixBlendMode = "normal";
          cursorAfter.style.display = "block";
        });
      });
    };
  }, []);

  return (
    <div>
      {/* Wrap your content in a container */}
      <div className="cursor-container">
        <motion.div className="cursor">
          {/* Add a ::after pseudo-element */}
          <div className="cursor-after"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cursor;
