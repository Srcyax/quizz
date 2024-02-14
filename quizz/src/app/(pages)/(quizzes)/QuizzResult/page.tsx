"use client"
import { useEffect } from "react"
import axios from "axios";

export default function Result(){
    useEffect(() =>{
        axios.get("http://localhost:3001/resetanswers").then((res) => {
            console.log(res.data);
        });
    }) 

    return (
        <main className="flex flex-col justify-center items-center">
            <div className="bg-zinc-900 rounded-md flex flex-col justify-center items-center gap-10 w-56 p-5">
                <h1 className="text-3xl">Result</h1>
                <h2>3/4</h2>
                <button className="bg-zinc-800 rounded-sm p-3 hover:p-4 trasition-all duration-200">Continue</button>
            </div>
        </main>
    )
}