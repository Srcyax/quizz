"use client"

import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between m-10">
      <h1 className="text-4xl mb-24">Welcome to the Quizz!</h1>
          <div className="bg-black dark:bg-blacklight rounded-md group flex flex-col justify-center hover:p-2 transition-all duration-200">
              <h1 className="text-center text-white my-2 group-hover:text-lg transition-all duration-200">What is your nickname?</h1>
              <input id="name" className="bg-white text-black rounded-sm w-64 group-hover:w-60 h-6 m-5 transition-all" type="text" required placeholder="Quizz User" />
          </div>

          <Link className="flex justify-center" href="/hub">
              <button onClick={() => {
                localStorage.clear();

                const name = document.getElementById("name") as HTMLInputElement;
                localStorage.setItem("name", name?.value);
              }} className="border-2 border-blacklight hover:bg-blacklight hover:text-white hover:text-[15px] p-2 rounded-lg m-3 transition-all">Submit</button>
          </Link>
    </main>
  );
}
