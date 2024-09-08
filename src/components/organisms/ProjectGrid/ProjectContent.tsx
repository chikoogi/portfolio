import ProjectCard from "@/components/molecules/ProjectCard/ProjectCard";


export default function ProjectContent() {


    return(
        <div>
            <h1>Projects</h1>
            <div className={"columns-3"}>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    )
}