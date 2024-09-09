import ProjectCard from "@/components/molecules/ProjectCard/ProjectCard";
import {PROJECTS_LIST} from "@/variables/common";


export default function ProjectContent() {

    return(
        <div>
            <h1 className={"text-4xl font-bold font-mono"}>Projects</h1>
            <div className={"flex flex-col items-center border-l-2 "}>
                {
                    PROJECTS_LIST.map(project => (<ProjectCard item={project}/>))
                }
            </div>
        </div>
    )
}