import ArrowBottom from "@/components/atoms/ArrowBottom/ArrowBottom";
import { PROJECTS_LIST } from "@/variables/common";
import CardSecond from "@/components/atoms/CardSecond/CardSecond";
import Badge from "@/components/atoms/Badge/Badge";

export default function CareerSliderWrapper({
  item,
  projects,
  minWidth = 100,
}: {
  item?: any;
  projects: any;
  minWidth?: number;
}) {
  const v = PROJECTS_LIST[0];
  return (
    <div
      className={"text-primary-1 first:pl-[30vw]"}
      style={{ minWidth: `${minWidth}vw`, height: "100vh" }}
    >
      <div className={"w-full h-full flex flex-col justify-center"}>
        <div className={"h-1/3 flex items-end gap-10"}>
          <ArrowBottom width={30} height={100} />
          <div>
            <div className={"font-bold"}>{item.company}</div>
            <div>{item.period}</div>
            <div>
              {item.position} / {item.role}
            </div>
            <div className={"text-sm leading-6"}>
              {item.description.map((r: string, idx: number) => (
                <p key={idx}>{r}</p>
              ))}
            </div>
          </div>
        </div>
        <div className={"flex justify-center items-center mt-10 mb-10"}>
          <div className={"h-1 w-full bg-black relative"}></div>
        </div>
        <div className={"h-1/3 flex"}>
          {projects.map((p) => (
            <CardSecond key={p.name}>
              <div>{p.name}</div>
              <div>{p.period}</div>
              <div>
                {p.technologies.map((tech: string) => (
                  <Badge text={tech} key={tech} />
                ))}
              </div>
              <div className={"text-sm leading-6"}>
                {p.responsibilities.map((r: string, idx: number) => (
                  <p key={idx}>{r}</p>
                ))}
              </div>
            </CardSecond>
          ))}
        </div>
      </div>
    </div>
  );
}
