import CareerContent from "@/components/organisms/CareerGrid/CareerContent";
import { useEffect, useRef, useState } from "react";

const HEIGHT = 5000;
export default function CareerTemplate() {
  const careerRef = useRef<HTMLDivElement | null>(null);
  const [offsetTop, setOffsetTop] = useState(0);

  useEffect(() => {
    setOffsetTop(careerRef.current?.offsetTop || 0);

    const handleResize = () => {
      setOffsetTop(careerRef.current?.offsetTop || 0);
    };

    // 창 크기 변경 감지
    window.addEventListener("resize", handleResize);

    // cleanup 함수에서 이벤트 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={"relative w-screen h-screen bg-primary-3"}
      style={{ height: `${HEIGHT}px` }}
      ref={careerRef}
    >
      <CareerContent offsetTop={offsetTop} offsetHeight={HEIGHT} />
    </div>
  );
}
