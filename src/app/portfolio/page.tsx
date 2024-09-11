"use client";

import IntroductionTemplate from "@/components/templates/IntroductionTemplate/IntroductionTemplate";
import ProjectTemplate from "@/components/templates/ProjectTemplate/ProjectTemplate";
import CareerTemplate from "@/components/templates/CareerTemplate/CareerTemplate";

export default function PortfolioHome() {
  return (
    <div className={"w-full h-auto overflow-hidden"}>
      <IntroductionTemplate />
      <CareerTemplate />
      <ProjectTemplate />
    </div>
  );
}
