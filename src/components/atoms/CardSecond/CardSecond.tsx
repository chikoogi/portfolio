import { ReactDOM, ReactNode } from "react";

interface CardSecondProps {
  children: ReactNode;
}

export default function CardSecond({ children }: CardSecondProps) {
  return (
    <div className={"bg-primary-2 text-primary-1 min-w-60 min-h-64 mb-10 shadow-xl p-5"}>
      {children}
    </div>
  );
}
