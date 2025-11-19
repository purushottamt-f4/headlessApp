const fs = require("fs");

/* basic */
console.log("helow f4 node");
console.log(20+300);
// console.log("Primitive Data Types ======= ");
// let str = "purushottam";
// let empID = 25.6789;
// let big = 123456789012345678901234567890n;
// let isActive = true;
// let a;
// let data = null;
// let id = Symbol("id");
// console.log(str);
// console.log(empID);
// console.log(big);
// console.log(isActive);
// console.log(a);
// console.log(data);
// console.log(id);
// console.log("function ======= ");
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.trim());
// console.log(str.includes("node"));
// console.log(str.split(" "));

// console.log(empID.toFixed(2));
// console.log(empID.toString());
// console.log(parseInt("100"));
// console.log(parseFloat("12.34"));
// console.log(Number.isInteger(empID));

console.log("NON Primitive Data Types ======= ");
let user = { id: 1, name: "John", role: "admin" };
let users = [
  { id: 1, name: "A", role: "admin" },
  { id: 2, name: "B", role: "user" },
  { id: 3, name: "C", role: "admin" }
];
function greet() {
  console.log("Hello");
}
let now = new Date();
let pattern = /abc/;
let map = new Map();
let set = new Set([1, 2, 3]);
console.log(user);
console.log(users);
greet();
console.log(now);
console.log(pattern);
  console.log(Object.keys(user));      
  console.log(Object.values(user));    
  console.log(Object.entries(user));   
  console.log(user.hasOwnProperty("id"));
  
  const newUser = Object.assign({}, user, { status: "active" });
  console.log(Object.entries(newUser));      
users.push({ id: 4, name: "D", role: "user" }); 
console.log(users); 
users.pop();                                      
console.log(users); 
const admins = users.filter(u => u.role === "admin"); 
console.log(admins); 
users.forEach(u => console.log(u.name));             
const names = users.map(u => u.name);                
console.log(names); 

  console.log(
    now.getFullYear(),
    now.getMonth() + 1  );

// console.log("Special Node.js types ======= ");

// let buf = Buffer.from("Hello");
// let stream = fs.createReadStream("file.txt");
// let err = new Error("Something went wrong");
//console.log(buf);
//console.log(stream);
//console.log(err);

