import Badge from "@/components/atoms/Badge/Badge";
import Image from "next/image";

export default function AboutContent() {
  return (
    <div className={"w-full"}>
      <div className={"flex flex-col w-full"}>
        <div className={"w-full text-center my-10 text-primary-2 text-2xl"}>ABOUT</div>
        <div className={"w-full grid grid-cols-2"}>
          <div className={"w-full flex justify-center items-center"}>
            <Image
              className={"w-[20rem]"}
              src={"/assets/images/picture.jpg"}
              alt={""}
              width={100}
              height={100}
            />
          </div>
          <div className={"w-full text-primary-2 [&_p]:mb-5"}>
            <p>안녕하세요. 저는 사용자 경험 최적화에 집중하는 프론트엔드 개발자 김지훈입니다.</p>
            <p>
              2018년부터 SI회사에 속해 개발을 본격적으로 시작하였으며 웹 어플리케이션 서비스에 대한
              기본 지식을 키워왔습니다. 2022년부터 React, TypeScript를 중심으로 데이터 시각화,
              대시보드 개발 프로젝트를 다수 수행하며 D3.js, Plotly와 같은 도구를 사용해 고급 시각화
              작업을 해왔습니다.
            </p>
            <p>
              프론트엔드 개발자로서 효율적이고 직관적인 UI를 만드는 데 집중하며, 사용자의 경험을
              최우선으로 생각합니다. 또한, 다양한 프로젝트에서 상태 관리(Mobx, Zustand, Recoil),
              다국어 지원(i18n), 번들링(Webpack, Vite), Atomic Design 등 다양한 최신 기술과 디자인
              패턴을 적용하며 유지보수성과 확장성을 강화해왔습니다.
              <br />
              다양한 협업 프로젝트를 통해 커뮤니케이션 능력을 키우고, 사용자에게 더 나은 가치를
              제공하기 위한 문제 해결 능력을 갖추었습니다. 특히 최근 진행한 Solomon BI Tool
              프로젝트에서는 복잡한 데이터 분석 요구를 시각적으로 표현하는 데 중점을 두며 기업의
              의사결정에 실질적인 도움을 주었습니다.
            </p>
            <p>
              저는 끊임없이 성장하고 학습하는 개발자로서, 더 나은 사용자 경험을 제공하는 제품을
              만드는 데 열정을 가지고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
