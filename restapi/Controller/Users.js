const fs = require("fs");
//const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const users = data.users;

exports.createProducts = (req, res) => {
	console.log(req.body);
	users.push(req.body);
	res.send(req.body);
};

exports.readallProducts = (req, res) => {
	res.json(data.users);
};

exports.getProduct = (req, res) => {
	const id = +req.params.id;
	const product = users.find((p) => p.id === id);
	res.json(product);
};

exports.replaceProduct = (req, res) => {
	const id = +req.params.id;
	const productIndex = users.findIndex((p) => p.id === id);
	users.splice(productIndex, 1, { ...req.body, id: id });
	res.status(201).json();
};

exports.updateProduct = (req, res) => {
	const id = +req.params.id;
	const productIndex = users.findIndex((p) => p.id === id);
	let product = users[productIndex];
	users.splice(productIndex, 1, { ...product, ...req.body });
	res.status(201).json();
};

exports.deleteProduct = (req, res) => {
	const id = +req.params.id;
	const productIndex = users.findIndex((p) => p.id === id);
	const product = users[productIndex];
	users.splice(productIndex, 1);
	res.json(product);
};
