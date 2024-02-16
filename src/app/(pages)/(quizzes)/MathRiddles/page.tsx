"use client"

import Questions from "../question"
import { ArrowBigLeftDash } from 'lucide-react';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Skeleton } from "@/components/ui/skeleton"

export default function Math(){
    const router = useRouter();

    const [imageLoaded, setImageLoaded] = useState({
        backgroundImage: false
      });
    
    const handleImageLoad = (imageType: string) => {
        setImageLoaded(prevState => ({
            ...prevState,
            [imageType]: true
        }));
    };

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
    
    function SkeletonCard() {
        return (
          <div className="flex flex-col items-center gap-2">
            <Skeleton className="h-[25px] w-[250px] rounded-sm" />
            <Skeleton className="h-[25px] w-[300px] rounded-sm" />
            <div className="flex flex-col items-center gap-5 m-10">
              <Skeleton className="h-[60px] w-[370px]" />
              <Skeleton className="h-[60px] w-[370px]" />
              <Skeleton className="h-[60px] w-[370px]" />
              <Skeleton className="h-[60px] w-[370px]" />
            </div>
          </div>
        )
      }

    return (
        <main>         
            <div className="relative text-center">
                <div className="flex flex-col justify-center items-center">
                    {
                        !imageLoaded.backgroundImage ? <SkeletonCard/> : <Questions questions={questions}/>  
                    }
                </div>

                <LazyLoadImage beforeLoad={ () => handleImageLoad('backgroundImage')} className="absolute w-screen h-screen top-0 left-auto blur-md opacity-50 -z-10" src="images/mathriddles.png"/>
                
            </div>
            <div>
                <button onClick={() => {
                    router.push('/hub')
                }} className="m-5 px-6 py-3 hover:px-8 rounded-sm text-white bg-zinc-900 transition-200 duration-200"><ArrowBigLeftDash /></button>
            </div>
        </main>
    )
}