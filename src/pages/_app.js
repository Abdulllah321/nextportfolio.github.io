"use client"
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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimatePresence mode="wait">
        {isLoading ? (
           <PreLoader />
         ) : (
          <motion.div
            className={`${montserrat.variable} font-mont bg-[--light] w-full min-h-screen`}
            key={pathname}
          >
          
            <Component {...pageProps} />
            {/* Display text animation here */}
            <motion.div
              className={`fixed bg-[--dark] w-screen h-screen mx-auto z-[1000] flex justify-center items-center`}
              initial={{ top: "-200%" }}
              animate={{ top: "-200%" }}
              exit={{ top: "0%" }}
              transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
            >
              <div className="w-4 h-4 bg-[--light] rounded-full -left-4 relative" />
              <h1 className="text-[--light] text-8xl capitalize origin-right">
                {displayText}
              </h1>
            </motion.div>
            {/* Second display text animation here */}
          `  <motion.div
              className={`fixed bg-[--dark] w-screen h-screen mx-auto z-[1000] flex justify-center items-center`}
              initial={{ top: "0" }}
              animate={{ top: "200%" }}
              exit={{ top: "200%" }}
              transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
            >
              <div className="w-4 h-4 bg-[--light] rounded-full -left-4 relative" />
              <h1 className="text-[--light] text-8xl capitalize">
                {displayText}
              </h1>
            </motion.div>`
          </motion.div>
         )}
      </AnimatePresence>
    </>
  );
}
