import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
import styles from "@/styles/Contact.module.scss";
import { BiUser, BiMessageAltDetail } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { RiPhoneLine } from "react-icons/ri";
import { LuGlasses } from "react-icons/lu";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Button from "@/components/Button";
import Link from "next/link";
import gsap from "gsap";

const Contact = () => {
  const icons = [
    <BiUser />,
    <AiOutlineMail />,
    <RiPhoneLine />,
    <LuGlasses />,
    <BiMessageAltDetail />,
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

      // Calculate the button's new left position based on the mouse cursor's position
      const newX = e.clientX - buttonWrapperRect.left - buttonRect.width / 2;

      // Ensure the button stays within the bounds of the buttonWrapper
      const maxX = buttonWrapperRect.width - buttonRect.width;
      const clampedX = Math.min(maxX, Math.max(0, newX));

      // Update the button's position using GSAP animation
      gsap.to(button.current, { duration: 0.3, left: clampedX });
    };

    // Add mousemove event listener to the buttonWrapper
    buttonWrapper.addEventListener("mousemove", handleMouseMove);

    // Remove the event listener when the component unmounts
    return () => {
      buttonWrapper.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Abdullah || Contact page</title>
        <meta name="description" content="my description" />
      </Head>
      <Layout>
        <main className="my-32">
          <div className="slidersOfImages max-w-screen-xl w-full p-16">
            <div className="w-[80%] relative">
              <AnimatedText
                text={`Let's embark on our coding journey together!`}
                className="text-[2.5rem] text-left"
              />

              <form className={styles.form}>
                {[
                  "Full Name",
                  "Email Address",
                  "Phone Number",
                  "Assistance or Support",
                  "Your Message",
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
                    >{`What is Your ${question}?`}</div>
                    <div className={styles.inputBox}>
                      <input
                        type={index === 2 ? "tel" : "text"}
                        required="required"
                        className={styles.input}
                      />
                      <span className={styles.span}>
                        {`Enter Your ${question}`}{" "}
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
                    <Link href={`#`}>
                      <motion.div
                        className={`${styles.button}`}
                        ref={button}
                      >
                        <Button>Submit</Button>
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Contact;
