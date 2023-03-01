const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const express = require("express");
const server = express();

//built in middleware
server.use(express.json());

//server.use(express)
//create api this can be form CRUD (Create)
server.post("/products", (req, res) => {
	console.log(req.body);
	products.push(req.body);
	res.send(req.body);
});

//read API CRUD (Read)
server.get("/products", (req, res) => {
	res.json(data);
});

//read api (read)
server.get("/products/:id", (req, res) => {
	const id = +req.params.id;
	const product = products.find((p) => p.id === id);
	res.json(product);
});

// Update This does not overwrite anything
server.put("/products/:id", (req, res) => {
	const id = +req.params.id;
	const productIndex = products.findIndex((p) => p.id === id);
	products.splice(productIndex, 1, { ...req.body, id: id });
	res.status(201).json();
});

//Update this update and takes previous data
server.patch("/products/:id", (req, res) => {
	const id = +req.params.id;
	const productIndex = products.findIndex((p) => p.id === id);
	let product =products[productIndex]
	products.splice(productIndex, 1,{...product,...req.body});
	res.status(201).json();
});

//delete
server.delete("/products/:id", (req, res) => {
	const id = +req.params.id;
	const productIndex = products.findIndex((p) => p.id === id);
	const product=products[productIndex];
	products.splice(productIndex, 1);
	res.json(product);
});

server.listen(8080, () => {
	console.log("server working successfully");
});
