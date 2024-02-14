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
        }
    ]

    return (
        <main className="flex flex-col justify-center items-center">      
            <Questions questions={questions}/>      
        </main>
    )
}