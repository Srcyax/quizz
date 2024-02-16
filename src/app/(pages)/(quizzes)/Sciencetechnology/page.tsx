"use client"
import Questions from "../question"
import { ArrowBigLeftDash } from 'lucide-react';
import { useRouter } from "next/navigation";

export default function ScienceTech(){
    const router = useRouter();

    const questions = [
        {
            question: "Who is credited with discovering penicillin?",
            answers: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Albert Einstein"],
            correctAnswer: "Alexander Fleming"
        },
        {
            question: "Which scientist is best known for his theory of relativity?",
            answers: ["Albert Einstein", "Isaac Newton", "Stephen Hawking", "Niels Bohr"],
            correctAnswer: "Albert Einstein"
        },
        {
            question: "What does 'www' stand for in a website browser?",
            answers: ["World Wide Web", "Web World Wires", "Wide Width Web", "Western Washington Web"],
            correctAnswer: "World Wide Web"
        },
        {
            question: "Who is known as the 'father of electricity'?",
            answers: ["Michael Faraday", "Thomas Edison", "Nikola Tesla", "Benjamin Franklin"],
            correctAnswer: "Michael Faraday"
        },
        {
            question: "What does 'NASA' stand for?",
            answers: ["National Aeronautics and Space Administration", "North American Space Agency", "National Astronauts and Space Administration", "National Aeronautical and Space Association"],
            correctAnswer: "National Aeronautics and Space Administration"
        },
        {
            question: "What was the first artificial satellite launched into space?",
            answers: ["Sputnik 1", "Vostok 1", "Explorer 1", "Hubble Space Telescope"],
            correctAnswer: "Sputnik 1"
        },
        {
            question: "Who developed the first successful polio vaccine?",
            answers: ["Jonas Salk", "Albert Sabin", "Louis Pasteur", "Edward Jenner"],
            correctAnswer: "Jonas Salk"
        },
        {
            question: "What does 'DNA' stand for in genetics?",
            answers: ["Deoxyribonucleic Acid", "Dihydroxyadenine", "Dinucleic Acid", "Deoxyribose Nucleic Acid"],
            correctAnswer: "Deoxyribonucleic Acid"
        },
        {
            question: "What is the chemical symbol for water?",
            answers: ["H2O", "CO2", "O2", "NaCl"],
            correctAnswer: "H2O"
        },
        {
            question: "Who is considered the father of modern computer science?",
            answers: ["Alan Turing", "Steve Jobs", "Bill Gates", "Tim Berners-Lee"],
            correctAnswer: "Alan Turing"
        },
        {
            question: "What does 'HTML' stand for in web development?",
            answers: ["Hypertext Markup Language", "Hyperlink Text Management Language", "Home Tool Markup Language", "Hyper Transfer Mode Language"],
            correctAnswer: "Hypertext Markup Language"
        },
        {
            question: "What is the smallest unit of matter?",
            answers: ["Atom", "Molecule", "Proton", "Neutron"],
            correctAnswer: "Atom"
        },
        {
            question: "What is the largest organ of the human body?",
            answers: ["Skin", "Liver", "Brain", "Heart"],
            correctAnswer: "Skin"
        },
        {
            question: "What is the process by which plants make their food?",
            answers: ["Photosynthesis", "Respiration", "Transpiration", "Pollination"],
            correctAnswer: "Photosynthesis"
        },
        {
            question: "Who invented the telephone?",
            answers: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
            correctAnswer: "Alexander Graham Bell"
        },
        {
            question: "What element does 'Fe' represent on the periodic table?",
            answers: ["Iron", "Gold", "Silver", "Copper"],
            correctAnswer: "Iron"
        },
        {
            question: "Which planet is known as the 'Red Planet'?",
            answers: ["Mars", "Jupiter", "Venus", "Mercury"],
            correctAnswer: "Mars"
        },
        {
            question: "What is the unit of electric current?",
            answers: ["Ampere", "Volt", "Ohm", "Watt"],
            correctAnswer: "Ampere"
        },
        {
            question: "Who developed the theory of evolution?",
            answers: ["Charles Darwin", "Gregor Mendel", "Alfred Russel Wallace", "Jean-Baptiste Lamarck"],
            correctAnswer: "Charles Darwin"
        },
        {
            question: "What does 'AI' stand for in technology?",
            answers: ["Artificial Intelligence", "Automated Integration", "Advanced Information", "Automated Intelligence"],
            correctAnswer: "Artificial Intelligence"
        },
        {
            question: "What was the first human-made object to reach space?",
            answers: ["V-2 rocket", "Sputnik 1", "Vostok 1", "Apollo 11"],
            correctAnswer: "V-2 rocket"
        },
        {
            question: "Who is known as the 'father of modern physics'?",
            answers: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Nikola Tesla"],
            correctAnswer: "Albert Einstein"
        },
        {
            question: "What is the unit of energy?",
            answers: ["Joule", "Watt", "Volt", "Ampere"],
            correctAnswer: "Joule"
        },
        {
            question: "What is the fastest animal on land?",
            answers: ["Cheetah", "Lion", "Gazelle", "Pronghorn"],
            correctAnswer: "Cheetah"
        },
        {
            question: "What is the SI unit of force?",
            answers: ["Newton", "Pascal", "Joule", "Watt"],
            correctAnswer: "Newton"
        },
        {
            question: "Who invented the World Wide Web?",
            answers: ["Tim Berners-Lee", "Steve Jobs", "Bill Gates", "Jeff Bezos"],
            correctAnswer: "Tim Berners-Lee"
        },
        {
            question: "Which planet is known as the 'Morning Star'?",
            answers: ["Venus", "Mars", "Mercury", "Jupiter"],
            correctAnswer: "Venus"
        },
        {
            question: "What does 'CPU' stand for in computer terminology?",
            answers: ["Central Processing Unit", "Computer Processing Unit", "Central Power Unit", "Central Program Unit"],
            correctAnswer: "Central Processing Unit"
        },
        {
            question: "Who invented the first practical electric battery?",
            answers: ["Alessandro Volta", "Michael Faraday", "Thomas Edison", "Benjamin Franklin"],
            correctAnswer: "Alessandro Volta"
        },
        {
            question: "What is the chemical symbol for gold?",
            answers: ["Au", "Ag", "Fe", "Cu"],
            correctAnswer: "Au"
        },
        {
            question: "Who is known as the 'father of modern chemistry'?",
            answers: ["Antoine Lavoisier", "Dmitri Mendeleev", "Louis Pasteur", "Marie Curie"],
            correctAnswer: "Antoine Lavoisier"
        }
    ];

    return (
        <main>         
            <div className="relative text-center">
                <Questions questions={questions} bgImage="images/sciencetech.png"/> 
            </div>
            <div>
                <button onClick={() => {
                    router.push('/hub')
                }} className="m-5 px-6 py-3 hover:px-8 rounded-sm text-white bg-zinc-900 transition-200 duration-200"><ArrowBigLeftDash /></button>
            </div>
        </main>
    )
}