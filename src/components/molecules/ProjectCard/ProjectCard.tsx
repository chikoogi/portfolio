import Badge from "@/components/atoms/Badge/Badge";
import Card from "@/components/atoms/Card/Card";
import Divider from "@/components/atoms/Divider/Divider";


export default function ProjectCard({item}:{item: any}) {


    return(
        <Card>
            <div className={"absolute left-20 rounded-full p-2 text-primary-2"}>
                {item.period}
            </div>
            <div className={"text-2xl font-bold"}>
                {item.name}
            </div>
            <Divider className={"mb-2 mt-2 pl-5 pr-5"} length={"100%"}/>
            <div>
                {
                    item.technologies.map((tech: string) => (
                        <Badge text={tech} key={tech}/>

                    ))
                }
            </div>
            <div className={"text-sm leading-6"}>
                {
                    item.responsibilities.map((r: string, idx: number) => (
                        <p key={idx}>
                            {r}
                        </p>
                    ))
                }
            </div>
        </Card>
    )
}