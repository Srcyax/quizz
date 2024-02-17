"use client"
import Questions from "../question"
import { useRouter } from "next/navigation";

export default function Math(){
    const router = useRouter();

    if (localStorage.getItem("name") === null){
        router.push("/");
    }
    
    const questions = [
        {
            question: "If you have three oranges and you take away two, how many will you have?",
            answers: ["Two", "Three", "One", "None"],
            correctAnswer: "Two"
        },
        {
            question: "I am an odd number. Take away one letter and I become even. What number am I?",
            answers: ["Seven", "Thirteen", "Nine", "Five"],
            correctAnswer: "Seven"
        },
        {
            question: "What comes once in a minute, twice in a moment, but never in a thousand years?",
            answers: ["Letter 'M'", "Number '2'", "Vowel 'E'", "Time"],
            correctAnswer: "Letter 'M'"
        },
        {
            question: "What has a head, a tail, is brown, and has no legs?",
            answers: ["Penny", "Snake", "Bear", "Dog"],
            correctAnswer: "Penny"
        },
        {
            question: "What has keys but can't open locks?",
            answers: ["Keyboard", "Piano", "Map", "Calculator"],
            correctAnswer: "Piano"
        },
        {
            question: "What has a neck but no head?",
            answers: ["Bottle", "Shirt", "Snake", "Giraffe"],
            correctAnswer: "Bottle"
        },
        {
            question: "What has one eye but can't see?",
            answers: ["Needle", "Cyclops", "Potato", "Cyclops"],
            correctAnswer: "Needle"
        },
        {
            question: "What has a thumb and four fingers but is not alive?",
            answers: ["Glove", "Hand", "Mitten", "Sculpture"],
            correctAnswer: "Glove"
        },
        {
            question: "What belongs to you, but other people use it more than you?",
            answers: ["Your name", "Your house", "Your clothes", "Your money"],
            correctAnswer: "Your name"
        },
        {
            question: "What travels around the world but stays in one spot?",
            answers: ["Stamp", "Airplane", "Sun", "Postcard"],
            correctAnswer: "Stamp"
        },
        {
            question: "What can be cracked, made, told, and played?",
            answers: ["Joke", "Egg", "Code", "Song"],
            correctAnswer: "Joke"
        },
        {
            question: "What goes up but never comes down?",
            answers: ["Age", "Mountain", "Ladder", "Balloon"],
            correctAnswer: "Age"
        },
        {
            question: "What has keys but can't open locks?",
            answers: ["Keyboard", "Piano", "Map", "Calculator"],
            correctAnswer: "Piano"
        },
        {
            question: "What has many keys but can't open a single lock?",
            answers: ["Piano", "Keyboard", "Typewriter", "Xylophone"],
            correctAnswer: "Piano"
        },
        {
            question: "What can travel around the world while staying in a corner?",
            answers: ["Stamp", "Postcard", "Globe", "Airplane"],
            correctAnswer: "Stamp"
        },
        {
            question: "What gets wetter as it dries?",
            answers: ["Towel", "Paper", "Cloth", "Sponge"],
            correctAnswer: "Towel"
        },
        {
            question: "What is black when you buy it, red when you use it, and gray when you throw it away?",
            answers: ["Charcoal", "Matchstick", "Coal", "Fire"],
            correctAnswer: "Charcoal"
        },
        {
            question: "The more you take, the more you leave behind. What am I?",
            answers: ["Footsteps", "Time", "Breath", "Memories"],
            correctAnswer: "Footsteps"
        },
        {
            question: "What gets bigger when more is taken away?",
            answers: ["Hole", "Debt", "Problem", "Balloons"],
            correctAnswer: "Hole"
        },
        {
            question: "What is always in front of you but can't be seen?",
            answers: ["Future", "Past", "Air", "Tomorrow"],
            correctAnswer: "Future"
        },
        {
            question: "What has a neck but no head?",
            answers: ["Bottle", "Shirt", "Snake", "Giraffe"],
            correctAnswer: "Bottle"
        },
        {
            question: "What can you catch but not throw?",
            answers: ["Cold", "Yawn", "Dream", "Ball"],
            correctAnswer: "Cold"
        },
        {
            question: "What has keys but can't open locks?",
            answers: ["Keyboard", "Piano", "Map", "Calculator"],
            correctAnswer: "Piano"
        },
        {
            question: "What runs but can't walk?",
            answers: ["Water", "Car", "River", "Clock"],
            correctAnswer: "Clock"
        },
        {
            question: "What has an eye but can't see?",
            answers: ["Needle", "Storm", "Cyclops", "Tornado"],
            correctAnswer: "Needle"
        },
        {
            question: "What has a head, a tail, is brown, and has no legs?",
            answers: ["Penny", "Snake", "Bear", "Dog"],
            correctAnswer: "Penny"
        },
        {
            question: "What comes once in a minute, twice in a moment, but never in a thousand years?",
            answers: ["Letter 'M'", "Number '2'", "Vowel 'E'", "Time"],
            correctAnswer: "Letter 'M'"
        },
        {
            question: "What has a neck but no head?",
            answers: ["Bottle", "Shirt", "Snake", "Giraffe"],
            correctAnswer: "Bottle"
        },
        {
            question: "What has one eye but can't see?",
            answers: ["Needle", "Cyclops", "Potato", "Cyclops"],
            correctAnswer: "Needle"
        },
        {
            question: "What has a thumb and four fingers but is not alive?",
            answers: ["Glove", "Hand", "Mitten", "Sculpture"],
            correctAnswer: "Glove"
        },
        {
            question: "What belongs to you, but other people use it more than you?",
            answers: ["Your name", "Your house", "Your clothes", "Your money"],
            correctAnswer: "Your name"
        }
    ];


    return (
        <main>         
            <div className="relative text-center">
                <Questions questions={questions} bgImage="images/mathriddles.png"/> 
            </div>
        </main>
    )
}