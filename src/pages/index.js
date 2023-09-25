
import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "../components/Layout"
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "../components/AnimatedText"
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import { motion } from "framer-motion";
import HireMe from "../components/HireMe"
import CV from "../components/CV";
import SlidingImages from "@/components/SlidingImages";
import SlidingImagesInvert from "@/components/SlidingImagesInvert";
import TransitionEffect from "@/components/TransitionEffect";
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
    <TransitionEffect/>
      <Head>
        <title>Abdullah</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex flex-col items-center text-dark w-full min-h-screen ">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2 flex flex-col justify-items-start self-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left"
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
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark transition-all duration-500 "
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:abdullahsufyan2007@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline"
                >
                  Contact
                </Link>
              </motion.div>
            </div>
            <div className="w-1/2 relative flex items-center justify-center">
              <motion.div
                initial="initial"
                animate="animate"
                transition="transition"
                variants={Images}
              >
                <Image
                  src={profilePic}
                  alt="AbdullahSufyan"
                  className="w-full h-auto relative pl-8"
                />
              </motion.div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <CV />
        <div className="slidersOfImages">
        <SlidingImages />
        <SlidingImagesInvert/>
        <SlidingImages />
        </div>
      </main>
    </>
  );
}
