'use client';
import Image from "next/image";
import { useState } from "react";
import { CardsChat } from "./ChatBase";

export default function ChatIcon() {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <>
        <div className="sticky bottom-10 flex justify-end flex-col p-4 w-full">
            {
                open &&(
                    <div className="flex justify-end">
                        <CardsChat setOpen={setOpen} /> 
                    </div>
                )
            }
            <div className="cursor-pointer flex justify-end" onClick={handleClick}>
                <Image src="/images/bot-icon.png" alt="Chat Icon" width={80} height={80} />
            </div>
           
        </div>
     </>
    )
} 