export var correct_answer = 0;

export default function handler(req, res) {
    const { method } = req;
    const { answered, answer } = req.body;

    switch(method) {
        case "GET":
            correct_answer = 0;
            res.status(200).json({ correct_answer: correct_answer });
            break;
        case "POST":
            if (answered === answer) {
                correct_answer += 1;
                
            }
            res.status(200).json({ correctAnswerCount: correct_answer });
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}