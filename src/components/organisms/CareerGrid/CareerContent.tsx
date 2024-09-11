import CareerSliderWrapper from "@/components/molecules/CareerSliderWrapper/CareerSliderWrapper";
import { useEffect, useRef, useState, forwardRef } from "react";
import { CAREER_LIST, PROJECTS_LIST } from "@/variables/common";

const CAREER_WRAPPER_LENGTH = 3;
// forwardRef를 사용하여 ref를 전달받을 수 있게 설정
const CareerContent = forwardRef<HTMLDivElement, { offsetTop: number; offsetHeight: number }>(
  ({ offsetTop, offsetHeight }, ref) => {
    const careerRef = useRef<HTMLDivElement | null>(null);

    const [isTransform, setIsTransForm] = useState(false);
    const [scrollPos, setScrollPos] = useState(0);
    const [windowY, setWindowY] = useState(0);
    const [clientHeight, setClientHeight] = useState(0);

    useEffect(() => {
      if (offsetTop < windowY && offsetHeight + offsetTop - clientHeight > windowY)
        setIsTransForm(true);
      else setIsTransForm(false);
    }, [offsetTop, offsetHeight, clientHeight, windowY]);

    useEffect(() => {
      setClientHeight(careerRef.current?.offsetHeight || 0);
      const handleScroll = () => {
        setWindowY(window.scrollY);

        // 스크롤 위치를 비율로 계산하여 setScrollPos 업데이트
        if (isTransform) {
          const dy = window.scrollY - offsetTop;
          let scrollRatio = ((CAREER_WRAPPER_LENGTH - 1) * dy) / (offsetHeight - clientHeight);
          if (scrollRatio > CAREER_WRAPPER_LENGTH - 1) scrollRatio = CAREER_WRAPPER_LENGTH - 1;

          setScrollPos(scrollRatio * 100); // 스크롤 비율을 100%로 환산
        }
      };

      // 스크롤 이벤트 등록
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [offsetTop, offsetHeight, isTransform]);

    const innerScroll = offsetTop < windowY && offsetHeight + offsetTop - clientHeight > windowY;
    const outerScroll = offsetHeight + offsetTop - clientHeight < windowY;

    return (
      <div
        className={`w-screen h-screen flex flex-row justify-start ${innerScroll ? "fixed top-0 left-0" : ""}`}
        ref={careerRef} // 부모에서 전달받은 ref를 여기서 사용
        style={{
          transform: `translate3d(-${scrollPos}%, ${outerScroll ? offsetHeight - clientHeight + "px" : "0"},0)`,
          transition: "translateX 0.1s ease-out",
        }}
      >
        <CareerSliderWrapper item={CAREER_LIST[0]} projects={PROJECTS_LIST.slice(0, 1)} />
        <CareerSliderWrapper
          item={CAREER_LIST[1]}
          projects={PROJECTS_LIST.slice(1, 2)}
          minWidth={50}
        />
        <CareerSliderWrapper
          item={CAREER_LIST[2]}
          projects={PROJECTS_LIST.slice(2)}
          minWidth={150}
        />
      </div>
    );
  }
);

export default CareerContent;
