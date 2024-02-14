import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"

interface Question {
    question: string;
    answers: string[];
    correctAnswer: string;
}

interface CapitalsProps {
    questions: Question[];
}

export default function CapitalsQuestion({ questions }: CapitalsProps) {
    const router = useRouter()
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const handleAnswer = (selectedAnswer: string) => {
        axios.post("http://localhost:3001/quizzes", {
            answered: selectedAnswer,
            answer: questions[currentQuestionIndex].correctAnswer
        }).then((res) => {
            console.log(res.data);
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            } else {
                console.log("Parabéns! Você respondeu todas as perguntas.");
                setCurrentQuestionIndex(-1);
                router.push('/hub')
            }
        });
    };

    return (
        <main className="flex flex-col justify-center items-center">
            {currentQuestionIndex < questions.length && (
                <div>
                    <h1 className="text-3xl mt-3 mb-11">{questions[currentQuestionIndex]?.question}</h1>
                    {questions[currentQuestionIndex]?.answers.map((answer, index) => (
                        <button
                            key={index}
                            className="bg-black dark:bg-zinc-900 w-96 p-5 hover:p-6 m-3 rounded-lg text-left transition-all duration-200"
                            onClick={() => handleAnswer(answer)}
                        >
                            {answer}
                        </button>
                    ))}
                </div>
            )}
        </main>
    );
}