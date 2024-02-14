"use client"

import Questions from "../question"

export default function Capitals(){
    const questions = [
        {
            question: "Qual a capital do Brasil?",
            answers: ["Brasília", "São Paulo", "Paraná", "Goiana"],
            correctAnswer: "Brasília"
        },
        {
            question: "Qual a capital do Japão",
            answers: ["Aomori", "Miyagi", "Tóquio", "Kanagawa"],
            correctAnswer: "Tóquio"
        },
        {
            question: "Qual a capital do Peru?",
            answers: ["Huánuco", "Moquegua", "Lima", "Apurímac"],
            correctAnswer: "Lima"
        }
    ]

    return (
        <main className="flex flex-col justify-center items-center">      
            <Questions questions={questions}/>      
        </main>
    )
}