import React from "react";
import { motion } from "framer-motion";

const TransitionEffect = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 w-screen h-screen z-[100] bg-[--primary] origin-center"
        initial={{ width: "100%",}}
        animate={{ width: "0%", }}
        // exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0  w-screen h-screen z-[90] bg-[--light] origin-center"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        // exit={{ y: ["0%", "100%"], height: ["0%", "100%"] }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className="w-screen h-screen fixed top-0 bottom-0 z-[80]"
        initial={{ left: "0%" }}
        animate={{ left: "500%" }}
        transition={{ delay: 1.5, duration: 1.5 }}
      >
        <motion.div
          className="fixed top-0 bottom-0 w-screen h-screen z-[80] bg-[--dark] origin-center"
          initial={{ scaleX: 0, opacity: 1, skewX: 100, x: "-100%" }}
          animate={{ scaleX: 5, opacity: 0, skewX: 0, x: 0 }}
          // exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
          transition={{ duration: 1.5, type: "easeInOut" }}
        />
      </motion.div>
    </>
  );
};

export default TransitionEffect;
