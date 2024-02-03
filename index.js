import express from "express";
import path from "path";
import {randomRoll,determineNum,decision} from "./function.js";

const app = express();

app.use(express.static(path.join(path.resolve(),"public")));

app.set("view engine","ejs");

app.get("/", (req,res)=>{
    res.render("index", {"dice1":"one.jpg", "dice2":"six.jpg", "result":""})
})

app.post("/", (req,res)=>{
    let num1 = randomRoll();
    let num2 = randomRoll();

    let dice1 = determineNum(num1);
    let dice2 = determineNum(num2);
    let result = decision(num1,num2);
    
    res.render("index", {"dice1":dice1, "dice2":dice2, "result":result});
})

app.listen(5000, ()=>{
    console.log("Server is working");
})