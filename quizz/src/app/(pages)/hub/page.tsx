"use client"

import { useEffect, useState } from "react"

export default function Hub(){
    const [name, getName] = useState("");

    useEffect(() =>{
        getName(localStorage.getItem("name") + "");
        console.log(name);
    }) 

    return (
        <main className="flex flex-col items-center justify-between">
            <h1 className="text-2xl text-center text-white rounded-lg p-5 transition 1s bg-black dark:bg-blacklight mb-20">Hello, <strong>{name}</strong></h1>
            <div>
                <h1>Quizzes</h1>
            </div>
        </main>
    )
}