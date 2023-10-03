import React, { useEffect, useState, useRef } from "react";
import { technologies } from "./Constants";
import Image from "next/image";
import gsap from "gsap";
import { FaXmark } from "react-icons/fa6";
import AnimatedText from "./AnimatedText";

const Skills = () => {
  const [skillOpened, setSkillOpened] = useState(false);
  const tweenRef = useRef(null);

  useEffect(() => {
    const skillItems = document.querySelectorAll(".skill li div");

    function skillopen() {
      if (tweenRef.current) {
        tweenRef.current.kill();
      }

      if (skillOpened) {
        tweenRef.current = gsap.to(skillItems, {
          duration: 1,
          left: "0%",
          scale: 0,
          bottom: "30%",
          ease: "power2.inOut",
          zIndex: 9,
        });
        setSkillOpened(false);
      } else {
        tweenRef.current = gsap.to(skillItems, {
          duration: 2,
          left: "100%",
          bottom: 0,
          zIndex: 10,
          scale: 0.7,
          ease: "Elastic.easeOut",
          stagger: {
            from: 0,
            amount: 0.5,
          },
        });
        setSkillOpened(true);
      }
    }

    const toggleButton = document.querySelector(".toggle");
    toggleButton.addEventListener("click", skillopen);

    return () => {
      toggleButton.removeEventListener("click", skillopen);
    };
  }, [skillOpened]);

  useEffect(() => {
    document.querySelector(".toggle").addEventListener("click", function (e) {
      gsap.fromTo(
        ".ripples",
        {
          border: "1px solid #fff",
          left: e.offsetX,
          top: e.offsetY,
          height: 0,
          width: 0,
          opacity: 1,
        },
        {
          border: "0px solid #fff",
          height: 60,
          width: 60,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        }
      );
    });
  }, []);

  useEffect(() => {}, []);

  return (
    <div className="w-full m-auto  p-0 relative">
      <AnimatedText text={`Skills`} />
      <div
        className="w-full h-[50vh] relative flex items-center justify-center
      flex-col skill mt-40 p-0 m-0"
      >
        {" "}
        <button className="toggle">
          <span className="ripples"></span>
          {skillOpened ? <FaXmark className="text-4xl" /> : "Skills"}
        </button>
        <ul>
          {technologies.map((technology, index) => (
            <li key={index}>
              <div className="ball">
                <Image
                  src={technology.icon}
                  alt={technology.name}
                  className="w-full h-full relative"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
