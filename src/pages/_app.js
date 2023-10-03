import "@/styles/cv.css";
import "@/styles/globals.css";
import "@/styles/footer.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
// import CurveSvg from "@/components/curveSvg";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
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
        <motion.div
          className={`${montserrat.variable} font-mont bg-[--light] w-full min-h-screen`}
          key={pathname}
        >
          <Component {...pageProps} />
          <motion.div
            className={`fixed top-0 bottom-0 bg-[--dark] w-screen h-screen z-[1000] flex justify-center items-center origin-top`}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="w-4 h-4 bg-[--light] rounded-full -left-4 relative" />
            <motion.h1
              className="text-[--light] text-8xl capitalize origin-right"
              initial={{ left: 0 }}
              animate={{ left: 0 }}
              exit={{ left: "-100%" }}
              transition={{ duration: 0.5 }}
            >
              {displayText}
            </motion.h1>
          </motion.div>
          <motion.div
            className={`fixed top-0 bottom-0 bg-[--dark] w-screen h-screen z-[1000] flex justify-center items-center origin-bottom`}
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="w-4 h-4 bg-[--light] rounded-full -left-4 relative" />
            <motion.h1
              className="text-[--light] text-8xl capitalize"
              initial={{ left: "-100%" }}
              animate={{ left: 0 }}
              exit={{ left: "100%" }}
              transition={{ duration: 0.2 }}
            >
              {displayText}
            </motion.h1>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
