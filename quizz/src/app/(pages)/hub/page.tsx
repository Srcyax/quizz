"use client"

import { useEffect, useState } from "react"
import QuizzCard from "./quizzCard";

export default function Hub(){
    const [name, getName] = useState("");

    useEffect(() =>{
        getName(localStorage.getItem("name") + "");
    }) 

    return (
        <main className="flex flex-col items-center justify-between">
            <h1 className="text-2xl text-center text-white rounded-lg p-5 transition 1s bg-black dark:bg-blacklight mb-20">Hello, <strong>{name !== "" ? name : "Quizz User"}</strong></h1>
            <div>
                <h1 className="text-center m-5">Quizzes</h1>
                <div className="grid grid-cols-3 grid-rows-none place-items-center gap-10 m-10">
                    <QuizzCard image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAAAMFBMVEXMzMyZmZmkpKSxsbHHx8e+vr6cnJygoKC7u7vGxsapqam2traurq6ioqLAwMCmpqai1/oDAAACc0lEQVR4nO2W25ajIBBFw61ARPj/v50SASGaaeyV1U9nv0SMFqeu+HoBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATOPcVM2v8ipmKFrJekiiEspMkSmbOjBGqXMVqRazHDWWJ/PJQlmqytBhl+WOhPr/bkdpzbpS1yHxNk+4dLEo0WZHfPciuBba7RNWc/h/Rn/KVSMWM3pebsE7HJMR8klVOW5XlznTugoueIOgnM576qPohvqug7KQUaV6WtZaaGFVrqqxs/uXUnj3Bm+QQLNTdfKVspoqR/V+88vmXU/uovM7a8kO6ZBUpe7Vll1Q266Q1WTSkqzo1ePdI1ibWsJH1plgvIkMffg6T2YNm9SdZvH/0VmwhBye2IG2TvXOR1eZDjkTzTomte5wVvTRdPW+y2nyg3S3Ona4PhPd3pmSxm9YtujSVbq2zliIrcE79zQ5NFgtJRmvDc8HkVXnAX/I+J2sJ4XAs7IH/KIs79JrCTpYJquq335DVyNWpuyTKtxfuijddSsfs+TNdEn9ZW41cnV3Jj256cVcl1131nsW+5CfG8g+y1j0Hqm44qHCC7ib2razYdc5Nm0zJCrYazvZux+krd2EYevNN1mbL4zGXVZ16ZzYfyqrHRBEUcyedg72QK9de66TJ8lXzMXmr1fTg8Blk8WZ1QLjDPp/6eh2PapdFumsamyzuVHkMiEMPT9bIXf7kqB5lLbabg5wu2Q3XQh2k/lKQZ22ZMpbtoSPyksTUd8i9LI54IpKhHanrxp+BQ6H6kgpN72nsSl6r/b1zGSyfaN/9dgUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP6Qf81qDtKbc7b4AAAAAElFTkSuQmCC"
                    title="Quizz de sexo" quizzPage="/"/>
                    <QuizzCard image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAAAMFBMVEXMzMyZmZmkpKSxsbHHx8e+vr6cnJygoKC7u7vGxsapqam2traurq6ioqLAwMCmpqai1/oDAAACc0lEQVR4nO2W25ajIBBFw61ARPj/v50SASGaaeyV1U9nv0SMFqeu+HoBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATOPcVM2v8ipmKFrJekiiEspMkSmbOjBGqXMVqRazHDWWJ/PJQlmqytBhl+WOhPr/bkdpzbpS1yHxNk+4dLEo0WZHfPciuBba7RNWc/h/Rn/KVSMWM3pebsE7HJMR8klVOW5XlznTugoueIOgnM576qPohvqug7KQUaV6WtZaaGFVrqqxs/uXUnj3Bm+QQLNTdfKVspoqR/V+88vmXU/uovM7a8kO6ZBUpe7Vll1Q266Q1WTSkqzo1ePdI1ibWsJH1plgvIkMffg6T2YNm9SdZvH/0VmwhBye2IG2TvXOR1eZDjkTzTomte5wVvTRdPW+y2nyg3S3Ona4PhPd3pmSxm9YtujSVbq2zliIrcE79zQ5NFgtJRmvDc8HkVXnAX/I+J2sJ4XAs7IH/KIs79JrCTpYJquq335DVyNWpuyTKtxfuijddSsfs+TNdEn9ZW41cnV3Jj256cVcl1131nsW+5CfG8g+y1j0Hqm44qHCC7ib2razYdc5Nm0zJCrYazvZux+krd2EYevNN1mbL4zGXVZ16ZzYfyqrHRBEUcyedg72QK9de66TJ8lXzMXmr1fTg8Blk8WZ1QLjDPp/6eh2PapdFumsamyzuVHkMiEMPT9bIXf7kqB5lLbabg5wu2Q3XQh2k/lKQZ22ZMpbtoSPyksTUd8i9LI54IpKhHanrxp+BQ6H6kgpN72nsSl6r/b1zGSyfaN/9dgUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP6Qf81qDtKbc7b4AAAAAElFTkSuQmCC"
                    title="Quizz de sexo" quizzPage="/"/>
                    <QuizzCard image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAAAMFBMVEXMzMyZmZmkpKSxsbHHx8e+vr6cnJygoKC7u7vGxsapqam2traurq6ioqLAwMCmpqai1/oDAAACc0lEQVR4nO2W25ajIBBFw61ARPj/v50SASGaaeyV1U9nv0SMFqeu+HoBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATOPcVM2v8ipmKFrJekiiEspMkSmbOjBGqXMVqRazHDWWJ/PJQlmqytBhl+WOhPr/bkdpzbpS1yHxNk+4dLEo0WZHfPciuBba7RNWc/h/Rn/KVSMWM3pebsE7HJMR8klVOW5XlznTugoueIOgnM576qPohvqug7KQUaV6WtZaaGFVrqqxs/uXUnj3Bm+QQLNTdfKVspoqR/V+88vmXU/uovM7a8kO6ZBUpe7Vll1Q266Q1WTSkqzo1ePdI1ibWsJH1plgvIkMffg6T2YNm9SdZvH/0VmwhBye2IG2TvXOR1eZDjkTzTomte5wVvTRdPW+y2nyg3S3Ona4PhPd3pmSxm9YtujSVbq2zliIrcE79zQ5NFgtJRmvDc8HkVXnAX/I+J2sJ4XAs7IH/KIs79JrCTpYJquq335DVyNWpuyTKtxfuijddSsfs+TNdEn9ZW41cnV3Jj256cVcl1131nsW+5CfG8g+y1j0Hqm44qHCC7ib2razYdc5Nm0zJCrYazvZux+krd2EYevNN1mbL4zGXVZ16ZzYfyqrHRBEUcyedg72QK9de66TJ8lXzMXmr1fTg8Blk8WZ1QLjDPp/6eh2PapdFumsamyzuVHkMiEMPT9bIXf7kqB5lLbabg5wu2Q3XQh2k/lKQZ22ZMpbtoSPyksTUd8i9LI54IpKhHanrxp+BQ6H6kgpN72nsSl6r/b1zGSyfaN/9dgUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP6Qf81qDtKbc7b4AAAAAElFTkSuQmCC"
                    title="Quizz de sexo" quizzPage="/"/>
                </div>
            </div>
        </main>
    )
}