const express = require("express")
const mongoose = require("mongoose")

app = express();


const PORT = process.env.PORT || 3000

// mongoose.connect("mongodb://127.0.0.1:27017/Exam")
//  mongodb+srv://reza:<password>@mongodb.yylnqxf.mongodb.net/test

mongoose.connect("mongodb+srv://reza:a19941994m@mongodb.yylnqxf.mongodb.net/Exam")


const QuizSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    Sid:{
        type: String,
        required: true
    }

    
       
})

const QuizModel  = mongoose.model("Quiz", QuizSchema)

app.get("/", (req,res,next) => {

    const S1 = QuizModel({
        name : "Mohammad Reza Goodarzvand Chegini",
        Sid : "300354368"
    })

    QuizModel.insertMany(S1)

    res.send("<h2> Document add </h2>")

})


app.listen(PORT, () => {
    console.log("Server is running " + PORT);
})