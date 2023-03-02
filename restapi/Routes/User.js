const express = require("express");
const {
	createProducts,
	readallProducts,
	getProduct,
	updateProduct,
	replaceProduct,
	deleteProduct,
} = require("../Controller/Users");
const Router = express.Router();
Router.post("/", createProducts)

	.get("/", readallProducts)

	.get("/:id", getProduct)

	.put("/:id", replaceProduct)

	.patch("/:id", updateProduct)

	.delete("/:id", deleteProduct);

exports.Router = Router;
