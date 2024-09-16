import Card from "@/components/atoms/Card/Card";
import Divider from "@/components/atoms/Divider/Divider";
import { useState } from "react";
import Modal from "@/components/atoms/Modal/Modal";
import Carousel from "@/components/atoms/Carousel/Carousel";
import Badge from "@/components/atoms/Badge/Badge";

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
              className={"bg-primary-6 text-white px-3 py-2 font-[Oswald] hover:opacity-70"}
              type={"button"}
              onClick={() => {
                setIsModal(true);
              }}
            >
              + MORE
            </button>
          </div>
          <p className={"font-[GeistMono] text-sm"}>{item.period}</p>
        </div>
      </Card>
      <Modal isOpen={isModal} onClose={() => setIsModal(false)}>
        <div className={"w-[80vw] h-[800px] font-sans"}>
          <div className={"w-full h-full grid grid-cols-[60%_40%]"}>
            <Carousel images={item.images} />
            <div className={"flex flex-col justify-center gap-4"}>
              <div className={"text-2xl font-bold"}>
                {item.name} <span className={"text-primary-7"}>( {item.period} )</span>
              </div>

              <div className={"flex text-lg"}>
                <span>인원: {item.teamCount}명</span>(
                {item.team.map((v: any) => (
                  <div key={v.role} className={""}>
                    {v.role}:{v.people}
                  </div>
                ))}
                )
              </div>
              <div className={"flex flex-col gap-2 text-sm"}>
                {item.description_detail.map((v: string) => (
                  <p key={v}>{v}</p>
                ))}
              </div>

              <div>
                <b>주요 업무</b>
                <div>
                  {item.tasks.map((v: string) => (
                    <p key={v}>{v}</p>
                  ))}
                </div>
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
