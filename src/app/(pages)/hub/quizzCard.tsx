import Link from "next/link"
import { Skeleton } from "@/components/ui/skeleton"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { useState } from "react"

export default function QuizzCard({image, title, quizzPage} : {image : string, title : string, quizzPage : string}){
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true)
    }
    
    return (
        <Link href={quizzPage}>
            <div className="flex flex-col justify-center items-center bg-black dark:bg-zinc-900 rounded-lg w-60 hover:p-4 p-5 opacity-50 hover:opacity-100 transition-all duration-200">
                {
                    !imageLoaded ? <Skeleton className="m-5 w-44 h-44 rounded-full"/> : null
                }
                <LazyLoadImage beforeLoad={() => handleImageLoad()} className={imageLoaded ? "m-5 w-44 h-44 rounded-full" : ""} src={image} alt="quizz_image"/>
                <h1 className="text-zinc-100">{title}</h1>
            </div>
        </Link>
    )
}