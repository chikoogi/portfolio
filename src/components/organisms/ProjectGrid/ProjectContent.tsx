import ProjectCard from "@/components/molecules/ProjectCard/ProjectCard";
import { PERSONAL_PROJECTS_LIST, PROJECTS_LIST } from "@/variables/common";

export default function ProjectContent() {
  return (
    <div>
      {/*<h1 className={"text-4xl font-bold font-mono"}>Projects</h1>*/}
      <div className={"flex flex-col items-center "}>
        {PERSONAL_PROJECTS_LIST.map((project, idx) => (
          <ProjectCard key={project.name + idx} item={project} />
        ))}
      </div>
    </div>
  );
}
