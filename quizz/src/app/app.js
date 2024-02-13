const express = require("express");
const app = express();

app.listen(3001, () =>{
    console.log("server running");
})

app.get("/quizzes", (req, res) => {
    console.log("Hello");
})