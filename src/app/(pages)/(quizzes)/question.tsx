import React, { useState } from "react";
import { ArrowBigLeftDash } from 'lucide-react';
import axios from "axios";
import { useRouter } from "next/navigation"
import { Skeleton } from "@/components/ui/skeleton"
import { LazyLoadImage } from 'react-lazy-load-image-component';


interface Question {
    question: string;
    answers: string[];
    correctAnswer: string;
}

interface QuestionProps {
    questions: Question[];
    bgImage: string;
}

export default function Questions({ questions, bgImage }: QuestionProps) {
    const router = useRouter()
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<null | number>(null);
    const [isAnswering, setIsAnswering] = useState(false);

    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true)
    }

    const handleAnswer = (selectedAnswer: string, index: number) => {
        if (isAnswering){
            return;
        }

        setIsAnswering(true);
            
        axios.post("/api/quizzes", {
            answered: selectedAnswer,
            answer: questions[currentQuestionIndex].correctAnswer
        }).then((res) => {
            console.log(res.data);
            setSelectedAnswerIndex(index);
            setTimeout(() => {
                setSelectedAnswerIndex(null);
                if (currentQuestionIndex < questions.length - 1) {
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                } else {
                    setCurrentQuestionIndex(-1);
                    router.push('/QuizzResult')
                }
                setIsAnswering(false);
            }, 2000)
        });
    };

    function SkeletonCard() {
        return (
          <div className="flex flex-col items-center gap-2">
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
                {
                    !imageLoaded ? <SkeletonCard/> : null
                }
                <LazyLoadImage beforeLoad={ () => handleImageLoad()} className="absolute w-screen h-screen top-0 left-auto blur-sm opacity-50 -z-10" src={bgImage}/>
            </div>
            {
            imageLoaded && currentQuestionIndex < questions.length &&  (
                <div className="flex flex-col justify-center items-center">
                    <p className="text-gray-400 text-[10px]">{currentQuestionIndex + 1 + "/" + questions.length}</p>
                    <h1 className="text-3xl text-center w-3/4 mt-3 mb-11">{questions[currentQuestionIndex]?.question}</h1>
                    {questions[currentQuestionIndex]?.answers.map((answer, index) => (
                        <button
                            key={index}
                            className={`bg-zinc-900 text-white border-2 w-96 p-5 hover:p-6 m-3 rounded-lg text-left transition-all duration-200 ${selectedAnswerIndex === index && questions[currentQuestionIndex].correctAnswer === answer ? 'border-green-500' : ''} ${selectedAnswerIndex === index && questions[currentQuestionIndex].correctAnswer !== answer ? 'border-red-500' : ''}`}
                            onClick={() => handleAnswer(answer, index)}
                        >
                            {answer}
                        </button>
                    ))}
                </div>
            )}
            <div className="flex flex-row bottom-96">
                <button onClick={() => {
                        router.push('/hub')
                    }} className="m-5 px-6 py-3 hover:px-8 rounded-sm text-white bg-zinc-900 transition-200 duration-200"><ArrowBigLeftDash />
                </button>
            </div>
            
        </main>
    );
}
