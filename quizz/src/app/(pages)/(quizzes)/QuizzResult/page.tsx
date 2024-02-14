"use client"
import { useEffect, useState } from "react"
import { CheckCheck, XCircle } from 'lucide-react';
import { useRouter } from "next/navigation"
import axios from "axios";

export default function Result(){
    const router = useRouter()
    const [result, setResult] = useState(0);

    useEffect(() =>{
        axios.get("http://localhost:3001/rightanswers").then((res) => {
            setResult(res.data);
        });
    }) 

    return (
        <main className="flex flex-col justify-center items-center">
            <div className="bg-black dark:bg-zinc-900 rounded-md flex flex-col justify-center items-center mt-16 gap-8 w-56 p-5">
                <h1 className="text-3xl text-white">Result</h1>
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-white">{result}/10</h2>
                    <h3 className="p-1 text-lime-500">{result >= 6 ? <CheckCheck /> : null}</h3>
                    <h3 className="text-rose-600">{result < 6 ? <XCircle /> : null}</h3>
                </div>
                
                <p className="text-white text-[13px] text-center">{result > 3 ? "Congratulations on your result, keep it up 🎉" : "Your result may improve next time, keep going 🎈"}</p>
                <button onClick={() => {
                    axios.post("http://localhost:3001/resetanswers", {
                        answers_value: 0
                    })
                    router.push('/hub');
                }} className="bg-zinc-800 text-white rounded-sm p-3 hover:p-4 trasition-all duration-200">Continue</button>
            </div>
        </main>
    )
}