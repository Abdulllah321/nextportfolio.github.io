import AnimatedText from "@/components/AnimatedText";
import React, { useRef, useEffect } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import ProfilePic from "../../public/images/profile/developer-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, []);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Abdullah || About page</title>
        <meta name="description" content="mydescription" />
      </Head>

      <main className="flex w-full flex-col items-center justify-center bg-[--dark]">
        <Layout>
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="text-[5.5rem] my-16"
          />
          <div className="grid w-full grid-cols-8 gap-16 p-32">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-[--dark] transition transition-all duration-300 ease-out">
                Biography
              </h2>
              <p className="font-medium text-[--dark] transition transition-all duration-300 ease-out">
                Hi, I'm CodeBucks, a web developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients' visions to life.
              </p>
              <p className="font-medium my-4 text-[--dark] transition transition-all duration-300 ease-out">
                I believe that design is about more than just making things look
                pretty – it's about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium text-[--dark] transition transition-all duration-300 ease-out">
                Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-[--dark] p-8 bg-[--light] transition transition-all duration-300 ease-out ">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-[--dark] " />
              <Image
                src={ProfilePic}
                alt="Abdullah"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-around">
              <div className="flex flex-col items-center justify-center ">
                <span className="inline-block text-7xl font-bold text-[--dark] ">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-[--grey]">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-center justify-center ">
                <span className="inline-block text-7xl font-bold text-[--dark] ">
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-[--grey]">
                  Years of Experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <div
            style={{ paddingTop: 0, height: "120vh" }}
            className="slidersOfImages"
          >
            <Education />
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
