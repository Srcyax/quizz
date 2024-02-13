
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between m-36">
      <div className="bg-zinc-600 dark:bg-zinc-700 rounded-sm flex flex-col justify-center hover:p-2 transition-all duration-200">
          <h1 className="text-center text-white my-2">What is your nickname?</h1>
          <input className="bg-zinc-900 dark:bg-white text-white dark:text-black rounded-md w-64 h-6 m-5 transition-colors" type="text" />
      </div>
    </main>
  );
}
