import "@/styles/cv.css"
import "@/styles/globals.css";
import "@/styles/footer.css"
import { Montserrat } from "next/font/google";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import { useEffect } from "react";
import Header from "@/components/Header/index";
import Footer from "../components/Footer";

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
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>
        <Cursor/>
        <Navbar/>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </main>
    </>
  );
}
