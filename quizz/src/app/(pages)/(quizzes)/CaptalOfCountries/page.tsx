"use client"

import Questions from "../question"

export default function Capitals(){
    const questions = [
        {
            question: "What's the capital of Brazil?",
            answers: ["Brasília", "São Paulo", "Rio de Janeiro", "Acre"],
            correctAnswer: "Brasília"
        },
        {
            question: "What is the capital of Japan?",
            answers: ["Aomori", "Miyagi", "Tokyo", "Kanagawa"],
            correctAnswer: "Tokyo"
        },
        {
            question: "What is the capital of Peru?",
            answers: ["Huánuco", "Moquegua", "Lima", "Apurímac"],
            correctAnswer: "Lima"
        },
        {
            question: "What is the capital of Australia?",
            answers: ["Sydney", "Melbourne", "Canberra", "Perth"],
            correctAnswer: "Canberra"
        },
        {
            question: "What is the capital of Canada?",
            answers: ["Vancouver", "Ottawa", "Toronto", "Montreal"],
            correctAnswer: "Ottawa"
        },
        {
            question: "What is the capital of India?",
            answers: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
            correctAnswer: "New Delhi"
        },
        {
            question: "What is the capital of France?",
            answers: ["Marseille", "Nice", "Lyon", "Paris"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of Argentina?",
            answers: ["Buenos Aires", "Córdoba", "Rosario", "Mendoza"],
            correctAnswer: "Buenos Aires"
        },
        {
            question: "What is the capital of Germany?",
            answers: ["Hamburg", "Munich", "Frankfurt", "Berlin"],
            correctAnswer: "Berlin"
        },
        {
            question: "What is the capital of Qatar?",
            answers: ["Al Khor", "Doha", "Al Jumaliyah", "Al Shamal"],
            correctAnswer: "Doha"
        }
    ]

    return (
        <main className="flex flex-col justify-center items-center">      
            <Questions questions={questions}/>      
        </main>
    )
}