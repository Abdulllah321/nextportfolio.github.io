import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";
import AnimatedText from "./AnimatedText";

const Details = ({ type, time, place, info }) => {
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
          duration: 1,
          type: "spring",
        }}
        viewport={{ once: true }}
      >
        <div>
          <h3 className="capitalize font-bold text-2xl text-[--dark] sm:text-xl xs:text-lg">
            {type}&nbsp;
          </h3>
          <span className="capitalize font-medium text-[--grey] pb-7 xs:text-sm">
            {time} | {place}
          </span>
        </div>
        <p className="font-medium w-full text-[--dark] whitespace-pre-wrap md:text-sm">
          {info}
        </p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="mb-64 max-w-[1280px] m-auto">
      <AnimatedText
        text={`Education`}
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
            type="Aptech Learning Centre"
            time="2022 - Present"
            place="Aptech Learning Centre"
            info="I am actively engaged in online learning at Aptech Learning Centre. This platform has been instrumental in helping me expand my knowledge and skills in various areas, including web development and design. I am committed to continuous learning and improvement, and Aptech Learning Centre has been a valuable resource in my educational journey."
          />
          <Details
            type="Intermediate, College"
            time="2022 - Present"
            place="S.M. Govt. College"
            info="I am currently enrolled in S.M. Govt. College, where I am pursuing an intermediate degree in College. This academic journey has been enriching, allowing me to explore various subjects and broaden my knowledge base. My coursework includes subjects that are helping me build a strong foundation for my future endeavors."
          />
          <Details
            type="Intermediate in Arts"
            time="2022 - Present"
            place="Allama Iqbal Open University"
            info="I'm currently pursuing an intermediate degree in Arts at Allama Iqbal Open University. While my primary focus is on web development and technology, I'm also exploring the world of arts. My interest in this field lies mainly in history. I believe that a strong foundation in the arts, especially history, can enhance my understanding of human experiences and provide valuable insights for creating user-centric web designs."
          />
          <Details
            type="Diploma in Video Editing, 2D and 3D Animation"
            time="2022"
            place="TecnoX"
            info="In 2022, I successfully completed a 6-month diploma program in video editing, 2D, and 3D animation. This immersive experience allowed me to gain valuable skills in video production and animation, further expanding my creative capabilities."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
