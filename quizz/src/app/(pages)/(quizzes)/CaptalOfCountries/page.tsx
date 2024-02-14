"use client"

import Questions from "../question"
import { ArrowBigLeftDash } from 'lucide-react';
import { useRouter } from "next/navigation";

export default function Capitals(){
    const router = useRouter();

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
        },
        {
            question: "What is the capital of South Africa?",
            answers: ["Pretoria", "Johannesburg", "Cape Town", "Durban"],
            correctAnswer: "Pretoria"
        },
        {
            question: "What is the capital of Italy?",
            answers: ["Rome", "Milan", "Naples", "Florence"],
            correctAnswer: "Rome"
        },
        {
            question: "What is the capital of Spain?",
            answers: ["Barcelona", "Madrid", "Seville", "Valencia"],
            correctAnswer: "Madrid"
        },
        {
            question: "What is the capital of China?",
            answers: ["Shanghai", "Beijing", "Guangzhou", "Hong Kong"],
            correctAnswer: "Beijing"
        },
        {
            question: "What is the capital of Egypt?",
            answers: ["Cairo", "Alexandria", "Luxor", "Aswan"],
            correctAnswer: "Cairo"
        },
        {
            question: "What is the capital of Russia?",
            answers: ["Moscow", "St. Petersburg", "Novosibirsk", "Yekaterinburg"],
            correctAnswer: "Moscow"
        },
        {
            question: "What is the capital of Mexico?",
            answers: ["Mexico City", "Guadalajara", "Monterrey", "Puebla"],
            correctAnswer: "Mexico City"
        },
        {
            question: "What is the capital of Turkey?",
            answers: ["Istanbul", "Ankara", "Izmir", "Bursa"],
            correctAnswer: "Ankara"
        },
        {
            question: "What is the capital of South Korea?",
            answers: ["Seoul", "Busan", "Incheon", "Daegu"],
            correctAnswer: "Seoul"
        },
        {
            question: "What is the capital of Brazil?",
            answers: ["Brasília", "São Paulo", "Rio de Janeiro", "Acre"],
            correctAnswer: "Brasília"
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
        }
    ]

    return (
        <main>          
            <div className="relative text-center">
                <Questions questions={questions}/>  
                <img className="absolute w-screen h-screen top-0 left-auto blur-md opacity-50 -z-10" src="https://pngimg.com/d/world_map_PNG2.png" alt="" />
            </div>
            <div>
                <button onClick={() => {
                    router.push('/hub')
                }} className="m-5 px-6 py-3 hover:px-8 rounded-sm text-white bg-zinc-900 transition-200 duration-200"><ArrowBigLeftDash /></button>
            </div>
        </main>
    )
}