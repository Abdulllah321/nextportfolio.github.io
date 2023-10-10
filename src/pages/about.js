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

      <Layout>
        <main className="flex w-full flex-col items-center justify-center bg-[--light] px-20 lg:px-16">
          <AnimatedText
            text="Passionate People, Purposeful Projects"
            className="text-[5.5rem] my-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:my-8 "
          />
          <div className="grid w-full grid-cols-8 gap-16 p-4 max-w-[1280px] m-auto">
            <div className="col-span-3 flex flex-col items-start justify-start  lg:col-span-4 md:order-2">
              <h2 className="mb-4 text-lg font-bold uppercase text-[--dark]  transition-all duration-300 ease-out">
                Biography
              </h2>
              <p className="font-medium text-[--dark]  transition-all duration-300 ease-out">
                I'm Abdullah Sufyan, a passionate MERN stack developer from
                Karachi, Pakistan. My web development journey started in 2022,
                with humble beginnings in HTML and CSS. Swiftly, I mastered
                these foundational technologies, crafting over ten websites and
                various smaller projects.
              </p>
              <p className="font-medium my-4 text-[--dark]  transition-all duration-300 ease-out">
                My skill set covers HTML, CSS, JavaScript, Vue.js, React.js,
                Node.js, Express.js, MongoDB, Tailwind CSS, Sass, Next.js,
                Bootstrap, Framer Motion, GSAP, and ScrollTrigger. I specialize
                in full-stack development, managing both user interfaces and
                server-side logic.
              </p>
              <p className="font-medium text-[--dark] mb-4  transition-all duration-300 ease-out">
                I'm proud of my achievements, including participation in
                TechWiz4, a global competition. My coding philosophy revolves
                around creating modernistic websites that blend stunning visuals
                with top-notch functionality. My goal is to continue shaping the
                web development landscape with exceptional user-centric designs
                and seamless functionality.
              </p>
              <p className="font-medium text-[--dark]  transition-all duration-300 ease-out">
                This biography captures my journey, skills, and aspirations as a
                web developer. I'm eager to keep pushing the boundaries of web
                development and design, creating impactful digital experiences.
              </p>
            </div>
              <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-[--dark] p-8 bg-[--light]  transition-all duration-300 ease-out lg:col-span-4 md:order-1 flex items-center justify-center">
                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-[--dark] " />
                <Image
                  src={ProfilePic}
                  alt="Abdullah"
                  className="w-full h-auto rounded-2xl"
                  priority
                />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-around lg:col-span-8 lg:flex-row md:order-3">
              <div className="flex flex-col items-center justify-center ">
                <span className="inline-block text-7xl font-bold text-[--dark]  transition-all duration-300 ease-out ">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-[--grey]  transition-all duration-300 ease-out">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-center justify-center ">
                <span className="inline-block text-7xl font-bold text-[--dark]  transition-all duration-300 ease-out ">
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-[--grey]  transition-all duration-300 ease-out">
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
        </main>
      </Layout>
    </>
  );
};

export default about;
