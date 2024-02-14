const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')
const app = express();

var right_answers = 0;

app.use(cors())
app.use(bodyParser())

app.listen(3001, () =>{
    console.log("server running");
})

app.get("/resetanswers", (req, res) => {
    right_answers = 0;
})

app.post("/quizzes", (req, res) => {
    if (req.body.answered === req.body.answer){
        right_answers += 1;
        res.send("correct: " + right_answers);
    }
    else{
        res.send("incorrect");
    }
})