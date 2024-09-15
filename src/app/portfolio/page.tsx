"use client";

import IntroductionTemplate from "@/components/templates/IntroductionTemplate/IntroductionTemplate";
import ProjectTemplate from "@/components/templates/ProjectTemplate/ProjectTemplate";
import CareerTemplate from "@/components/templates/CareerTemplate/CareerTemplate";
import { useEffect, useRef, useState } from "react";
import ContactTemplate from "@/components/templates/ContactTemplate/ContactTemplate";
import SkillTemplate from "@/components/templates/SkillTemplate/SkillTemplate";
import AboutTemplate from "@/components/templates/AboutTemplate/AboutTemplate";

export default function PortfolioHome() {
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const careerRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
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
      </nav>

      {/* Sections with ref */}
      <IntroductionTemplate />

      <section ref={aboutRef}>
        <AboutTemplate />
      </section>

      <section ref={skillRef}>
        <SkillTemplate />
      </section>

      <section ref={careerRef}>
        <CareerTemplate />
      </section>

      <section ref={projectRef}>
        <ProjectTemplate />
      </section>
      <section ref={contactRef}>
        <ContactTemplate />
      </section>
    </div>
  );
}
