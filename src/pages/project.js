import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import styles from "@/styles/project.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Button from "@/components/Button";
import { LinkArrow } from "@/components/Icons";
import { projectVideos } from "@/components/Constants";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";

const createLaptopVideoRefs = () => {
  return projectVideos.map(() => {
    return useRef(null);
  });
};

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Projects = () => {
  const projectVideoRefs = useRef([]);
  const laptopVideoRefsArray = createLaptopVideoRefs();
  const videoRef = useRef(null);
  const shuffledProjectVideos = shuffleArray(projectVideos);

shuffledProjectVideos.forEach((project, index) => {
  project.id = index
});

  useEffect(() => {
    // Use shuffledProjectVideos instead of projectVideos here
    shuffledProjectVideos.forEach((projectVideo, index) => {
      const laptopVideoRef = laptopVideoRefsArray[index].current;
      const projectVideoRef = projectVideoRefs.current[projectVideo.id];

      const handleLaptopVideoEnd = () => {
        gsap.to(projectVideoRef, { opacity: 1, duration: 0.5 });

        const mainProjectElement = projectVideoRef.closest(
          ".project_mainProject__T6WIH"
        );
        const liveProjectElement = mainProjectElement.querySelector(
          ".project_liveProject__Zcjly"
        );

        if (liveProjectElement) {
          gsap.to(liveProjectElement, {
            top: 0,
            duration: 0.5,
            zIndex: 2,
            opacity: 1,
          });
        }
      };

      laptopVideoRef.addEventListener("ended", handleLaptopVideoEnd);

      return () => {
        laptopVideoRef.removeEventListener("ended", handleLaptopVideoEnd);
      };
    });
  }, [laptopVideoRefsArray]);


  return (
    <>
      <Head>
        <title>Abdullah Sufyan || Project </title>
        <meta name="description" content="mydescription" />
      </Head>
      <Layout className="p-0 pt-0 z-[100] relative">
        <div className=" !z-[100] !relative w-full h-full bg-[--light] slidersOfImages pb-40">
          <main
            className={`${styles.main}  max-w-[1280px] transition-all duration-300 ease-out`}
          >
            <AnimatedText
              text="Projects"
              className="text-[5rem] my-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:my-8"
            />
            <h3 className="text-[--dark] max-w-[1280px] mx-auto text-center pt-8">
              ⚡ Please Wait: This Page Is Loading Content We're preparing
              something great for you, but it might take a moment to load.
              Thanks for your patience!
            </h3>
            {shuffledProjectVideos.map((projectVideo, index) => (
              <div key={projectVideo.id} className={styles.mainProject}>
                <div className={styles.videos}>
                  <div className={styles.laptop}>
                    <video ref={laptopVideoRefsArray[index]} autoPlay muted>
                      <source src={projectVideo.laptop} type="video/mp4" />
                    </video>
                    <motion.div
                      ref={(ref) =>
                        (projectVideoRefs.current[projectVideo.id] = ref)
                      }
                      className={styles.projectVideo}
                      initial={{ opacity: 0 }}
                    >
                      <video autoPlay loop muted ref={videoRef}>
                        <source
                          src={projectVideo.src}
                          type={projectVideo.type}
                        />
                      </video>
                    </motion.div>
                  </div>
                </div>
                <div className={styles.liveProject}>
                  <div className={styles.texts}>
                    <div className={styles.title}>{projectVideo.title}</div>
                    <div className={styles.description}>
                      {projectVideo.description}
                    </div>
                  </div>
                  <div className={styles.button}>
                    <Button>
                      <Link href={projectVideo.href} target="blank">
                        Live Project <LinkArrow className={styles.svg} />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </main>
        </div>
      </Layout>
    </>
  );
};

export default Projects;
