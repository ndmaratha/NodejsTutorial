require('dotenv').config()
const express = require("express");
const ProductsRouter=require('./Routes/Project')
const userRouter=require('./Routes/User')

console.log(process.env.DBPASSWORD)

const server = express();
server.use(express.json());

server.use('/products',ProductsRouter.Router);
server.use('/users',userRouter.Router);

server.listen(8080, () => {
	console.log("server working successfully");
});
