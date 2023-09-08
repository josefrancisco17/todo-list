import express from "express";
import bodyParser from "body-parser"

let app = express()
const port = 3000

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));

let list = []

app.get("/", (req,res) => {
    res.render("index.ejs")                                                     
})

app.post("/", (req,res) => {
    list.push(req.body["text"])
    res.render("index.ejs", {list: list, listlength: list.length})
})

app.listen(port, function() {
    console.log("[INFO] Server is up and running in port " + port)
})

