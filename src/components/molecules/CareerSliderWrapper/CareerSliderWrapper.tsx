import ArrowBottom from "@/components/atoms/ArrowBottom/ArrowBottom";
import { PROJECTS_LIST } from "@/variables/common";
import CardSecond from "@/components/atoms/CardSecond/CardSecond";
import Badge from "@/components/atoms/Badge/Badge";
import QuoteBox from "@/components/atoms/QuoteBox/QuoteBox";
import Image from "next/image";

export default function CareerSliderWrapper({
  item,
  projects,
  minWidth = 100,
}: {
  item?: any;
  projects: any[];
  minWidth?: number;
}) {
  return (
    <div className={"text-primary-1"} style={{ minWidth: `${minWidth}vw`, height: "100vh" }}>
      <div className={"w-full h-full flex flex-col justify-start"}>
        <div className={"h-1/4 mx-20"}>
          {item && (
            <div className={"h-full flex items-end gap-10"}>
              {/*<ArrowBottom width={30} height={100} />*/}
              <div className={"pl-20"}>
                <QuoteBox />
                <div className={"mb-1"}>
                  <span className={"font-bold text-xl"}>{item.company}</span>
                  <span className={"ml-2"}>({item.period})</span>
                </div>
                <div className={"mb-1"}>
                  {item.position} / {item.role}
                </div>
                <ul className={"text-sm leading-6 list-disc pl-5"}>
                  {item.description.map((des: string, idx: number) => (
                    <li key={idx}>{des}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className={"flex justify-center items-center mt-10 mb-10"}>
          <div className={"h-1 w-full bg-black relative"}></div>
        </div>
        <div className={"mx-20 min-h-1/3 flex gap-10"}>
          {projects.map((p: any) => (
            <CardSecond key={p.name}>
              <div className={"mb-4"}>
                <span className={"font-bold text-xl"}>{p.name}</span>
                <span className={"ml-2"}>({p.period})</span>
              </div>
              {p.images.length !== 0 && (
                <Image
                  className={"mb-4"}
                  src={p.images[0]}
                  alt={""}
                  height={1000}
                  width={1000}
                  style={{
                    height: "200px",
                    objectFit: "scale-down",
                  }}
                />
              )}
              <div className={"font-semibold"}>주요 업무</div>
              <ul className={"text-sm leading-6 list-disc pl-5 mb-5"}>
                {p.tasks.map((task: string, idx: number) => {
                  const t = task.split(":");
                  return (
                    <li key={idx}>
                      <b>{t[0]}</b> :<span>{t[1]}</span>
                    </li>
                  );
                })}
              </ul>
              <div>
                {p.skills.map((tech: string) => (
                  <Badge className={"mb-1 mt-0 "} text={tech} key={tech} />
                ))}
              </div>
            </CardSecond>
          ))}
        </div>
      </div>
    </div>
  );
}
