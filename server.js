import { createServer } from 'http';
import { message } from './backend/controller/landing.js';
import { write } from 'fs';
import { json } from 'stream/consumers';
import { stringify } from 'querystring';

let body= message;
let names = [
  { name: "puru", role: "dev" },
  { name: "John", role: "dev" }
];
createServer((req ,resp)=>{
    resp.setHeader("Content-Type","application/json");
// resp.write(`
//     `+body+`
//     `);
resp.write(JSON.stringify(names));

resp.end('helloe f4 and titan ');
}).listen(4000);

