const express=require('express');
const sum =(a,b)=>{
    console.log(a+b);
}
console.log("hello")
const server =express();
server.listen(8080);
exports.sum=sum
