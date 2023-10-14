"use client";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
import styles from "@/styles/Contact.module.scss";
import { BiUser, BiMessageAltDetail, BiLogoGmail } from "react-icons/bi";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { RiPhoneLine, RiWhatsappFill } from "react-icons/ri";
import { LuGlasses } from "react-icons/lu";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Link from "next/link";
import gsap from "gsap";
import Image from "next/image";
import profile from "@/components/assets/profile.png";
import { FaXTwitter } from "react-icons/fa6";
import { DribbbleIcon, LinkedInIcon, PinterestIcon } from "@/components/Icons";
import { BsFacebook } from "react-icons/bs";

const Contact = () => {
  const icons = [
    <BiUser key="user-icon" />,
    <AiOutlineMail key="mail-icon" />,
    <RiPhoneLine key="phone-icon" />,
    <LuGlasses key="glasses-icon" />,
    <BiMessageAltDetail key="message-icon" />,
  ];

  const exampleText = [
    "John Doe",
    "john@example.com",
    "+1 123-456-7890",
    "Web Design, SEO...",
    "Hello Abdullah, I need help with...",
  ];

  const button = useRef(null);

  useEffect(() => {
    const buttonWrapper = document.querySelector(
      ".Contact_buttonWrapper__VUGyv"
    );

    const handleMouseMove = (e) => {
      const buttonRect = button.current.getBoundingClientRect();
      const buttonWrapperRect = buttonWrapper.getBoundingClientRect();

      const newX = e.clientX - buttonWrapperRect.left - buttonRect.width / 2;

      const maxX = buttonWrapperRect.width - buttonRect.width;
      const clampedX = Math.min(maxX, Math.max(0, newX));

      gsap.to(button.current, { duration: 0.3, left: clampedX });
    };

    const handleTouchMove = (e) => {
      // Handle touch events for small screens
      const buttonRect = button.current.getBoundingClientRect();
      const buttonWrapperRect = buttonWrapper.getBoundingClientRect();

      const touch = e.touches[0];
      if (touch) {
        // Ensure there is a touch event
        const newX =
          touch.clientX - buttonWrapperRect.left - buttonRect.width / 2;

        const maxX = buttonWrapperRect.width - buttonRect.width;
        const clampedX = Math.min(maxX, Math.max(0, newX));

        gsap.to(button.current, { duration: 0.3, left: clampedX });
      }
    };

    // Check if screen width is less than 1024px
    if (window.innerWidth < 1024) {
      buttonWrapper.addEventListener("touchmove", handleTouchMove);
      buttonWrapper.addEventListener("mousemove", handleMouseMove);
    } else {
      buttonWrapper.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      // Remove the appropriate event listener based on screen width
      if (window.innerWidth < 1024) {
        buttonWrapper.removeEventListener("touchmove", handleTouchMove);
        buttonWrapper.removeEventListener("mousemove", handleMouseMove);
      } else {
        buttonWrapper.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const MagneticButton = ({ children }) => {
    const magnetic = useRef(null);

    useEffect(() => {
      if (magnetic.current) {
        const xTo = gsap.quickTo(magnetic.current, "x", {
          duration: 1,
          ease: "elastic",
        });
        const yTo = gsap.quickTo(magnetic.current, "y", {
          duration: 0.5,
          ease: "elastic",
        });

        magnetic.current.addEventListener("mousemove", (e) => {
          const { clientX, clientY } = e;
          const { height, width, left, top } =
            magnetic.current.getBoundingClientRect();
          const x = clientX - (left + width / 2);
          const y = clientY - (top + height / 2);
          xTo(x * 0.2);
          yTo(y * 0.5);
        });

        magnetic.current.addEventListener("mouseleave", (e) => {
          xTo(0);
          yTo(0);
        });
      }
    }, []);

    return React.cloneElement(children, { ref: magnetic });
  };

  const quote = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const singleWord = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <>
      <Head>
        <title>Abdullah || Contact page</title>
        <meta name="description" content="my description" />
      </Head>
      <Layout>
        <main className="py-32 w-full h-full relative z-[100] bg-[--light]">
          <div className="slidersOfImages max-w-screen-[1280px] w-full flex max-w-[1280px] m-auto lg:flex-col-reverse lg:px-8 ">
            <div className="w-[70%] relative lg:w-full">
              <AnimatedText
                text={`Let's embark on our coding journey together!`}
                className="text-[3.5rem] text-left leading-[1.2] mb-14 md:text-[3rem] sm:text-[2.5rem] xs:text-[2rem] lg:hidden"
              />

              <form
                className={styles.form}
                action="https://formspree.io/f/meqbpzyj"
                method="POST"
              >
                {[
                  { label: "Full Name", name: "username" },
                  { label: "Email Address", name: "email" },
                  { label: "Phone Number", name: "phoneNumber" },
                  { label: "Assistance or Support", name: "subject" },
                  { label: "Your Message", name: "message" },
                ].map((question, index) => (
                  <motion.div
                    className={styles.box}
                    key={index}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                  >
                    <div
                      className={styles.question}
                    >{`What is Your ${question.label}?`}</div>
                    <div className={styles.inputBox}>
                      <input
                        type={
                          index === 1 ? "text" : index === 2 ? "tel" : "text"
                        }
                        required="required"
                        className={styles.input}
                        autoComplete="off"
                        name={question.name}
                      />
                      <span className={styles.span}>
                        {`Enter Your ${question.label}`}
                        <span className={styles.exp}>
                          (<b>e.g,</b> {exampleText[index]})
                        </span>
                      </span>
                      <span className={styles.icon}>{icons[index]}</span>
                    </div>
                  </motion.div>
                ))}
                <div className={styles.mainButton}>
                  <div className={styles.line} />
                  <div className={styles.buttonWrapper}>
                    <button type="submit">
                      <motion.div className={`${styles.button}`} ref={button}>
                        <Button>Submit</Button>
                      </motion.div>
                    </button>
                  </div>
                </div>
              </form>
              <div className="lg:flex flex-col w-full mt-16 hidden">
                <h1 className="text-2xl font-extrabold underline underline-offset-4 text-[--dark] uppercase">
                  Social Links
                </h1>
                <nav className="flex items-start justify-around flex-wrap gap-x-32 gap-y-8 mt-4">
                  <MagneticButton>
                    <motion.a
                      href="https://twitter.com"
                      target={"_blank"}
                      className={`w-8 flex flex-col items-center ${styles.an} `}
                    >
                      <FaXTwitter className="text-[2rem] text-[--dark]" />
                      <h4 className={` ${styles.h4} mt-2 `}>
                        <span>Twitter</span>
                      </h4>
                    </motion.a>
                  </MagneticButton>
                  <MagneticButton>
                    <motion.a
                      href="https://twitter.com"
                      target={"_blank"}
                      className={`w-8 flex flex-col items-center ${styles.an} `}
                    >
                      <AiFillGithub className="text-[2rem] text-[--dark]" />
                      <h4 className={` ${styles.h4} mt-2`}>
                        <span>Github</span>
                      </h4>
                    </motion.a>
                  </MagneticButton>
                  <MagneticButton>
                    <motion.a
                      href="https://twitter.com"
                      target={"_blank"}
                      className={`w-8 flex flex-col items-center ${styles.an} `}
                    >
                      <LinkedInIcon />
                      <h4 className={` ${styles.h4} mt-2`}>
                        <span>LinkedIn</span>
                      </h4>
                    </motion.a>
                  </MagneticButton>
                  <MagneticButton>
                    <motion.a
                      href="https://twitter.com"
                      target={"_blank"}
                      className={`w-8 flex flex-col items-center ${styles.an} `}
                    >
                      <BsFacebook className="text-[2rem] text-[--dark]" />
                      <h4 className={` ${styles.h4} mt-2`}>
                        <span>Facebook</span>
                      </h4>
                    </motion.a>
                  </MagneticButton>
                  <MagneticButton>
                    <motion.a
                      href="https://twitter.com"
                      target={"_blank"}
                      className={`w-8 flex flex-col items-center ${styles.an} `}
                    >
                      <PinterestIcon />
                      <h4 className={` ${styles.h4} mt-2`}>
                        <span>Pinterest</span>
                      </h4>
                    </motion.a>
                  </MagneticButton>
                  <MagneticButton>
                    <motion.a
                      href="https://twitter.com"
                      target={"_blank"}
                      className={`w-8 flex flex-col items-center ${styles.an} `}
                    >
                      <DribbbleIcon />
                      <h4 className={` ${styles.h4} mt-2`}>
                        <span>Dribble</span>
                      </h4>
                    </motion.a>
                  </MagneticButton>
                </nav>
              </div>
            </div>

            <div className="w-[30%] relative pl-12 lg:w-full lg:pl-0 lg:mb-16">
              <motion.div
                className="w-[10rem] mb-20 relative left-10 rounded-full overflow-hidden lg:hidden items-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, type: "spring" }}
              >
                <Image src={profile} alt="Abdullah" priority />
              </motion.div>
              <h1 className="text-[3.5rem] text-left leading-[1.2] mb-14 md:text-[3rem] sm:text-[2.5rem] hidden lg:flex text-[--dark] indent-[4.5rem] md:indent-[4rem] ">
                <Image
                  src={profile}
                  alt="Abdullah"
                  priority
                  className="hidden lg:block lg:w-[4rem] lg:h-[4rem] md:w-[3.5rem] md:h-[3.5rem] sm:w-[3rem] sm:h-[3rem] rounded-full absolute"
                />
                Let&apos;s embark on our coding journey together!
              </h1>
              <motion.div
                className="w-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, type: "spring", stiffness: 100 }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.205096331115!2d67.15852922574688!3d24.925082092667974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33848c50f7981%3A0x2fed183ee972a3fa!2sPatel%20Residency%D8%8C%20Block%209%2FA%2C%20Gulistan-e-Jauhar-Malir%20Cantt%20Rd%2C%20Gul%20Housing%20Society%20Block%209%20A%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1696097843509!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
              <motion.div
                className="flex flex-col w-full mt-20"
                initial={{ x: -200 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h1 className="text-2xl font-extrabold underline underline-offset-4 text-[--dark] uppercase">
                  Contact Details
                </h1>
                <MagneticButton>
                  <a
                    href={`mailto:abdullahsufyan2007@gmail.com`}
                    target="_blank"
                  >
                    <h4
                      className={`flex mt-4 items-center text-start ${styles.h4}`}
                    >
                      <BiLogoGmail className="text-[1.5rem] mr-2 text-[--dark] " />{" "}
                      <span>abdullahsufyan2007@gmail.com</span>
                    </h4>
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a href={`https://wa.me/923233297166/`} target="_blank">
                    <h4
                      className={`flex mt-4 items-center text-start ${styles.h4}`}
                    >
                      <RiWhatsappFill className="text-[1.5rem] mr-2 text-[--dark]" />{" "}
                      <span>+92 323 3297166</span>
                    </h4>
                  </a>
                </MagneticButton>
              </motion.div>
              <div className="flex flex-col w-full mt-16 lg:hidden">
                <motion.h1
                  className="text-2xl font-extrabold underline underline-offset-4 text-[--dark] uppercase"
                  initial={{ x: -200 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Social Links
                </motion.h1>
                <motion.nav
                  className="flex items-start justify-around flex-wrap gap-x-32 gap-y-8 mt-4"
                  variants={quote}
                  initial="initial"
                  animate="animate"
                >
                  <MagneticButton>
                    <motion.a
                      variants={singleWord}
                      initial="initial"
                      animate="animate"
                      href="https://twitter.com"
                      target={"_blank"}
                      className={`w-8 flex flex-col items-center ${styles.an} `}
                    >
                      <FaXTwitter className="text-[2rem] text-[--dark]" />
                      <h4 className={` ${styles.h4} mt-2 `}>
                        <span>Twitter</span>
                      </h4>
                    </motion.a>
                  </MagneticButton>
                  <MagneticButton>
                    <motion.a
                      variants={singleWord}
                      initial="initial"
                      animate="animate"
                      href="https://twitter.com"
                      target={"_blank"}
                      className={`w-8 flex flex-col items-center ${styles.an} `}
                    >
                      <AiFillGithub className="text-[2rem] text-[--dark]" />
                      <h4 className={` ${styles.h4} mt-2`}>
                        <span>Github</span>
                      </h4>
                    </motion.a>
                  </MagneticButton>
                  <MagneticButton>
                    <motion.a
                      variants={singleWord}
                      initial="initial"
                      animate="animate"
                      href="https://twitter.com"
                      target={"_blank"}
                      className={`w-8 flex flex-col items-center ${styles.an} `}
                    >
                      <LinkedInIcon />
                      <h4 className={` ${styles.h4} mt-2`}>
                        <span>LinkedIn</span>
                      </h4>
                    </motion.a>
                  </MagneticButton>
                  <MagneticButton>
                    <motion.a
                      variants={singleWord}
                      initial="initial"
                      animate="animate"
                      href="https://twitter.com"
                      target={"_blank"}
                      className={`w-8 flex flex-col items-center ${styles.an} `}
                    >
                      <BsFacebook className="text-[2rem] text-[--dark]" />
                      <h4 className={` ${styles.h4} mt-2`}>
                        <span>Facebook</span>
                      </h4>
                    </motion.a>
                  </MagneticButton>
                  <MagneticButton>
                    <motion.a
                      variants={singleWord}
                      initial="initial"
                      animate="animate"
                      href="https://twitter.com"
                      target={"_blank"}
                      className={`w-8 flex flex-col items-center ${styles.an} `}
                    >
                      <PinterestIcon />
                      <h4 className={` ${styles.h4} mt-2`}>
                        <span>Pinterest</span>
                      </h4>
                    </motion.a>
                  </MagneticButton>
                  <MagneticButton>
                    <motion.a
                      variants={singleWord}
                      initial="initial"
                      animate="animate"
                      href="https://twitter.com"
                      target={"_blank"}
                      className={`w-8 flex flex-col items-center ${styles.an} `}
                    >
                      <DribbbleIcon />
                      <h4 className={` ${styles.h4} mt-2`}>
                        <span>Dribble</span>
                      </h4>
                    </motion.a>
                  </MagneticButton>
                </motion.nav>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Contact;
