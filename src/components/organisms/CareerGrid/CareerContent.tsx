import CareerCard from "@/components/molecules/CareerCard/CareerCard";
import {useEffect, useRef, useState, forwardRef} from "react";

// forwardRef를 사용하여 ref를 전달받을 수 있게 설정
const CareerContent = forwardRef<HTMLDivElement, { offsetTop: number; offsetHeight:number; }>
(({offsetTop, offsetHeight}, ref) => {
    const careerRef = useRef<HTMLDivElement | null>(null);

    const [isTransform, setIsTransForm] = useState(false);
    const [scrollPos, setScrollPos] = useState(0);
    const [windowY, setWindowY] =useState(0);
    const [clientHeight, setClientHeight] = useState(0);


    useEffect(() => {
        if(offsetTop < windowY && offsetHeight+offsetTop-clientHeight > windowY) setIsTransForm(true);
        else setIsTransForm(false);
    }, [offsetTop, offsetHeight, clientHeight, windowY]);


    useEffect(() => {
        setClientHeight(careerRef.current?.offsetHeight || 0);
        const handleScroll = () => {
            setWindowY(window.scrollY);

            // 스크롤 위치를 비율로 계산하여 setScrollPos 업데이트
                if(isTransform){
                    const dy = window.scrollY - offsetTop;
                    const scrollRatio = 4 * dy /(offsetHeight- clientHeight);
                    console.log(dy ,scrollRatio * 100)
                    setScrollPos(scrollRatio * 100); // 스크롤 비율을 100%로 환산
            }
        };

        // 스크롤 이벤트 등록
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [offsetTop, offsetHeight, isTransform]);

    
    const innerScroll = offsetTop < windowY && offsetHeight+offsetTop-clientHeight > windowY;
    const outerScroll = offsetHeight+offsetTop-clientHeight < windowY;

    return (
        <div
            className={`w-screen h-screen flex flex-row justify-start ${innerScroll ? "fixed top-0 left-0" : ""}`}
            ref={careerRef}  // 부모에서 전달받은 ref를 여기서 사용
            style={{

                transform: `translateX(-${scrollPos}%) ${outerScroll ? "translateY("+(offsetHeight-clientHeight)+"px)": ""}`,
                transition: "translateX 0.1s ease-out",

            }}
        >
            <CareerCard text={"1"} />
            <CareerCard text={"2"} />
            <CareerCard text={"3"} />
            <CareerCard text={"4"} />
            <CareerCard text={"5"} />
        </div>
    );
});

export default CareerContent;