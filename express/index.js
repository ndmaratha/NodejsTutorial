const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const express = require("express");
const server = express();

//built in middleware
server.use(express.json())
server.use(express.static('public'))
//server.use(express)

//middleware
server.use((req, res, next) => {
	console.log(req.method, req.hostname);
	next();
});
const auth = (req,res, next) => {
	//console.log(req.query);
	if (req.body.password == 123) {
		next();
	} else {
		res.send("unauthorised");
	}
};

server.get("/", auth,(req, res) => {
	res.send("Radhey Radhey");
});
server.post("/", (req, res) => {
	res.send("post");
});
server.patch("/", (req, res) => {
	res.send("patch");
});
server.delete("/", (req, res) => {
	res.send("delete");
});

server.listen(8080, () => {
	console.log("server working successfully");
});
