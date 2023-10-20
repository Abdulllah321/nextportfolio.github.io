import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Logos from "./Logo";
import {
  DribbbleIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
} from "./Icons";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { useState } from "react";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block w-full bg-[--dark] absolute left-0 -bottom-0.5 scale-x-0
      group-hover:scale-x-100 transition-[transform] ease duration-300 origin-center
      ${router.asPath === href ? "scale-x-100" : "scale-x-0"}
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block w-full bg-[--light] absolute left-0 -bottom-0.5 scale-x-0
      group-hover:scale-x-100 transition-[transform] ease duration-300 origin-center
      ${router.asPath === href ? "scale-x-100" : "scale-x-0"}
      `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [theme, setTheme] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="w-full 2xl:px-16 py-8 font-medium flex items-center justify-between z-[200] text-[--dark] relative xl:px-8 lg:px-6 max-w-[1280px] mx-auto ">
        <button
          className={`flex-col justify-center items-center hidden lg:flex  ${
            isOpen ? "fixed" : "relative"
          }`}
          onClick={handleClick}
        >
          <span
            className={`bg-[--dark] block  w-6 h-0.5 ease-out rounded-sm  transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-1 " : "-translate-y-0.5 relative"
            }`}
          ></span>
          <span
            className={`bg-[--dark] block  w-6 h-0.5 ease-out rounded-sm  transition-all duration-300 my-0.5 ${
              isOpen ? "scale-x-0 " : "scale-x-100 relative"
            }`}
          ></span>
          <span
            className={`bg-[--dark] block  w-6 h-0.5 ease-out rounded-sm  transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1 " : "translate-y-0.5 relative"
            }`}
          ></span>
        </button>
        <div className="flex justify-between w-full items-center lg:justify-end sm:hidden">
          <nav className="lg:hidden">
            <CustomLink href="/" title="Home" className="mr-4 z-20" />
            <CustomLink href="/about" title="About" className="mx-4 z-20" />
            <CustomLink href="/project" title="Project" className="mx-4 z-20" />
            <CustomLink href="/contact" title="Contact" className="ml-4 z-20" />
          </nav>

          <nav className="flex items-center flex-wrap gap-1">
            <div className="flex items-center justify-center lg:hidden">
              <motion.a
                href="https://twitter.com/itsmeabdullah14"
                target={"_blank"}
                className="w-6 mr-3 m-6 text-[--dark] "
                whileHover={{ y: -5 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 15,
                  mass: 0.1,
                }}
                whileTap={{ scale: 0.9 }}
              >
                <FaXTwitter className="text-[1.5rem]" />
              </motion.a>
              <motion.a
                href="https://github.com/Abdulllah321/"
                target={"_blank"}
                className="w-6 mx-3 m-6 text-[--dark] "
                whileHover={{ y: -5 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 15,
                  mass: 0.1,
                }}
                whileTap={{ scale: 0.9 }}
              >
                <AiFillGithub className="text-[1.5rem]" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/abdullah-sufyan-2a1665297/"
                target={"_blank"}
                className="w-6 mx-3 m-6 text-[--dark] "
                whileHover={{ y: -5 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 15,
                  mass: 0.1,
                }}
                whileTap={{ scale: 0.9 }}
              >
                <LinkedInIcon />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target={"_blank"}
                className="w-6 mx-3 m-6 text-[--dark] "
                whileHover={{ y: -5 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 15,
                  mass: 0.1,
                }}
                whileTap={{ scale: 0.9 }}
              >
                <BsFacebook className="text-[1.5rem]" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target={"_blank"}
                className="w-6 mx-3 m-6 text-[--dark] "
                whileHover={{ y: -5 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 15,
                  mass: 0.1,
                }}
                whileTap={{ scale: 0.9 }}
              >
                <PinterestIcon />
              </motion.a>
              <motion.a
                href="https://dribbble.com/abdullah987"
                target={"_blank"}
                className="w-6 mx-3 m-6 text-[--dark] "
                whileHover={{ y: -5 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 15,
                  mass: 0.1,
                }}
                whileTap={{ scale: 0.9 }}
              >
                <DribbbleIcon />
              </motion.a>
            </div>
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="ml-3 flex items-center justify-center rounded-full p-2 theme-switch bg-[--dark] fill-[--dark] text-[--light] right-0 relative"
            >
              {theme === "dark" ? (
                <SunIcon className={`fill-[--dark]`} />
              ) : (
                <MoonIcon className={`fill-[--dark]`} />
              )}
            </button>
          </nav>
        </div>
        {/* Mobile menu */}
        {isOpen ? (
          <motion.div
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="min-w-[70vw] max-w-[90vw] flex flex-col justify-between items-center fixed top-1/2 left-[50%] -translate-x-[50%] -translate-y-1/2 z-30 bg-dark/80 dark:bg-light/80 text-[--light] backdrop-blur-md py-32 rounded-md w-full "
          >
            <nav className="flex flex-col justify-center items-center w-full">
              <CustomMobileLink
                href="/"
                title="Home"
                className="z-20 my-2"
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/about"
                title="About"
                className="z-20 my-2"
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/project"
                title="Project"
                className="z-20 my-2"
                toggle={handleClick}
              />
              <CustomMobileLink
                href="/contact"
                title="Contact"
                className="z-20 my-2"
                toggle={handleClick}
              />
            </nav>

            <nav className="flex items-center justify-center flex-wrap gap-1 ">
              <div className="flex items-center justify-center ">
                <motion.a
                  href="https://twitter.com/itsmeabdullah14"
                  target={"_blank"}
                  className="w-6 mr-3 m-6 text-[--light] sm:mx-1 "
                  whileHover={{ y: -5 }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1,
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaXTwitter className="text-[1.5rem]" />
                </motion.a>
                <motion.a
                  href="https://github.com/Abdulllah321/"
                  target={"_blank"}
                  className="w-6 mx-3 m-6 text-[--light] sm:mx-1 "
                  whileHover={{ y: -5 }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1,
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <AiFillGithub className="text-[1.5rem]" />
                </motion.a>
                <motion.a
                  href="https://twitter.com"
                  target={"_blank"}
                  className="w-6 mx-3 m-6 text-[--light] sm:mx-1 "
                  whileHover={{ y: -5 }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1,
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <BsFacebook className="text-[1.5rem]" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/abdullah-sufyan-2a1665297/"
                  target={"_blank"}
                  className="w-6 mx-3 m-6 text-[--dark] sm:mx-1 "
                  whileHover={{ y: -5 }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1,
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <LinkedInIcon />
                </motion.a>
                <motion.a
                  href="https://twitter.com"
                  target={"_blank"}
                  className="w-6 mx-3 m-6 text-[--dark] sm:mx-1 "
                  whileHover={{ y: -5 }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1,
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <PinterestIcon />
                </motion.a>
                <motion.a
                  href="https://dribbble.com/abdullah987"
                  target={"_blank"}
                  className="w-6 mx-3 m-6 text-[--dark] sm:mx-1 "
                  whileHover={{ y: -5 }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1,
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <DribbbleIcon />
                </motion.a>
              </div>
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="ml-3 flex items-center justify-center rounded-full p-2 theme-switch bg-[--dark] fill-[--dark] text-[--light] right-0 relative lg:hidden sm:flex sm:ml-0 sm:p-1 sm:bg-[--light] sm:fill-[--light] sm:text-[--dark]"
              >
                {theme === "dark" ? (
                  <SunIcon className={`fill-[--dark]`} />
                ) : (
                  <MoonIcon className={`fill-[--dark]`} />
                )}
              </button>
            </nav>
          </motion.div>
        ) : (
          ""
        )}

        <div className="absolute left-[50%]  translate-x-[-50%]">
          <Logos />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
