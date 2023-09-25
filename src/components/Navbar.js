import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Logos from "./Logo";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";
import {FaXTwitter} from "react-icons/fa6"

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block w-full bg-dark absolute left-0 -bottom-0.5 scale-x-0
      group-hover:scale-x-100 transition-[transform] ease duration-300 origin-center
      ${router.asPath === href ? "scale-x-100" : "scale-x-0"}
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <div>
      <header className="w-full px-32 py-8 font-medium flex items-center justify-between z-20">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4 z-20" />
          <CustomLink href="/about" title="About" className="mx-4 z-20" />
          <CustomLink href="/project" title="Project" className="mx-4 z-20" />
          <CustomLink href="/contact" title="Contact" className="ml-4 z-20" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap gap-1">
          <motion.a
            href="https://twitter.com"
            target={"_blank"}
            className="w-6 mr-3 m-6 "
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
            href="https://twitter.com"
            target={"_blank"}
            className="w-6 mx-3 m-6 "
            whileHover={{ y: -5 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 15,
              mass: 0.1,
            }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target={"_blank"}
            className="w-6 mx-3 m-6 "
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
            className="w-6 mx-3 m-6 "
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
            href="https://twitter.com"
            target={"_blank"}
            className="w-6 mx-3 m-6 "
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
        </nav>

        <div className="absolute left-[50%]  translate-x-[-50%]">
          <Logos />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
