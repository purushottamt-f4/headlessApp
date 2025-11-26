import express from 'express';
import { getBook,getBookById,addBook,removeBookById } from '../controller/book-controller.js';
const port = 3000;
export const router = express.Router();

router.get('/',getBook);

router.get('/:id',getBookById);

router.post('/',addBook)

router.delete('/:id',removeBookById);

