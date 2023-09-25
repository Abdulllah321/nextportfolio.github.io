import React, { useEffect, useRef } from "react";
import Head from "next/head";
import styles from "@/styles/project.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Button from "@/components/Button";
import { LinkArrow } from "@/components/Icons";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { projectVideos } from "@/components/Constants";
import TransitionEffect from "@/components/TransitionEffect";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectVideoRefs = useRef([]);
  const laptopVideoRefs = useRef([]);

  // Function to create laptop video refs
  const createLaptopVideoRefs = () => {
    return projectVideos.map(() => {
      return useRef(null);
    });
  };

  const laptopVideoRefsArray = createLaptopVideoRefs();

  useEffect(() => {
    projectVideos.forEach((projectVideo, index) => {
      const laptopVideoRef = laptopVideoRefsArray[index].current;
      const projectVideoRef = projectVideoRefs.current[projectVideo.id];

      const handleLaptopVideoEnd = () => {
        // Set the opacity of the project video to 1 when the laptop video ends
        gsap.to(projectVideoRef, { opacity: 1, duration: 0.5 });

        // Animate the liveProject element
        const mainProjectElement = projectVideoRef.closest(
          ".project_mainProject__T6WIH"
        );
        const liveProjectElement = mainProjectElement.querySelector(
          ".project_liveProject__Zcjly"
        );
        if (liveProjectElement) {
          gsap.to(liveProjectElement, { top: 0, duration: 0.5, zIndex:2, opacity:1 });
        }
      };

      laptopVideoRef.addEventListener("ended", handleLaptopVideoEnd);
    });
  }, []);

  return (
    <>
    <TransitionEffect/>
      <Head>
        <title>Abdullah || Project page</title>
        <meta name="description" content="mydescription" />
      </Head>
      <main className={`${styles.main} slidersOfImages`}>
        {projectVideos.map((projectVideo, index) => (
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
                  <video autoPlay loop muted>
                    <source src={projectVideo.src} type={projectVideo.type} />
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
    </>
  );
};

export default Projects;
