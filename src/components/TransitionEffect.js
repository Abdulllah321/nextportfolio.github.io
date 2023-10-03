import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TransitionEffect = ({ title }) => {

  return (
    <>
      {/* <motion.div
        className="fixed top-0 bottom-0 bg-[--dark] w-screen h-screen z-[1000] flex justify-center items-center"
        initial={{ scaleY: 0, transformOrigin: "bottom" }}
        animate={{ scaleY: 1, transformOrigin: "bottom" }}
        exit={{ scaleY: 0, transformOrigin: "top" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
         <div className="flex items-center justify-center">
        <div className="bg-[--light] w-3 h-3 rounded-full relative -left-5 " />
          <h1 className="text-[--light] text-6xl ">{title}</h1>
        </div>
        
      </motion.div> */}
    </>
  );
};

export default TransitionEffect;
