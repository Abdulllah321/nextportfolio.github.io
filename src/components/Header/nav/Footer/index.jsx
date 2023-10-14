import { FaXTwitter } from 'react-icons/fa6';
import styles from './style.module.scss';
import {motion} from "framer-motion"
import { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon } from '@/components/Icons';
import { BsFacebook } from 'react-icons/bs';

export default function Index() {
  return (
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
        <BsFacebook className='text-[1.5rem]'  />
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
  );
}
