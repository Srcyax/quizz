import React, { useState } from "react";
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

    const handleAnswer = (selectedAnswer: string) => {
        axios.post("http://localhost:3001/quizzes", {
            answered: selectedAnswer,
            answer: questions[currentQuestionIndex].correctAnswer
        }).then((res) => {
            console.log(res.data);
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            } else {
                setCurrentQuestionIndex(-1);
                router.push('/QuizzResult')
            }
        });
    };

    return (
        <main>
            {currentQuestionIndex < questions.length && (
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-3xl text-center w-3/4 mt-3 mb-11">{questions[currentQuestionIndex]?.question}</h1>
                    {questions[currentQuestionIndex]?.answers.map((answer, index) => (
                        <button
                            key={index}
                            className="bg-black text-white dark:bg-zinc-900 w-96 p-5 hover:p-6 m-3 rounded-lg text-left transition-all duration-200"
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