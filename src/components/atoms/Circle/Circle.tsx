import { CSSProperties, HTMLAttributes, MouseEvent } from "react";

interface HWCircleProps extends HTMLAttributes<HTMLDivElement> {
  width?: number;
  height?: number;
  border?: string;
  color?: string;
  active?: boolean;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

export default function Circle({
  className,
  width = 5,
  height = 5,
  color = "#ffffff",
  border = "none",
  onClick,
  active,
  ...props
}: HWCircleProps) {
  const defaultStyle: CSSProperties = {
    display: "inline-block",
    borderRadius: "50%",
    boxSizing: "border-box",
    transition: "background-color 0.3s ease",
    backgroundColor: `${color}`,
    width: `${width}`,
    height: `${height}`,
    border: `${border}`,
  };

  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        ...defaultStyle,
        ...props.style,
      }}
    />
  );
}
