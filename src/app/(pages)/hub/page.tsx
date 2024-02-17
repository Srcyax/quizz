"use client"

import { useEffect, useState } from "react"
import axios from "axios";
import QuizzCard from "./quizzCard";

export default function Hub(){
    const [name, getName] = useState("");

    useEffect(() =>{
        axios.get("/api/quizzes")
        getName(localStorage.getItem("name") + "");
    }) 

    return (
        <main className="flex flex-col items-center justify-between">
            <h1 className="text-2xl text-center text-zinc-50 rounded-lg p-5 transition 1s bg-black dark:bg-zinc-900 mb-20">Hello, <strong className="text-cyan-500 transition-colors duration-200">{name !== "" ? name : "Quizz User"}</strong></h1>
            <div>
                <h1 className="text-zinc-100 text-center m-5">Quizzes</h1>
                <div className="grid grid-cols-3 max-[552px]:grid-cols-1 max-[854px]:grid-cols-2 grid-rows-none place-items-center gap-10 m-10">
                    <QuizzCard image="https://cdn-icons-png.flaticon.com/512/854/854878.png"
                    title="Capitals of countries" quizzPage="/CaptalOfCountries"/>
                    <QuizzCard image="https://cdn-icons-png.flaticon.com/512/746/746960.png"
                    title="Math riddles" quizzPage="/MathRiddles"/>
                    <QuizzCard image="https://cdn-icons-png.flaticon.com/512/11485/11485423.png"
                    title="Science and technology" quizzPage="/Sciencetechnology"/>
                </div>
            </div>
        </main>
    )
}