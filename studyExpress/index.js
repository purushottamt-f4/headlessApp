import express from 'express';
import { router } from './routers/book.router.js';
import { loggerMiddelware } from './middleware/loggerMiddleware.js';
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(loggerMiddelware);
app.use('/books',router);
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
