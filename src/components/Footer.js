import Link from "next/link";
import React, { useEffect } from "react";
import Button from "@/components/Button";
import MagneticButton from "./MagneticButton";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  useEffect(() => {
    gsap.set(".footer-container", {
      yPercent: -50,
      opacity: 0,
    });

    const uncover = gsap.timeline({ paused: true });

    uncover.to(".footer-container", {
      yPercent: 0,
      ease: "none",
      opacity: 1,
    });

    ScrollTrigger.create({
      trigger: ".slidersOfImages",
      start: "bottom bottom",
      end: "+=100%",
      animation: uncover,
      scrub: true,
      // markers: true,
    });
  });
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="top">
          <h1>
            LET'S CREATE AN EXPERIENCE AS
            <br />
            REMARKABLE AS YOUR BUSINESS
          </h1>
          <Link href="/contact" className="footerButton">
            <Button>Get in touch</Button>
          </Link>
        </div>
        <div className="bottom">
          <div className="left">
            <div className="top1">
              Don't miss out. Stay in the loop.
              <div className="input">
                <input placeholder="Your email" />
                <MagneticButton>
                  <button>Subscribe</button>
                </MagneticButton>
              </div>
            </div>
          </div>
          <div className="right">
            <h1>hello@abdullahsufyan.co</h1>
            <div className="center">
              <div className="left1">
                <ul>
                  <li>
                    <h2>Main Tabs</h2>
                  </li>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/project">Project</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="right1">
                <ul>
                  <li>
                    <h2>Social</h2>
                  </li>
                  <li>
                    <Link href="#">Twitter</Link>
                  </li>
                  <li>
                    <Link href="#">Linkedin</Link>
                  </li>
                  <li>
                    <Link href="#">Dribble</Link>
                  </li>
                  <li>
                    <Link href="#">Github</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom1">
          &copy; {year} Abdullah Sufyan |<Link href="#">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
