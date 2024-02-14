"use client"

import Questions from "../question"

export default function Math(){
    const questions = [
        {
            question: "There is a duck between two ducks, a duck behind a duck, and a duck in front of another duck. How many ducks are we talking about?",
            answers: ["4 ducks", "3 ducks", "2 ducks", "5 ducks"],
            correctAnswer: "3 ducks"
        },
        {
            question: "When I was 8 years old, my sister was half my age. Now that I'm 55, how old is my sister?",
            answers: ["51 years old", "52 years old", "49 years old", "45 years old"],
            correctAnswer: "51 years old"
        },
        {
            question: "I have a hidden treasure in my house. If I divide my father's age by 2 and add 5, and then multiply by 3, resulting in 39. How old is my father?",
            answers: ["37 years", "39 years", "41 years", "43 years"],
            correctAnswer: "41 years"
        },
        {
            question: "Two guards are sitting in a tower. One looks north, and the other looks south. They can see each other. How is this possible?",
            answers: ["The tower is rectangular", "The tower is triangular", "The tower is round", "The tower is square"],
            correctAnswer: "The tower is round"
        },
        {
            question: "If two's company and three's a crowd, what are four and five?",
            answers: ["Seven", "Nine", "Eleven", "Thirteen"],
            correctAnswer: "Nine"
        },
        {
            question: "What has keys but can't open locks?",
            answers: ["A piano", "A computer keyboard", "A book", "A map"],
            correctAnswer: "A piano"
        },
        {
            question: "I am an odd number. Take away a letter and I become even. What number am I?",
            answers: ["Three", "Five", "Seven", "Nine"],
            correctAnswer: "Seven"
        },
        {
            question: "What has a head, a tail, is brown, and has no legs?",
            answers: ["A coin", "A horse", "A dog", "A tree"],
            correctAnswer: "A coin"
        },
        {
            question: "If you have me, you want to share me. If you share me, you haven't got me. What am I?",
            answers: ["A secret", "Money", "Happiness", "A cake"],
            correctAnswer: "A secret"
        },
        {
            question: "What comes once in a minute, twice in a moment, but never in a thousand years?",
            answers: ["The letter 'm'", "The number '1'", "A heartbeat", "A breath"],
            correctAnswer: "The letter 'm'"
        }
    ]

    return (
        <main className="relative text-center"> 
            <Questions questions={questions}/>  
            <img className="absolute w-screen h-screen -top-20 left-auto blur-[2px] opacity-50 -z-10" src="https://clipart-library.com/images_k/math-transparent-background/math-transparent-background-6.png" alt="" />    
        </main>
    )
}