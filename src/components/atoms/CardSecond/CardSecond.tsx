import { ReactDOM, ReactNode } from "react";

interface CardSecondProps {
  children: ReactNode;
}

export default function CardSecond({ children }: CardSecondProps) {
  return (
    <div className={"bg-white text-primary-1 min-w-60 min-h-64 shadow-xl p-5"}>{children}</div>
  );
}
