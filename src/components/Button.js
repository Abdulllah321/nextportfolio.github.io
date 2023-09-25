import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import MagneticButton from "../components/MagneticButton";

export default function index({
  children,
  backgroundColor = "#455CE9",
  ...attributes
}) {
  const circle = useRef(null);
  const circle1 = useRef(null);
  const xTo = useRef(null);
  const yTo = useRef(null);
  let timeline1 = useRef(null);
  let timeline2 = useRef(null);
  let timeoutId = null;

  useEffect(() => {
    timeline1.current = gsap.timeline({ paused: true });

    timeline1.current
      .from(
        circle.current,
        { scaleY: 0, width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { scaleY: 1, width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { scaleY: 1, top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);

  useEffect(() => {
    timeline2.current = gsap.timeline({ paused: true });

    timeline2.current
      .from(
        circle1.current,
        { scaleY: 0, width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle1.current,
        { scaleY: 1, width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle1.current,
        { scaleY: 1, bottom: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);

  const magnetic = useRef(null);

  useEffect(() => {
    if (magnetic.current) {
      xTo.current = gsap.quickTo(magnetic.current, "x", {
        duration: 1,
        ease: "elastic",
      });
      yTo.current = gsap.quickTo(magnetic.current, "y", {
        duration: 1,
        ease: "elastic",
      });
    }
  }, []);

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } =
      magnetic.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    xTo.current(x * .5);
    yTo.current(y * .5);
  };

  const manageMouseLeaves = () => {
    xTo.current(0);
    yTo.current(0);
  };

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline1.current.tweenFromTo("enter", "exit");
    timeline2.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline1.current.play();
      timeline2.current.play();
    }, 300);
    manageMouseLeaves();
  };

  return (
    <MagneticButton>
      <div
        className="roundedButton"
        style={{ overflow: "hidden" }}
        onMouseEnter={manageMouseEnter}
        onMouseLeave={manageMouseLeave}
        onMouseMove={manageMouseMove}
        {...attributes}
      >
        <span ref={magnetic}>{children}</span>
        <div ref={circle} className="circle bg-[--primary]"></div>
        <div ref={circle1} className="circle bg-[--primary]"></div>
      </div>
    </MagneticButton>
  );
}
