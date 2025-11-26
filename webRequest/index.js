import { appendFileSync } from "fs";
import { createServer } from "http";

const server = createServer((req , resp)=>{
const method = req.method;
const path = req.url;
console.log('hello from node '+method);

const log = `\n[${Date.now()}] ${method} : ${path}`;
appendFileSync('./webRequest/log.txt',log,'utf-8');

switch (method) {
    case 'GET':
        switch (path) {
            
            case '/':
                resp.writeHead('200').end('helllo from node js server');
                break;
            case '/contact-us':
                resp.writeHead('200').end('hey user my email is purushottam@fortune4.in and mobile number is 8655352098');                
                break;
            case '/tweet':
                resp.writeHead('200').end('tweet 1 \n tweet 2');                
                break;
        
            default:
            resp.writeHead('404').end('GET Not found'+path);

                break;
        }
        break;
    case 'POST':
        switch (path) {
            case '/tweet':
                resp.writeHead('201').end('tweet is submitted in server');                
                break;
        
            default:
                resp.writeHead('404').end('POST Not found'+path);
                break;
        }
        break;

    default:
        resp.writeHead('404').end('MEthod Not found'+path);
                break;

        break;
}
});

server.listen(2500,()=>{
    console.log('http server started')
})

//console.log('hellow from npm');