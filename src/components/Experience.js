import { useRef } from "react";
import React from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";
import AnimatedText from "./AnimatedText";

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
  note,
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[70%] overflow-hidden mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon references={ref} />
      <motion.div
        initial={{ x: "-80%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          type: "spring",
        }}
        viewport={{ once: true }}
      >
        <h3 className="capitalize font-bold text-2xl text-[--dark] sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a href={companyLink} target="_blank" className="text-[--primary]">
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-[--grey] xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full text-[--dark] md:text-sm">
          {work}
          <br />
          <b>Note: </b>
          <span style={{ whiteSpace: "pre-wrap" }}>{note}</span>
        </p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64 max-w-[1280px] m-auto">
      <AnimatedText
        text={`Experience`}
        className="text-[5rem] my-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:my-8 "
      />

      <div ref={ref} className="w-[90%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-[1.5px] w-[4px] h-full bg-[--dark] origin-top rounded-full
          md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Freelance Web Developer"
            company="Freelance"
            companyLink="https://yourwebsite.com"
            time="2022-Present"
            address="Remote"
            note="I am a dedicated Full-Stack Web Developer with one year of experience. My journey began with HTML and CSS and evolved into becoming proficient in the MERN stack (MongoDB, Express.js, React.js, Node.js). I specialize in crafting websites that seamlessly blend stunning visuals with top-notch functionality. I have a passion for UI/UX design, creating user-centric designs that captivate and engage visitors. My portfolio includes animated websites, inspired by Awwwards, and I've actively participated in global competitions. As a freelancer, I've had the privilege to work independently and bring innovative web applications to life. You're invited to explore my portfolio to witness the results of my web development journey."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
