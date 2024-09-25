"use client";

import Card from "@/components/atoms/Card/Card";
import Divider from "@/components/atoms/Divider/Divider";
import { useState } from "react";
import Modal from "@/components/atoms/Modal/Modal";
import Carousel from "@/components/atoms/Carousel/Carousel";
import Badge from "@/components/atoms/Badge/Badge";
import "./index.css";

export default function ProjectCard({ item }: { item: any }) {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      <Card>
        <div className={"mb-20"}>
          <div className={"text-2xl font-bold"}>{item.name}</div>
          <Divider className={"my-4"} length={"100%"} />
          <div className={"text-xs leading-5 mb-5"}>{item.description}</div>
        </div>
        <div className={""}>
          <div className={"w-full text-right my-10"}>
            <button
              className={"moreBtn px-3 py-2 font-[Oswald]"}
              type={"button"}
              onClick={() => {
                setIsModal(true);
              }}
              style={{}}
            >
              + MORE
            </button>
          </div>
          <p className={"font-[GeistMono] text-sm"}>{item.period}</p>
        </div>
      </Card>
      <Modal isOpen={isModal} onClose={() => setIsModal(false)}>
        <div className={"w-[80vw] h-[700px]"}>
          <div className={"w-full h-full grid grid-cols-[60%_40%]"}>
            <Carousel images={item.images} />
            <div className={"flex flex-col justify-center"}>
              <div className={"mb-2"}>
                <span className={"font-bold text-2xl"}>{item.name}</span>
                <span className={"ml-2 text-primary-7"}>({item.period})</span>
              </div>
              <div className={"flex text-sm mb-2 font-sans"}>
                <span>인원: {item.teamCount}명 - </span>
                <span className={""}>
                  {item.team.map((v: { role: string; people: number }) => (
                    <span className={"ml-2"} key={v.role}>
                      {v.role}({v.people})
                    </span>
                  ))}
                </span>
              </div>
              <div className={"flex flex-col gap-2 text-sm mb-4"}>
                {item.description_detail.map((v: string) => (
                  <p key={v}>{v}</p>
                ))}
              </div>

              <div>
                <div className={"font-semibold"}>주요 업무</div>
                <ul className={"text-sm leading-6 list-disc pl-5 mb-5"}>
                  {item.tasks.map((task: string, idx: number) => {
                    const t = task.split(":");
                    return (
                      <li key={idx}>
                        <b>{t[0]}</b> :<span>{t[1]}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                {item.skills.map((v: string) => (
                  <Badge key={v} text={v} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
