import Link from "next/link";
import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";
import { useThemeSwitch } from "./Hooks/useThemeSwitch";

const CustomLink = ({ href, title, className = "", target }) => {
  const router = useRouter();

  if (href.startsWith('http')) {
    return (
      <a
        href={href}
        target={target || "_self"}
        rel="noopener noreferrer"
        className={`${className} rounded relative group inline-block whitespace-nowrap`}
      >
        {title}
        <span
          className={`
                inline-block h-[1px] bg-dark absolute left-0 -bottom-0.5 
                group-hover:w-full transition-[width] ease duration-300 dark:bg-light
                w-0 lg:bg-light lg:dark:bg-dark
                `}
        >
          &nbsp;
        </span>
      </a>
    );
  }

  return (
    <Link href={href} className={`${className} rounded relative group inline-block`}>
      {title}
      <span
        className={`
              inline-block h-[1px] bg-dark absolute left-0 -bottom-0.5 
              group-hover:w-full transition-[width] ease duration-300 dark:bg-light
              ${router.asPath === href ? "w-full" : " w-0"} lg:bg-light lg:dark:bg-dark
              `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle, target }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    if (href.startsWith('http')) {
      if (target === '_blank') {
        window.open(href, '_blank');
      } else {
        window.location.href = href;
      }
    } else {
      router.push(href);
    }
  };

  return (
    <button className={`${className} rounded relative group lg:text-light lg:dark:text-dark`} onClick={handleClick}>
      {title}
      <span
        className={`
              inline-block h-[1px] bg-dark absolute left-0 -bottom-0.5 
              group-hover:w-full transition-[width] ease duration-300 dark:bg-light
              ${router.asPath === href ? "w-full" : " w-0"} lg:bg-light lg:dark:bg-dark
              `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitch();
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  
  // 1. Initialize the router here
  const router = useRouter();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsProjectsOpen(false);
  }, [router.asPath]);


  return (
    <header className="w-full flex items-center justify-between px-12 py-8 font-medium z-10 dark:text-light
    lg:px-16 relative md:px-8 sm:px-4 sm:py-6
    ">

      
      {/* <button
        type="button"
        className=" flex-col items-center justify-center hidden lg:flex"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        onClick={handleClick}
      >
        <span className="sr-only">Open main menu</span>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? 'opacity-0' : 'opacity-100'} my-0.5`}></span>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button> */}

      <div className="w-full flex items-center">
        {/* Left: Navigation Links - flex-1 keeps this lane confined to the left half */}
        <nav className="flex items-center justify-start gap-x-6 md:gap-x-4 sm:gap-x-2.5 flex-1 text-base sm:text-xs md:text-sm">
          <CustomLink href="/" title="Home" />
          <CustomLink href="/about" title="Profession" />
          
          <div 
            className="group relative flex items-center cursor-pointer select-none"
            onClick={() => setIsProjectsOpen(prev => !prev)}
            onMouseEnter={() => setIsProjectsOpen(true)}
            onMouseLeave={() => setIsProjectsOpen(false)}
          >
            <span className="dark:text-light relative flex items-center gap-1">
              Projects
              <svg className={`w-3 h-3 transition-transform duration-200 ${isProjectsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
              <span className="inline-block h-[1px] bg-dark absolute left-0 -bottom-0.5 w-0 group-hover:w-full transition-[width] ease duration-300 dark:bg-light">
                &nbsp;
              </span>
            </span>
            <div className={`absolute top-full left-0 sm:left-auto sm:-right-6 md:left-0 pt-3 z-50 min-w-[190px] sm:min-w-[170px] max-w-[calc(100vw-24px)] ${isProjectsOpen ? 'block' : 'hidden group-hover:block'}`}>
              <div className="bg-light/95 dark:bg-dark/95 border border-dark/10 dark:border-light/10 shadow-2xl rounded-xl p-3 sm:p-2.5 flex flex-col gap-1.5 backdrop-blur-md">
                <CustomLink href="https://retirementjourney.vercel.app" title="Retirement Simulator" className="text-sm sm:text-xs font-semibold whitespace-nowrap" />
              </div>
            </div>
          </div>
        </nav>

        {/* Center: Logo - flex-none ensures it doesn't shrink, px-4 provides a safety buffer */}
        <div className="flex-none px-4 sm:px-2">
          <Logo />
        </div>

        {/* Right: Socials & Toggle - flex-1 matches the left side for perfect symmetry */}
        <nav className="flex items-center justify-end gap-x-4 sm:gap-x-2 flex-1">
          <motion.a
            target={"_blank"}
            className="w-6 sm:w-5"
            href="https://www.linkedin.com/in/aaronserrano/"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Checkout my linkedin profile"
          >
            <LinkedInIcon />
          </motion.a>
          
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`w-6 h-6 sm:w-5 sm:h-5 ease flex items-center justify-center rounded-full p-1  
              ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
              `}
            aria-label="theme-switcher"
          >
            {mode === "light" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>
    {
      isOpen ? 

      <motion.div className="min-w-[70vw] sm:min-w-[90vw] flex justify-between items-center flex-col fixed top-1/2 left-1/2 -translate-x-1/2
      -translate-y-1/2
      py-32 bg-dark/90 dark:bg-light/75 rounded-lg z-50 backdrop-blur-md
      "
      initial={{scale:0,x:"-50%",y:"-50%", opacity:0}}
      animate={{scale:1,opacity:1}}
      >
      <nav className="flex items-center justify-center flex-col">
        <CustomMobileLink toggle={handleClick} className="lg:m-0 lg:my-2" href="/" title="Home" />
        <CustomMobileLink toggle={handleClick} className="lg:m-0 lg:my-2" href="/about" title="About" />
        <div className="flex flex-col items-center lg:my-2">
          <span className="text-dark/50 dark:text-light/50 text-sm uppercase tracking-widest mb-1">Projects</span>
          <CustomMobileLink toggle={handleClick} className="lg:m-0 lg:my-1" href="https://retirementjourney.vercel.app" title="Retirement Simulator" />
        </div>
      </nav>
      <nav
        className="flex items-center justify-center  mt-2
      "
      >
        <motion.a
          target={"_blank"}
          className="w-6 m-1 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1"
          href="https://github.com/ey-ron"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Checkout my github profile"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          target={"_blank"}
          className="w-6 m-1 mx-3 sm:mx-1"
          href="https://www.linkedin.com/in/aaronserrano/"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Checkout my linkedin profile"
        >
          <LinkedInIcon />
        </motion.a>
        
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`w-6 h-6 ease m-1 ml-3 sm:mx-1 flex items-center justify-center rounded-full p-1  
            ${mode === "light" ? "bg-dark  text-light" : "bg-light  text-dark"}
            `}
          aria-label="theme-switcher"
        >
          {mode === "light" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
      </motion.div>

      : null
    }
    </header>
  );
};

export default Navbar;