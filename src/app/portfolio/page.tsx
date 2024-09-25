import IntroductionTemplate from "@/components/templates/IntroductionTemplate/IntroductionTemplate";
import ProjectTemplate from "@/components/templates/ProjectTemplate/ProjectTemplate";
import ContactTemplate from "@/components/templates/ContactTemplate/ContactTemplate";
import SkillTemplate from "@/components/templates/SkillTemplate/SkillTemplate";
import AboutTemplate from "@/components/templates/AboutTemplate/AboutTemplate";
import dynamic from "next/dynamic";

const PortfolioNavigation = dynamic(
  () => import("@/components/molecules/PortfolioNavigation/PortfolioNavigation"),
  { ssr: false }
);
const CareerTemplate = dynamic(
  () => import("@/components/templates/CareerTemplate/CareerTemplate"),
  { ssr: false }
);

export default function PortfolioHome() {
  return (
    <div className={"w-full h-auto overflow-hidden min-w-[1600px]"}>
      <PortfolioNavigation />

      <IntroductionTemplate />
      <section id="about">
        <AboutTemplate />
      </section>
      <section id="skills">
        <SkillTemplate />
      </section>
      <section id="career">
        <CareerTemplate />
      </section>
      <section id="projects">
        <ProjectTemplate />
      </section>
      <section id="contact">
        <ContactTemplate />
      </section>
    </div>
  );
}
