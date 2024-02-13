"use client"
import { useTheme } from "next-themes"
import { Moon, Sun } from 'lucide-react';

function Header(){
    const { theme, setTheme } = useTheme()
    let themeText = theme === "dark" ? <Sun /> : <Moon />;

    return (
        <header className="flex flex-row justify-between m-5 h-11">
            <h1 className="text-2xl">Quizz</h1>
            <div className="group flex flex-col justify-center items-center">
                <button className="transition-all duration-200 ease-in-outtext-white" onClick={() => {
                    let currentTheme = theme === "dark" ? "light" : "dark";
                    setTheme(currentTheme)
                }}>{themeText}</button> 
                <p className="text-[1px] group-hover:text-[10px] transition-all duration-200 ease-in-out opacity-0 group-hover:opacity-100">{theme}</p>
            </div>
            
        </header>
    )
}

export default Header