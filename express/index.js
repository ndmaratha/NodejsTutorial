const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const express = require("express");
const server = express();
server.get("/", (req, res) => {
	res.send("Radhey Radhey");
});
server.listen(8080, () => {
	console.log("server working successfully");
});
