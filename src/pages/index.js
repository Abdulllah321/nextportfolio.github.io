"use client";
import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "../components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import { motion } from "framer-motion";
import HireMe from "../components/HireMe";
import CV from "../components/CV";
import SlidingImages from "@/components/SlidingImages";
import SlidingImagesInvert from "@/components/SlidingImagesInvert";
const inter = Inter({ subsets: ["latin"] });

const Images = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 200,
    },
  },
};

const paragraph = {
  initial: {
    opacity: 0,
    pathLength: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      type: "spring",
    },
  },
};
const button = {
  initial: {
    opacity: 0,
    pathLength: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    y: 0,
    transition: {
      delay: 0.8,
      staggerChildren: 0.5,
      duration: 1,
      type: "spring",
    },
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Abdullah Sufyan || Professional Freelance Designer & Developer
        </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="flex flex-col items-center text-[--dark] w-full min-h-screen transition-all duration-300 ease-out">
        <Layout className="pt-0 ">
          <div className="max-w-[1280px] m-auto min-h-[800px] flex items-baseline justify-center lg:pt-32 md:pt-28 sm:pt-8 md:mb-32 2xl:p-10 lg:p-12 xl:p-20 md:p-10 sm:p-8">
            <div className="flex items-center justify-between w-full md:flex-col-reverse">
              <div className="w-1/2 flex flex-col justify-items-start self-center lg:w-[90%] mx-auto lg:text-center">
                <AnimatedText
                  text="Turning Vision Into Reality With Code And Design."
                  className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-4xl"
                />
                <motion.p
                  className="my-4 text-base font-medium"
                  initial="initial"
                  animate="animate"
                  transition="transition"
                  variants={paragraph}
                >
                  As a skilled full-stack developer, I am dedicated to turning
                  ideas into innovative web applications.
                </motion.p>
                <motion.div
                  className="flex items-center self-center mt-2"
                  initial="initial"
                  animate="animate"
                  transition="transition"
                  variants={button}
                >
                  <Link
                    href="/resume.pdf"
                    target={"_blank"}
                    className="flex items-center bg-[--dark] text-[--light] p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-[--light] hover:text-[--dark] border-2 border-solid border-transparent hover:border-[--dark] transition-all duration-300 "
                    download={true}
                  >
                    Resume <LinkArrow className={"w-6 ml-1"} />
                  </Link>
                  <Link
                    href="/contact"
                    className="ml-4 text-lg font-medium capitalize text-[--dark] underline  transition-all duration-300 ease-out"
                  >
                    Contact
                  </Link>
                </motion.div>
              </div>
              <div className="w-1/2 relative flex items-center justify-center lg:hidden md:w-10/12 sm:w-[90%] md:flex">
                <motion.div
                  initial="initial"
                  animate="animate"
                  transition="transition"
                  variants={Images}
                >
                  <Image
                    src={profilePic}
                    alt="Abdullah Sufyan"
                    className="w-full h-auto relative pl-8"
                    priority
                    sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 50vw"
                  />
                </motion.div>
              </div>
            </div>
            </div>
            <div className="absolute lg:hidden bottom-14 w-full flex justify-center items-center ">
                <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[--dark] flex justify-center items-start p-2">
                  <motion.div
                    animate={{
                      y: [0, 24, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    className="w-4 h-4 rounded-full bg-[--dark] mb-1"
                  />
                </div>
          </div>
          <HireMe />
          <CV />
          <div className="slidersOfImages relative py-52 z-[100]">
            <SlidingImages />
            <SlidingImagesInvert />
            <SlidingImages transform="translate-x-[100px]" />
          </div>
        </Layout>
      </main>
    </>
  );
}
