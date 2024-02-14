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
            question: "What's the capital of France?",
            answers: ["Paris", "Marseille", "Lyon", "Nice"],
            correctAnswer: "Paris"
        },
        {
            question: "What's the capital of Japan?",
            answers: ["Tokyo", "Kyoto", "Osaka", "Nagoya"],
            correctAnswer: "Tokyo"
        },
        {
            question: "What's the capital of Canada?",
            answers: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
            correctAnswer: "Ottawa"
        },
        {
            question: "What's the capital of Australia?",
            answers: ["Canberra", "Sydney", "Melbourne", "Brisbane"],
            correctAnswer: "Canberra"
        },
        {
            question: "What's the capital of Germany?",
            answers: ["Berlin", "Munich", "Hamburg", "Frankfurt"],
            correctAnswer: "Berlin"
        },
        {
            question: "What's the capital of India?",
            answers: ["New Delhi", "Mumbai", "Bangalore", "Kolkata"],
            correctAnswer: "New Delhi"
        },
        {
            question: "What's the capital of South Africa?",
            answers: ["Pretoria", "Cape Town", "Johannesburg", "Durban"],
            correctAnswer: "Pretoria"
        },
        {
            question: "What's the capital of Argentina?",
            answers: ["Buenos Aires", "Cordoba", "Rosario", "Mendoza"],
            correctAnswer: "Buenos Aires"
        },
        {
            question: "What's the capital of Russia?",
            answers: ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg"],
            correctAnswer: "Moscow"
        },
        {
            question: "What's the capital of China?",
            answers: ["Beijing", "Shanghai", "Guangzhou", "Shenzhen"],
            correctAnswer: "Beijing"
        },
        {
            question: "What's the capital of Italy?",
            answers: ["Rome", "Milan", "Naples", "Turin"],
            correctAnswer: "Rome"
        },
        {
            question: "What's the capital of Spain?",
            answers: ["Madrid", "Barcelona", "Valencia", "Seville"],
            correctAnswer: "Madrid"
        },
        {
            question: "What's the capital of United Kingdom?",
            answers: ["London", "Manchester", "Birmingham", "Glasgow"],
            correctAnswer: "London"
        },
        {
            question: "What's the capital of Egypt?",
            answers: ["Cairo", "Alexandria", "Giza", "Luxor"],
            correctAnswer: "Cairo"
        },
        {
            question: "What's the capital of Turkey?",
            answers: ["Ankara", "Istanbul", "Izmir", "Bursa"],
            correctAnswer: "Ankara"
        },
        {
            question: "What's the capital of Mexico?",
            answers: ["Mexico City", "Guadalajara", "Monterrey", "Puebla"],
            correctAnswer: "Mexico City"
        },
        {
            question: "What's the capital of Nigeria?",
            answers: ["Abuja", "Lagos", "Kano", "Ibadan"],
            correctAnswer: "Abuja"
        },
        {
            question: "What's the capital of South Korea?",
            answers: ["Seoul", "Busan", "Incheon", "Daegu"],
            correctAnswer: "Seoul"
        },
        {
            question: "What's the capital of Egypt?",
            answers: ["Cairo", "Alexandria", "Giza", "Luxor"],
            correctAnswer: "Cairo"
        },
        {
            question: "What's the capital of Turkey?",
            answers: ["Ankara", "Istanbul", "Izmir", "Bursa"],
            correctAnswer: "Ankara"
        },
        {
            question: "What's the capital of Mexico?",
            answers: ["Mexico City", "Guadalajara", "Monterrey", "Puebla"],
            correctAnswer: "Mexico City"
        },
        {
            question: "What's the capital of Nigeria?",
            answers: ["Abuja", "Lagos", "Kano", "Ibadan"],
            correctAnswer: "Abuja"
        },
        {
            question: "What's the capital of South Korea?",
            answers: ["Seoul", "Busan", "Incheon", "Daegu"],
            correctAnswer: "Seoul"
        },
        {
            question: "What's the capital of Brazil?",
            answers: ["Brasília", "São Paulo", "Rio de Janeiro", "Acre"],
            correctAnswer: "Brasília"
        },
        {
            question: "What's the capital of France?",
            answers: ["Paris", "Marseille", "Lyon", "Nice"],
            correctAnswer: "Paris"
        },
        {
            question: "What's the capital of Japan?",
            answers: ["Tokyo", "Kyoto", "Osaka", "Nagoya"],
            correctAnswer: "Tokyo"
        },
        {
            question: "What's the capital of Canada?",
            answers: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
            correctAnswer: "Ottawa"
        },
        {
            question: "What's the capital of Australia?",
            answers: ["Canberra", "Sydney", "Melbourne", "Brisbane"],
            correctAnswer: "Canberra"
        },
        {
            question: "What's the capital of Germany?",
            answers: ["Berlin", "Munich", "Hamburg", "Frankfurt"],
            correctAnswer: "Berlin"
        },
        {
            question: "What's the capital of India?",
            answers: ["New Delhi", "Mumbai", "Bangalore", "Kolkata"],
            correctAnswer: "New Delhi"
        }
    ];
    
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