import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <>
      <MagneticButton>
        <div className="flex items-center justify-center mt-2">
          <MotionLink
            href="/"
            className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold border-2 border-solid border-transparent dark:border-light "
            whileHover={{
              backgroundColor: [
                "#121212", // Original dark gray
                "rgba(131,58,180,1)", // Primary color
                "rgba(253,29,29,1)", // Additional color related to primary-dark
                "rgba(252,176,69,1)", // Additional color related to grey
                "rgba(131,58,180,1)", // Primary color
                "#121212", // Original dark gray
                "#FF5733", // Sunset Orange
                "#9b59b6", // Rich Purple
                "#00b894", // Teal Blue
                "#f39c12", // Warm Yellow
                "#2ecc71", // Emerald Green
                "#e74c3c", // Alizarin Red
                "#3498db", // Primary Dark Blue
                "#34495e", // Wet Asphalt
                "#e67e22", // Carrot Orange
                "#16a085", // Green Sea
                "#8e44ad", // Wisteria Purple
                "#c0392b", // Pomegranate
                "#2980b9", // Belize Hole
                "#f1c40f", // Sunflower Yellow
              ],
              transition: { duration: 5, repeat: Infinity },
            }}
          >
            AS
          </MotionLink>
        </div>
      </MagneticButton>
    </>
  );
};

export default Logo;
