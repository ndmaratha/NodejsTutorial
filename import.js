const n=require('./export');
//to import file 
const fs =require('fs');//this is a already given module for operating file
//const text=fs.readFile('read.txt',"utf-8");
const t1=performance.now();
fs.readFile('read.txt',"utf-8",(err,text)=>{
    console.log(text)
})
console.log(n.sum(10,4));
const t2=performance.now();
console.log(t2-t1)