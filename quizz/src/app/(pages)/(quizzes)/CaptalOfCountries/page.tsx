"use client"

import CapitalsQuestion from "./question"

export default function Capitals(){
    const question = [
        {
            question: "Qual a capital do Brasil?",
            answers: ["Brasília", "São Paulo", "Carlópolis"],
            correctAnswer: "Brasília"
        },
        {
            question: "Qual a capital do Caralho?",
            answers: ["Brasília", "São Paulo", "Carlópolis"],
            correctAnswer: "Brasília"
        },
        {
            question: "Qual a capital do Peru?",
            answers: ["Brasília", "São Paulo", "Carlópolis"],
            correctAnswer: "Brasília"
        }
    ]

    return (
        <main className="flex flex-col justify-center items-center">
            
            <CapitalsQuestion questions={question}/>
            
        </main>
    )
}