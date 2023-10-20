"use client";
import "@/styles/cv.css";
import "@/styles/globals.css";
import "@/styles/footer.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import PreLoader from "@/components/PreLoader";


const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  const pathname = usePathname();
  const [displayText, setDisplayText] = useState("Home");

  useEffect(() => {
    setDisplayText(pathname === "/" ? "Home" : pathname.replace("/", ""));
  }, [pathname]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png " />
        <title>Abdullah Sufyan</title>
        <meta
          name="description"
          content="Discover an enthusiastic MERN stack developer hailing from the vibrant city of Karachi, Pakistan. With a rich palette of skills encompassing HTML, CSS, JavaScript, Vue.js, React.js, Node.js, Express.js, MongoDB, and more, this developer excels in the art of full-stack development. Their passion lies in crafting web experiences that seamlessly merge stunning visuals with impeccable functionality. Proudly associated with notable achievements in the world of web development, they invite you to embark on an exciting journey with a focus on user-centric web designs that leave a lasting impact."
        />
        <meta
          property="og:title"
          content="Abdullah Sufyan •  Modern Website Designer & Developer"
        />
        <meta
          property="og:description"
          content="Meet Abdullah Sufyan, a skilled web developer from Karachi, Pakistan. With expertise in HTML, CSS, JavaScript, Vue.js, React.js, Node.js, Express.js, MongoDB, and more, he excels in full-stack development. Abdullah's passion is creating web designs that blend striking visuals with seamless functionality. Join him on his journey through the world of web development, where user-centric designs make a lasting impact."
        />
        <meta property="og:image" content="https://abdullahsufyan.vercel.app/ogImge.png" />
        <meta property="og:url" content="https://abdullahsufyan.vercel.app/" />

        <meta property="og:site_name" content="Abdullah Sufyan" />
        <meta property="og:locale" content="en" />
        <meta property="og:type" content="website" />
        <meta
          property="twitter:title"
          content="Abdullah Sufyan  •  Modern Website Designer & Developer"
        />
        <meta
          property="twitter:description"
          content="Meet Abdullah Sufyan, a skilled web developer from Karachi, Pakistan. With expertise in HTML, CSS, JavaScript, Vue.js, React.js, Node.js, Express.js, MongoDB, and more, he excels in full-stack development. Abdullah's passion is creating web designs that blend striking visuals with seamless functionality. Join him on his journey through the world of web development, where user-centric designs make a lasting impact."
        />
        <meta property="twitter:image" content="https://abdullahsufyan.vercel.app/ogImge.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="google" content="notranslate" />
        <meta
          name="keywords"
          content="Freelancer Portfolio, Web Designer, Web Developer, Modern Web Developer, Animated Website Designer, MERN Stack Developer, Full-Stack Developer, UI/UX Designer, Front-End Developer, Back-End Developer, Responsive Web Design, User-Centric Web Design, HTML, CSS, JavaScript, Vue.js, React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Sass, Bootstrap, Framer Motion, ScrollTrigger, Nextjs developer, 3d website Developer, GSAP Animation, User Interface Design, Web Development Projects, TechWiz Participant, Karachi, Pakistan"
        />
      </Head>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <>
            <PreLoader />
          </>
        ) : (
          <motion.div
            className={`${montserrat.variable} font-mont bg-[--light] w-full min-h-screen`}
            key={pathname}
          >
            <Component {...pageProps} />
            {/* Display text animation here */}
            <motion.div
              className={`fixed w-screen h-screen mx-auto z-[900] flex justify-center items-center origin-top left-0 top-0 flex-col`}
              initial={{ display: "none" }}
              animate={{ display: "none" }}
              exit={{ display: "block" }}
            >
              <motion.div
                className="w-screen h-1/2 relative bg-[--dark] z-[1000]  origin-bottom"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              >
                <div className="top-[100%] left-1/2 absolute -translate-x-1/2 -translate-y-1/2 z-[1002] flex items-center justify-center">
                  <div className="w-4 h-4 bg-[--light] rounded-full -left-4 relative" />
                  <h1 className="text-[--light] text-8xl capitalize lg:text-7xl md:text:6xl  ">
                    {" "}
                    {displayText}
                  </h1>
                </div>
              </motion.div>
              <motion.div
                className="w-screen h-1/2 relative bg-[--dark] z-[1000] origin-top "
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              >
                <div className="top-0 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 z-[1002] flex items-center justify-center">
                  <div className="w-4 h-4 bg-[--light] rounded-full -left-4 relative" />
                  <h1 className="text-[--light] text-8xl capitalize lg:text-7xl md:text:6xl ">
                    {" "}
                    {displayText}
                  </h1>
                </div>
              </motion.div>
            </motion.div>
            {/* Second display text animation here */}{" "}
            <motion.div
              className={`fixed  w-screen h-screen mx-auto z-[1000] flex justify-center items-center flex-col origin-bottom left-0 top-0 gap-[2px]`}
              initial={{ display: "block" }}
              animate={{ display: "none" }}
              exit={{ display: "none" }}
              transition={{ delay: 1.5, duration: 1, ease: [0.76, 0, 0.24, 1] }}
            >
              <motion.div
                className="w-screen h-1/2 relative bg-[--dark] z-[1000] overflow-hidden"
                initial={{ left: 0 }}
                animate={{ left: "-100%" }}
                exit={{ left: "-100%" }}
                transition={{
                  duration: 1,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.3,
                }}
              >
                <div className="top-[100%] left-1/2 absolute -translate-x-1/2 -translate-y-1/2 z-[1002] flex items-center justify-center">
                  <div className="w-4 h-4 bg-[--light] rounded-full -left-4 relative" />
                  <h1 className="text-[--light] text-8xl capitalize lg:text-7xl md:text:6xl  ">
                    {" "}
                    {displayText}
                  </h1>
                </div>
              </motion.div>

              <motion.div
                className="w-screen h-1/2 relative bg-[--dark] z-[1000] overflow-hidden"
                initial={{ left: 0 }}
                animate={{ left: "100%" }}
                exit={{ left: "100%" }}
                transition={{
                  duration: 1,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.3,
                }}
              >
                <div className="top-0 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 z-[1002] flex items-center justify-center">
                  <div className="w-4 h-4 bg-[--light] rounded-full -left-4 relative" />
                  <h1 className="text-[--light] text-8xl capitalize lg:text-7xl md:text:6xl ">
                    {displayText}
                  </h1>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
