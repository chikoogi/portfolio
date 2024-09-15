import { CSSProperties } from "react";

interface BadgeProps {
  className?: string;
  text: string;
  color?: string;
  textColor?: string;
  style?: CSSProperties;
}
export default function Badge({
  text,
  color = "#262526",
  textColor = "#F2F2F0",
  style,
  className,
}: BadgeProps) {
  return (
    <>
      <span
        className={`inline-flex items-center rounded-md px-3 py-1 text-xs justify-center
        font-medium text-primary-2 ring-1 ring-inset ring-gray-500/10 mr-1 mb-2 mt-2 font-[Helvetica] ${className ? className : ""}`}
        style={{ backgroundColor: `${color}`, color: `${textColor}`, ...style }}
      >
        {text}
      </span>
    </>
  );
}
