"use client";

import { useEffect, useState } from "react";

export default function PortfolioNavigation() {
  const [scrollTop, setScrollTop] = useState<boolean>(true);

  useEffect(() => {
    const handleShowButton = () => {
      window.scrollY === 0 ? setScrollTop(true) : setScrollTop(false);
    };

    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-10 p-4 font-[Rajdhani] flex justify-center items-center`}
    >
      <ul
        className={`flex justify-center space-x-4 text-primary-3 gap-10 px-5 py-7 rounded-xl ${scrollTop ? "bg-transparent" : "bg-primary-1 opacity-80"}`}
      >
        <li
          className={`border-t-[1px] border-primary-4 pt-4 hover:border-white hover:text-white`}
          style={{
            transition: "border-color 0.4s ease",
          }}
        >
          <a href="#about">About</a>
        </li>
        <li
          className={`border-t-[1px] border-primary-4 pt-4 hover:border-white hover:text-white`}
          style={{
            transition: "border-color 0.4s ease",
          }}
        >
          <a href="#skills">Skill</a>
        </li>
        <li
          className={`border-t-[1px] border-primary-4 pt-4 hover:border-white hover:text-white`}
          style={{
            transition: "border-color 0.4s ease",
          }}
        >
          <a href="#career">Career</a>
        </li>
        <li
          className={`border-t-[1px] border-primary-4 pt-4 hover:border-white hover:text-white`}
          style={{
            transition: "border-color 0.4s ease",
          }}
        >
          <a href="#projects">Projects</a>
        </li>
        <li
          className={`border-t-[1px] border-primary-4 pt-4 hover:border-white hover:text-white`}
          style={{
            transition: "border-color 0.4s ease",
          }}
        >
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

/*<nav
        className={`fixed top-0 left-0 w-full z-10 p-4 font-[Rajdhani] flex justify-center items-center`}
      >
        <ul
          className={`flex justify-center space-x-4 text-primary-3 gap-10 px-5 py-7 rounded-xl ${scrollTop ? "bg-transparent" : "bg-primary-1 opacity-80"}`}
        >
          <li
            className={`border-t-[1px] border-primary-4 pt-4 hover:border-white hover:text-white`}
            style={{
              transition: "border-color 0.4s ease",
            }}
          >
            <button onClick={() => scrollToSection(aboutRef)}>About</button>
          </li>
          <li
            className={`border-t-[1px] border-primary-4 pt-4 hover:border-white hover:text-white`}
            style={{
              transition: "border-color 0.4s ease",
            }}
          >
            <button onClick={() => scrollToSection(skillRef)}>Skill</button>
          </li>
          <li
            className={"border-t-[1px]  border-primary-4 pt-4 hover:border-white hover:text-white"}
            style={{
              transition: "border-color 0.4s ease",
            }}
          >
            <button onClick={() => scrollToSection(careerRef)}>Career</button>
          </li>
          <li
            className={"border-t-[1px]  border-primary-4 pt-4 hover:border-white hover:text-white"}
            style={{
              transition: "border-color 0.4s ease",
            }}
          >
            <button onClick={() => scrollToSection(projectRef)}>Projects</button>
          </li>
          <li
            className={"border-t-[1px]  border-primary-4 pt-4 hover:border-white hover:text-white"}
            style={{
              transition: "border-color 0.4s ease",
            }}
          >
            <button onClick={() => scrollToSection(contactRef)}>Contact</button>
          </li>
        </ul>
      </nav>*/
