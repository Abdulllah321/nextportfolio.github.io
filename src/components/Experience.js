import { useRef } from "react";
import React from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

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
      className="my-8 first:mt-0 last:mb-0 w-[60%] overflow-hidden mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon references={ref} />
      <motion.div
        initial={{ x: -500, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          type: "spring",
          repeatType: "reverse",
          restSpeed: 0.5,
          repeatType: "mirror",
          once:true
        }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a href={companyLink} target="_blank" className="text-primary">
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">
          {work}
          <br />
          <b>Note:</b>
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
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-[1.5px] w-[4px] h-full bg-dark origin-top rounded-full"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="https://google.com"
            time="2022-Present"
            address="Mountain View, CA"
            note="The above details are fabricated to enhance the aesthetics of my website. However, in reality, I possess one year of hands-on experience in website development. Although I haven't formally joined any company yet, I invite you to explore the impressive portfolio of projects I've personally created."
          />
          <Details
            position="Software Engineer"
            company="Meta"
            companyLink="https://google.com"
            time="2022-Present"
            address="Mountain View, CA"
            note="The above details are fabricated to enhance the aesthetics of my website. However, in reality, I possess one year of hands-on experience in website development. Although I haven't formally joined any company yet, I invite you to explore the impressive portfolio of projects I've personally created."
          />
          <Details
            position="Software Engineer"
            company="Meta"
            companyLink="https://google.com"
            time="2022-Present"
            address="Mountain View, CA"
            note="The above details are fabricated to enhance the aesthetics of my website. However, in reality, I possess one year of hands-on experience in website development. Although I haven't formally joined any company yet, I invite you to explore the impressive portfolio of projects I've personally created."
          />
          <Details
            position="Software Engineer"
            company="Meta"
            companyLink="https://google.com"
            time="2022-Present"
            address="Mountain View, CA"
            note="The above details are fabricated to enhance the aesthetics of my website. However, in reality, I possess one year of hands-on experience in website development. Although I haven't formally joined any company yet, I invite you to explore the impressive portfolio of projects I've personally created."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
