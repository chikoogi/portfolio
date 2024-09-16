import { ReactDOM, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div
      className={
        "text-primary-1 w-full h-full min-h-64 shadow-xl relative px-14 py-14 bg-primary-3 flex flex-col justify-between hover:bg-white hover:drop-shadow-2xl" +
        " before:absolute before:content-[''] before:w-[calc(50%)] before:top-0 before:left-1/2 before:h-1 before:transform before:-translate-x-1/2 before:transparent hover:before:bg-amber-400 "
      }
    >
      {children}
    </div>
  );
}
