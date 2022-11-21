const express = require("express");
const path = require("path");
const  con  = require("./scripts/db");
const route = require('./scripts/route');
const api = require('./scripts/api');

const app = express();
let print = console.log;

// app.use(express.static(path.join(__dirname, "public")));
//serve static files

app.use(express.static('public'));

app.get("/", (req, res) => { 
    res.sendFile("index.html");
});

app.listen(3000, () => {
    print("Server started on port 3000");
});