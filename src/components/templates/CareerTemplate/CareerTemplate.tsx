import CareerContent from "@/components/organisms/CareerGrid/CareerContent";
import { useEffect, useRef, useState } from "react";

export default function CareerTemplate() {
  const careerRef = useRef<HTMLDivElement | null>(null);
  const [offsetTop, setOffsetTop] = useState(0);
  const [offsetHeight, setOffsetHeight] = useState(5000);

  useEffect(() => {
    setOffsetTop(careerRef.current?.offsetTop || 0);
  }, []);

  return (
    <div
      className={"relative w-screen h-screen"}
      style={{ height: `${offsetHeight}px` }}
      ref={careerRef}
    >
      <CareerContent offsetTop={offsetTop} offsetHeight={offsetHeight} />
    </div>
  );
}
