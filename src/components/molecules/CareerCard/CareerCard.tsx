
import {ReactNode, useEffect} from "react";


export default function CareerCard({text}: {text: ReactNode}) {

    return (
        <div className={"text-primary-1"}
             style={{minWidth: "100vw", height: "100vh"}}
             >
            <div className={"flex justify-center items-center h-full w-full"}>
                <div className={"h-1/2 w-1/2 bg-black"}>
                    {text}
                </div>
            </div>
        </div>
    )
}