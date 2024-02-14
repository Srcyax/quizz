"use client"

import Questions from "../question"
import { ArrowBigLeftDash } from 'lucide-react';
import { useRouter } from "next/navigation";

export default function Math(){
    const router = useRouter();

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
        },
        {
            question: "If you multiply me by any other number, the answer will always be the same. What number am I?",
            answers: ["One", "Zero", "Two", "Ten"],
            correctAnswer: "Zero"
        },
        {
            question: "I am an odd number. Take away a letter and I become even. What number am I?",
            answers: ["Three", "Five", "Seven", "Nine"],
            correctAnswer: "Seven"
        },
        {
            question: "I have three apples. If you take away two from me, how many apples do you have?",
            answers: ["One", "Two", "Three", "None"],
            correctAnswer: "Two"
        },
        {
            question: "What number when added to its half equals 60?",
            answers: ["40", "50", "30", "20"],
            correctAnswer: "40"
        },
        {
            question: "I am an odd number. Take away one letter and I become even. What number am I?",
            answers: ["Seven", "Five", "Three", "Nine"],
            correctAnswer: "Seven"
        },
        {
            question: "How can you make the number seven even without addition or subtraction?",
            answers: ["Double it", "Divide it by 2", "Round it up", "Round it down"],
            correctAnswer: "Double it"
        },
        {
            question: "What mathematical symbol can be placed between 5 and 9 to get a number bigger than 5 and smaller than 9?",
            answers: [">", "<", "=", "+"],
            correctAnswer: "<"
        },
        {
            question: "What three positive numbers give the same result when multiplied and added together?",
            answers: ["1, 2, 3", "2, 3, 4", "3, 4, 5", "1, 3, 5"],
            correctAnswer: "1, 2, 3"
        },
        {
            question: "If a hen and a half can lay an egg and a half in a day and a half, how many eggs can a hen lay in three days?",
            answers: ["3 eggs", "4 eggs", "5 eggs", "6 eggs"],
            correctAnswer: "3 eggs"
        },
        {
            question: "I am a number. If you add 7 to me, you get 30. What number am I?",
            answers: ["23", "24", "25", "26"],
            correctAnswer: "23"
        },
        {
            question: "If you have 10 apples and you take away 4, how many do you have?",
            answers: ["4 apples", "6 apples", "10 apples", "None"],
            correctAnswer: "10 apples"
        },
        {
            question: "What is the result of multiplying all the numbers on a telephone's number pad?",
            answers: ["0", "1", "10", "100"],
            correctAnswer: "0"
        },
        {
            question: "If 5 cats can catch 5 mice in 5 minutes, how many cats would it take to catch 100 mice in 100 minutes?",
            answers: ["100 cats", "1 cat", "5 cats", "10 cats"],
            correctAnswer: "5 cats"
        },
        {
            question: "What number comes next in the sequence: 2, 4, 8, 16, ___?",
            answers: ["32", "24", "64", "10"],
            correctAnswer: "32"
        },
        {
            question: "If you have a bowl with six apples and you take away four, how many do you have?",
            answers: ["4 apples", "6 apples", "2 apples", "None"],
            correctAnswer: "4 apples"
        }
    ]

    return (
        <main>          
            <div className="relative text-center">
                <Questions questions={questions}/>  
                <img className="absolute w-screen h-screen top-0 left-auto blur-[2px] opacity-50 -z-10" src="https://clipart-library.com/images_k/math-transparent-background/math-transparent-background-6.png" alt="" />
            </div>
            <div>
                <button onClick={() => {
                    router.push('/hub')
                }} className="m-5 px-6 py-3 hover:px-8 rounded-sm text-white bg-zinc-900 transition-200 duration-200"><ArrowBigLeftDash /></button>
            </div>
        </main>
    )
}