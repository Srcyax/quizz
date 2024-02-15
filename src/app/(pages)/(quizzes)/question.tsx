import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"

interface Question {
    question: string;
    answers: string[];
    correctAnswer: string;
}

interface QuestionProps {
    questions: Question[];
}


export default function Questions({ questions }: QuestionProps) {
    const router = useRouter()
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<null | number>(null);
    const [isAnswering, setIsAnswering] = useState(false);

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

    return (
        <main>
            {currentQuestionIndex < questions.length && (
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
        </main>
    );
}
