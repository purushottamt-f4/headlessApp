import { books } from "../models/books.js";
export const getBook = function(req,resp)
{
resp.json(books);
}

export const getBookById = function(req,resp)
{
const id = parseInt(req.params.id);
if(isNaN(id)) return resp.status(400).json({error:`id not found`});
const book = books.find((e)=>e.id ==id );
if(!book) return resp.status(400).json({error:`book not found`});
 return resp.json(book);
}

export const addBook = function(req,resp)
{
const {title,author}=req.body;
console.log (req.body);
if(!title || title==="" ) return resp.status(400).json({error:`Title not found`});
if(!author || author==="" ) return resp.status(400).json({error:`author not found`});

const id = books.length + 1;
const book ={id,title,author};
books.push(book);
return resp.status(201).json({message:`book inserted`});
}

export const removeBookById = function(req,resp)
{

    const id = parseInt(req.params.id);
if(isNaN(id)) return resp.status(400).json({error:`id not found`});
const bookDelete = books.findIndex((e)=>e.id ==id );
if(!bookDelete) return resp.status(400).json({error:`book not found`});
console.log(bookDelete);
books.splice(bookDelete,1);
return resp.json({message : `book deleted ${id}`});


}