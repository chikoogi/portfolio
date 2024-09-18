import Badge from "@/components/atoms/Badge/Badge";
import Image from "next/image";

export default function SkillContent() {
  return (
    <div className={"w-full"}>
      <div className={"flex flex-col w-full"}>
        <div className={"w-full text-center my-10 text-primary-2 text-2xl"}>SKILL</div>
        <div className={"grid grid-cols-3 grid-rows-2 gap-2"}>
          <div
            className={
              "border-2 flex justify-center border-primary-2 rounded-2xl flex-col items-center p-10 row-start-1 row-end-3"
            }
          >
            <div className={"text-3xl mb-5"}>FE</div>
            <div className={"flex flex-col gap-1"}>
              <Badge text={"React"} />
              <Badge text={"Next.js"} />
              <Badge text={"Typescript"} />
              <Badge text={"MobX"} />
              <Badge text={"Recoil"} />
              <Badge text={"Zustand"} />
              <Badge text={"JQuery"} />
              <Badge text={"Tanstack-Query"} />
              <Badge text={"Emotion"} />
              <Badge text={"Tailwind CSS"} />
              <Badge text={"D3"} />
              <Badge text={"Plotly"} />
              <Badge text={"ApexCharts"} />
            </div>
          </div>
          <div
            className={
              "border-2 flex justify-center border-primary-2 rounded-2xl flex-col items-center p-10 row-start-1 row-end-2"
            }
          >
            <div className={"text-3xl mb-5"}>BE & DB</div>
            <div className={"flex flex-col"}>
              <Badge text={"Spring"} />
              <Badge text={"Java"} />
              <Badge text={"MySQL"} />
              <Badge text={"MariaDB"} />
              <Badge text={"Vertica"} />
            </div>
          </div>
          <div
            className={
              "border-2 flex justify-center border-primary-2 rounded-2xl flex-col items-center p-10 row-start-2 row-end-3"
            }
          >
            <div className={"text-3xl mb-5"}>DEV TOOLS</div>
            <div className={"flex flex-col"}>
              <Badge text={"Webpack"} />
              <Badge text={"Vite"} />
              <Badge text={"Docker"} />
              <Badge text={"AWS Amplify"} />
            </div>
          </div>
          <div
            className={
              "border-2 flex justify-center border-primary-2 rounded-2xl flex-col items-center p-10 row-start-1 row-end-3"
            }
          >
            <div className={"text-3xl mb-5"}>COLLABORATION</div>
            <div className={"flex flex-col"}>
              <Badge text={"GitHub"} />
              <Badge text={"GitLab"} />
              <Badge text={"SVN"} />
              <Badge text={"Figma"} />
              <Badge text={"Slack"} />
              <Badge text={"Jira"} />
              <Badge text={"WebStorm"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
