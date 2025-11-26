import { createServer } from 'http';
import { message } from './backend/controller/landing.js';
import { write,readFile } from 'fs';
import { json } from 'stream/consumers';
import { stringify } from 'querystring';

let body= message;
let names = [
  { name: "puru", role: "dev" },
  { name: "John", role: "dev" }
];
createServer((req ,resp)=>{
  console.log('here');

  let url = req.url;
  if (url=='/about') {
  //  resp.write(url);
  

  readFile('./backend/view/about.html', 'utf-8', (err, data) => {
    if (err) {
  console.log("here1", err);   // show full error
     // resp.writeHead(500, { "Content-Type": "text/plain" });
      resp.write(`Error in reading`);
      resp.end();
      return;
    }

    console.log("here2");

    resp.writeHead(200, { "Content-Type": "text/html" });
    resp.write(data);
    resp.end();
          return;

  });

}
if(url == '/home'){
resp.end('This Home page ');


}

// resp.write(`
//     `+body+`
//     `);
//resp.write(JSON.stringify(names));

//resp.end('helloe f4 and titan ' + url);
}).listen(4200);

