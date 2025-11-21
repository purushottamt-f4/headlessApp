import { createServer } from 'http';
const arg = process.argv;
console.log('------'+arg[2]);
const ports=arg[2];
createServer((req,resp)=>{
resp.setHeader("content-type","application/json")
resp.end("port is"+ports);

}).listen(ports);