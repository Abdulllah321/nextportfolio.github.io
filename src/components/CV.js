import React, { useEffect, useRef } from "react";
import CV1 from "./assets/cv/image_part_001.png";
import CV2 from "./assets/cv/image_part_002.png";
import CV3 from "./assets/cv/image_part_003.png";
// import ProfileImage from "@/components/assets/profile.png";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
// import { BsArrowRight } from "react-icons/bs";
import Button from "./Button";
import Link from "next/link";
// import {pdf} from "src/components/assets/resume.pdf";

const CV = () => {
  const cvRef = useRef(null);
  // const profileTimeline = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".cv1", {
      borderRadius: "1rem",
    });
    gsap.to(".cv3", {
      borderRadius: "1rem",
    });

    // Other animations triggered by scrolling
    gsap.from(".cv2", {
      rotateX: -90,
      transformOrigin: "top",
    });
    gsap.to(".cv2", {
      rotateX: 0,
      transformOrigin: "top top",
      duration: 1,
      ease: "power3",
      scrollTrigger: {
        trigger: ".cv",
        start: "20% 60%",
        end: "50% 20%",
        scrub: true,
        // markers:true
      },
    });

    gsap.from(".cv3", {
      rotateX: -90,
      transformOrigin: "top",
    });
    gsap.to(".cv3", {
      rotateX: 0,
      transformOrigin: "top top",
      duration: 1,
      ease: "power3",
      scrollTrigger: {
        trigger: ".cv",
        start: "50.33% 60%",
        end: "center 30%",
        scrub: true,
        // markers: true,
      },
    });

    gsap.to(cvRef.current, {
      width: "30%",
      scrollTrigger: {
        trigger: ".cv",
        start: "top 60%",
        end: "100% 10%",
        scrub: 1,
      },
    });

    gsap.to(".cv", {
      position: "sticky",
      top: "25%",
      scrollTrigger: {
        trigger: ".cv-main",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   // Create a timeline for profile animations
  //   profileTimeline.current = gsap.timeline({ paused: true });

  //   profileTimeline.current
  //     .to(".overlay", {
  //       background: "#f5f5f5",
  //       ease: "power3",
  //       duration: 0.5,
  //       boxShadow: "0px 0px 20px 3px rgba(0,0,0,0.75)",
  //       borderRadius: "1rem",
  //     })
  //     .to(".profileCard img", {
  //       scale: 1,
  //       ease: "elastic",
  //       duration: 0.5,
  //       border: "5px solid #3a6073",
  //     })

  //     .from(".profileRow", {
  //       scaleX: 0,
  //       opacity: 0,
  //     })
  //     .to(".profileRow", {
  //       scaleX: 1,
  //       opacity: 1,
  //     })
  //     .from(".profileButton", {
  //       opacity: 0,
  //       x: -500,
  //     })
  //     .to(".profileButton", {
  //       opacity: 1,
  //       x: 0,
  //       ease: "power3",
  //     });

  //   // Create a ScrollTrigger for entering and leaving the trigger
  //   const profileTrigger = ScrollTrigger.create({
  //     trigger: ".cv-main",
  //     start: "60% bottom",
  //     markers: true,
  //     scrub: true,
  //     onEnter: () => {
  //       // Play the profile animations when entering the trigger
  //       if (profileTimeline.current) {
  //         profileTimeline.current.play();
  //       }
  //     },
  //     onLeaveBack: () => {
  //       // Kill the profile timeline when leaving the trigger
  //       if (profileTimeline.current) {
  //         profileTimeline.current.kill();
  //       }
  //     },
  //   });

  //   // Other animations triggered by scrolling
  //   // ...

  //   // Clean up the ScrollTriggers and timeline when the component unmounts
  //   return () => {
  //     profileTrigger.kill();
  //     if (profileTimeline.current) {
  //       profileTimeline.current.kill();
  //     }
  //   };
  // }, []);

  // ...

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // First Animation (Overlay)
    gsap.to(".overlay", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".cv",
        start: "10% top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    // Second Animation
    gsap.from(".cvDetails h1", {
      y: 500,
      opacity: 0,
    });

    gsap.from(".cvDetails p", {
      y: 500,
      opacity: 0,
    });

    gsap.from(".cvDetails button", {
      y: 500,
      opacity: 0,
    });

    gsap.to(".cvDetails h1", {
      y: 0,
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: ".cv-main",
        start: "50% 80%", // Adjust this start point as needed
        end: "60% bottom",
        scrub: 1,
      },
    });
    gsap.to(".cvDetails p", {
      y: 0,
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: ".cv-main",
        start: "70% 80%", // Adjust this start point as needed
        end: "80% bottom",
        scrub: 1,
      },
    });
    gsap.to(".cvDetails button", {
      y: 0,
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: ".cv-main",
        start: "90% 80%", // Adjust this start point as needed
        end: "bottom bottom",
        scrub: 1,
      },
    });
  }, []);
  return (
    <div className="cv-main">
      <div className="w-3/4 cv m-auto my-48 relative" ref={cvRef}>
        <div className="overlay" />
        <Image src={CV1} className="cv1" alt="cv" />
        <Image src={CV2} className="cv2" alt="cv" />
        <Image src={CV3} className="cv3" alt="cv" />
        {/*<div className="profileCard absolute top-0 flex items-center justify-between z-20 w-full h-full flex-col">
          <Image
            src={ProfileImage}
            className=" w-2/4 t-0 m-auto rounded-full scale-0"
          />
           <div className="w-full bg-[--dark] h-[1px] profileRow" />
          <div className="relative border-solid border-[--dark] w-full py-4 flex justify-end pr-3  profileButton">
            <Button>
              <BsArrowRight className="relative p-2 rounded-full text-4xl" />
            </Button>
          </div> 
        </div>*/}
        <div className="absolute top-0 w-full h-full m-auto text-center z-30 flex items-center justify-center flex-col cvDetails p-4">
          <h1 className="text-[--light] text-[40px] mb-6 font-bold ">
            Abdullah Sufyan
          </h1>
          <p className="text-[--light] text-left ml-3 ">
            I'm a web developer with a knack for creating all sorts of websites,
            both the front-end, which is what you see and interact with, and the
            back-end, the behind-the-scenes magic that makes websites work. I
            really enjoy making websites that are not just functional but also
            look super cool with animations and stuff. If you ever need a
            website, whether it's for your business or a personal project, I'm
            your go-to person. I'll make sure your website looks awesome and
            works like a charm. Just drop me a message, and we can work together
            to bring your website dreams to life!
          </p>
          <button className="w-3/4 mt-4 mx-4">
            <Link href="/resume.pdf" target={"_blank"} download={true}>
              <Button>Download CV</Button>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CV;
