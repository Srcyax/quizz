import { correct_answer } from "../quizzes/index";

export default function handler(req, res) {
    const { method } = req;

    switch(method) {
        case "GET":
            res.send(correct_answer);
            break;
        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}