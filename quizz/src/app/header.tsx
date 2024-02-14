"use client"
import { useTheme } from "next-themes"
import { useEffect } from "react";
import { MoonIcon, SunIcon } from 'lucide-react';
import Link from "next/link";

function Header(){
    const { theme, setTheme } = useTheme()

    useEffect(()=>{
        setTheme("dark");
    })
    
    return (
        <header className="flex flex-row justify-between m-5 h-11">
            <Link href="/">
                <div className="group">
                    <h1 className="text-2xl group-hover:text-zinc-600 transition-colors duration-200">Quizz<strong className=" text-cyan-900 group-hover:text-cyan-500 transition-colors duration-200">Hub.</strong></h1>
                </div>
            </Link>      
        </header>
    )
}

export default Header