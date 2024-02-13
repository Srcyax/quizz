import Link from "next/link"

export default function QuizzCard({image, title, quizzPage} : {image : string, title : string, quizzPage : string}){
    return (
        <Link href={quizzPage}>
            <div className="flex flex-col justify-center items-center bg-black dark:bg-blacklight rounded-lg w-60 hover:p-4 p-5 opacity-50 hover:opacity-100 transition-all duration-200">
                <img className="m-5" width={150} src={image} alt="quizz_image" />
                <h1 className="text-white">{title}</h1>
            </div>
        </Link>
    )
}