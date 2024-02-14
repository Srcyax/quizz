"use client"

import Questions from "../question"
import { ArrowBigLeftDash } from 'lucide-react';
import { useRouter } from "next/navigation";

export default function ScienceTech(){
    const router = useRouter();

    const questions = [
        {
            question: "Who is known as the father of computer science?",
            answers: ["Alan Turing", "Albert Einstein", "Isaac Newton", "Charles Babbage"],
            correctAnswer: "Alan Turing"
        },
        {
            question: "What does 'www' stand for in a website URL?",
            answers: ["World Wide Web", "Web Wide World", "World Web Wide", "Wide Web World"],
            correctAnswer: "World Wide Web"
        },
        {
            question: "What does CPU stand for?",
            answers: ["Central Processing Unit", "Computer Processing Unit", "Core Processing Unit", "Central Processor Unit"],
            correctAnswer: "Central Processing Unit"
        },
        {
            question: "Which scientist is credited with the discovery of gravity?",
            answers: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
            correctAnswer: "Isaac Newton"
        },
        {
            question: "What is the chemical symbol for water?",
            answers: ["H2O", "CO2", "NaCl", "O2"],
            correctAnswer: "H2O"
        },
        {
            question: "What does 'HTML' stand for in web development?",
            answers: ["Hypertext Markup Language", "Hyperlink and Text Markup Language", "High Tech Markup Language", "Home Tool Markup Language"],
            correctAnswer: "Hypertext Markup Language"
        },
        {
            question: "Who invented the telephone?",
            answers: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Albert Einstein"],
            correctAnswer: "Alexander Graham Bell"
        },
        {
            question: "What is the closest planet to the Sun?",
            answers: ["Mercury", "Venus", "Earth", "Mars"],
            correctAnswer: "Mercury"
        },
        {
            question: "What is the process of converting sunlight into electricity using photovoltaic cells called?",
            answers: ["Solar energy", "Wind energy", "Hydro energy", "Solar power"],
            correctAnswer: "Solar power"
        },
        {
            question: "Which programming language is commonly used for building dynamic web pages?",
            answers: ["JavaScript", "Python", "Java", "C++"],
            correctAnswer: "JavaScript"
        },
        {
            question: "Who formulated the theory of relativity?",
            answers: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
            correctAnswer: "Albert Einstein"
        },
        {
            question: "What does 'DNA' stand for in biology?",
            answers: ["Deoxyribonucleic Acid", "Dynamic Nucleic Acid", "Digital Nucleotide Array", "Double Nucleotide Assembly"],
            correctAnswer: "Deoxyribonucleic Acid"
        },
        {
            question: "What is the chemical symbol for gold?",
            answers: ["Au", "Ag", "Fe", "Cu"],
            correctAnswer: "Au"
        },
        {
            question: "Who discovered penicillin?",
            answers: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Robert Koch"],
            correctAnswer: "Alexander Fleming"
        },
        {
            question: "What is the study of earthquakes called?",
            answers: ["Seismology", "Meteorology", "Geology", "Volcanology"],
            correctAnswer: "Seismology"
        },
        {
            question: "What is the process of converting water into vapor called?",
            answers: ["Evaporation", "Condensation", "Sublimation", "Boiling"],
            correctAnswer: "Evaporation"
        },
        {
            question: "What is the unit of electrical resistance?",
            answers: ["Ohm", "Volt", "Ampere", "Watt"],
            correctAnswer: "Ohm"
        },
        {
            question: "Who discovered the structure of DNA?",
            answers: ["James Watson and Francis Crick", "Rosalind Franklin", "Gregor Mendel", "Thomas Hunt Morgan"],
            correctAnswer: "James Watson and Francis Crick"
        },
        {
            question: "What is the study of the origin and development of the universe called?",
            answers: ["Cosmology", "Astrology", "Astronomy", "Meteorology"],
            correctAnswer: "Cosmology"
        },
        {
            question: "What is the chemical symbol for sodium?",
            answers: ["Na", "Ne", "Ni", "No"],
            correctAnswer: "Na"
        },
        {
            question: "What is the unit of energy in the International System of Units (SI)?",
            answers: ["Joule", "Watt", "Volt", "Ampere"],
            correctAnswer: "Joule"
        },
        {
            question: "Who is known as the 'Father of Modern Chemistry'?",
            answers: ["Antoine Lavoisier", "Marie Curie", "Dmitri Mendeleev", "Louis Pasteur"],
            correctAnswer: "Antoine Lavoisier"
        },
        {
            question: "What is the smallest unit of matter?",
            answers: ["Atom", "Molecule", "Element", "Cell"],
            correctAnswer: "Atom"
        },
        {
            question: "What is the process of converting sugar into alcohol called?",
            answers: ["Fermentation", "Oxidation", "Distillation", "Carbonation"],
            correctAnswer: "Fermentation"
        },
        {
            question: "What is the chemical symbol for iron?",
            answers: ["Fe", "I", "Ir", "In"],
            correctAnswer: "Fe"
        }
    ]
    

    return (
        <main>          
            <div className="relative text-center">
                <Questions questions={questions}/>  
                <img className="absolute w-screen h-screen top-0 left-auto blur-[2px] opacity-50 -z-10" src="https://png.pngtree.com/png-vector/20230214/ourmid/pngtree-technology-network-digital-diagram-geometric-dots-abstract-png-image_6600647.png" alt="" />
            </div>
            <div>
                <button onClick={() => {
                    router.push('/hub')
                }} className="m-5 px-6 py-3 hover:px-8 rounded-sm text-white bg-zinc-900 transition-200 duration-200"><ArrowBigLeftDash /></button>
            </div>
        </main>
    )
}