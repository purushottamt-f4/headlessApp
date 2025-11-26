import { appendFileSync } from "node:fs";
import path from "node:path";

const logFile = path.resolve("loggerBook.txt"); 


export const loggerMiddelware = function(req,resp,next){
    console.log(`inside middleware`);
    const log = `\n[${Date.now()}] ${req.method} : ${req.url}`;
    appendFileSync(logFile,log,'utf-8');
        console.log(`inside middleware 1`);

    next();
}