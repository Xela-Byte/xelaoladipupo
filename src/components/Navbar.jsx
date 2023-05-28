import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { logo, menu } from "../assets";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full text-white px-8 py-4 lg:px-16 sm:py-7 flex items-center fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}>
      <div className="flex space-x-5">
        <img
          src={logo}
          className="w-[25px] h-[25px] sm:w-[40px] sm:h-[40px] rounded-full object-contain"
          alt=""
        />
        <p className="text-xl sm:text-2xl lg:text-3xl font-bold mt-auto">
          Xela
        </p>
      </div>

      <div className="links m-auto hidden lg:flex  space-x-10">
        <div className="link flex items-center flex-col">
          <a
            href="#"
            className="font-semibold text-xl">
            Home
          </a>
          {active === "/" && (
            <div className="w-[15px] h-[2px] bg-white rounded-sm" />
          )}
        </div>
        <div className="link flex items-center flex-col">
          <a
            href="#about"
            className="font-semibold text-xl">
            About Me
          </a>
          {active === "about" && (
            <div className="w-[15px] h-[2px] bg-white rounded-sm" />
          )}
        </div>
        <div className="link flex items-center flex-col">
          <a
            href="#work"
            className="font-semibold text-xl">
            Experience
          </a>
          {active === "work" && (
            <div className="w-[15px] h-[2px] bg-white rounded-sm" />
          )}
        </div>
        <div className="link flex items-center flex-col">
          <a
            href="#project"
            className="font-semibold text-xl">
            My Work
          </a>
          {active === "project" && (
            <div className="w-[15px] h-[2px] bg-white rounded-sm" />
          )}
        </div>
        <div className="link flex items-center flex-col">
          <a
            href="#testimonial"
            className="font-semibold text-xl">
            Feedbacks
          </a>
          {active === "testimonial" && (
            <div className="w-[15px] h-[2px] bg-white rounded-sm" />
          )}
        </div>
      </div>
      <button className="btn-primary hidden lg:block">
        <a href="#contact">Let's talk!</a>
      </button>
      <img
        src={menu}
        alt="menuIcon"
        className="block lg:hidden ml-auto"
        onClick={() => {
          setToggle(!toggle);
        }}
      />
      {toggle && (
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center justify-evenly lg:hidden absolute top-14 right-0 w-2/3 h-[100vh] bg-primary">
          <a
            href="/"
            className="font-semibold text-xl">
            Home
          </a>
          <a
            href="#about"
            className="font-semibold text-xl">
            About Me
          </a>
          <a
            href="#work"
            className="font-semibold text-xl">
            Experience
          </a>
          <a
            href="#project"
            className="font-semibold text-xl">
            My Work
          </a>
          <a
            href="#testimonial"
            className="font-semibold text-xl">
            Feedbacks
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
