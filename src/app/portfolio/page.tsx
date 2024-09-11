"use client";

import IntroductionTemplate from "@/components/templates/IntroductionTemplate/IntroductionTemplate";
import ProjectTemplate from "@/components/templates/ProjectTemplate/ProjectTemplate";
import CareerTemplate from "@/components/templates/CareerTemplate/CareerTemplate";
import { useEffect, useRef, useState } from "react";

export default function PortfolioHome() {
  const introRef = useRef(null);
  const careerRef = useRef(null);
  const projectRef = useRef(null);
  const [scrollTop, setScrollTop] = useState<boolean>(true);

  const scrollToSection = (ref: any) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
    <div className={"w-full h-auto overflow-hidden"}>
      <nav
        className={`fixed top-0 left-0 w-full z-10 p-4 font-[Rajdhani] flex justify-center items-center`}
      >
        <ul
          className={`flex justify-center space-x-4 text-primary-3 gap-10 p-5 rounded-xl ${scrollTop ? "bg-transparent" : "bg-primary-1"}`}
        >
          <li
            className={`border-t-[1px] border-primary-4 pt-4 hover:border-white hover:text-white`}
            style={{
              transition: "border-color 0.4s ease",
            }}
          >
            <button onClick={() => scrollToSection(introRef)}>About</button>
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
            <button onClick={() => scrollToSection(projectRef)}>Archiving</button>
          </li>
        </ul>
      </nav>

      {/* Sections with ref */}
      <section ref={introRef}>
        <IntroductionTemplate />
      </section>

      <section ref={careerRef}>
        <CareerTemplate />
      </section>

      <section ref={projectRef}>
        <ProjectTemplate />
      </section>
    </div>
  );
}
