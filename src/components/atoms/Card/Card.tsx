import {ReactDOM, ReactNode} from "react";

interface CardProps {
    children: ReactNode
}

export default function Card({children}:CardProps) {


    return (
        <div className={"bg-primary-2 text-primary-1 w-2/3 min-h-64 mb-10 shadow-xl"}>
            {children}
        </div>
    )
}