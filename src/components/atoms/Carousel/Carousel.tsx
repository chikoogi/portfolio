import { CSSProperties, useState } from "react";
import Image from "next/image";
import IconLeft from "@/assets/icon/ic_chevron_left.svg";
import IconRight from "@/assets/icon/ic_chevron_right.svg";
import { getDotStyle } from "@/tools/common-tools";
import Circle from "@/components/atoms/Circle/Circle";
// Example CSS in JS styles
const carouselContainerStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  paddingLeft: "100px",
  paddingRight: "100px",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const carouselSlideWrapperStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
};

const carouselSlidesStyle: CSSProperties = {
  display: "flex",
  transition: "transform 0.5s ease-in-out",
};

const slideStyle: CSSProperties = {
  minWidth: "100%",
  maxHeight: "700px",
  transition: "transform 0.5s ease",
};

const imageStyle: CSSProperties = {
  width: "100%",
  objectFit: "scale-down",
};

const leftButtonStyle: CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "40px",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  color: "white",
  border: "none",
  padding: "10px",
  cursor: "pointer",
  transform: "translateY(-50%)",
};

const rightButtonStyle: CSSProperties = {
  position: "absolute",
  top: "50%",
  right: "40px",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  color: "white",
  border: "none",
  padding: "10px",
  cursor: "pointer",
  transform: "translateY(-50%)",
};

export default function Carousel({ images }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel-container group/item" style={carouselContainerStyle}>
      <button
        className={"rounded-full invisible group/arrow group-hover/item:visible"}
        onClick={prevSlide}
        style={leftButtonStyle}
      >
        <IconLeft />
      </button>
      <div className="carousel-slide-wrapper" style={carouselSlideWrapperStyle}>
        <div
          className="carousel-slides"
          style={{ ...carouselSlidesStyle, transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image: string, index: number) => (
            <div className="carousel-slide" key={index} style={slideStyle}>
              <Image
                className={"w-full h-full"}
                src={image}
                alt="carousel slide"
                height={1000}
                width={1000}
                style={imageStyle}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={"w-full"}>
        <div className={"flex justify-center items-center gap-1"}>
          {images.map((_: string, i: number) => {
            const dotStyle = getDotStyle({ idx: i, curPage: currentIndex });
            return (
              <div key={i}>
                <Circle
                  className={"icon-circle"}
                  color={i === currentIndex ? "#6D6ADA" : "#42424a"}
                  border={i === currentIndex ? "none" : "1px solid #84838d"}
                  active={i === currentIndex}
                  style={dotStyle}
                />
              </div>
            );
          })}
        </div>
      </div>
      <button
        className={"rounded-full invisible group/arrow group-hover/item:visible"}
        onClick={nextSlide}
        style={rightButtonStyle}
      >
        <IconRight />
      </button>
    </div>
  );
}
