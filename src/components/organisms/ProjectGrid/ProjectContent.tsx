import ProjectCard from "@/components/molecules/ProjectCard/ProjectCard";
import { PERSONAL_PROJECTS_LIST, PROJECTS_LIST } from "@/variables/common";

export default function ProjectContent() {
  return (
    <div className={"grid grid-cols-3 bg-primary-7 gap-[1px] p-[1px] w-full h-full"}>
      {PERSONAL_PROJECTS_LIST.map((project, idx) => (
        <ProjectCard key={project.name + idx} item={project} />
      ))}
    </div>
  );
}
