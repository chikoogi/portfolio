import IntroductionTemplate from "@/components/templates/IntroductionTemplate/IntroductionTemplate";
import ProjectTemplate from "@/components/templates/ProjectTemplate/ProjectTemplate";


export default function PortfolioHome() {

    return(
        <div className={"w-full h-full"}>
            <IntroductionTemplate />
            <ProjectTemplate />
        </div>
    )
}