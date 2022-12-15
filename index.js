const express = require("express");
const path = require("path");
const con = require("./scripts/db");
const route = require('./scripts/route');
const api = require('./scripts/api');

const app = express();
const msgCont = new api.messageController();

let print = console.log;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

const getPage = (url) => {
    return path.join(path.join(__dirname, "public/", url));
}
//serve static files

// app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile("index.html");
});

app.get("/about", (req, res) => {
    print("about");
    res.sendFile(getpage("/about.html"));
});

app.post("/send-msg",  async(req, res) =>{
    api.messageController.saveMessage(req, res);
});

app.listen(3000, () => {
    print("Server started on port 3000");
});