import express from 'express';
import { userRouter } from './routes/user.routes.js';
import { urlRouter } from './routes/url.routes.js';
import { authenticationMiddleware } from './middleware/auth.middleware.js';
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 8000;
app.use(express.json());
app.use(authenticationMiddleware);
app.use('/users', userRouter);

app.use('/url', urlRouter);

// app.get('/',(req,resp)=>{
//    return resp.json(`new url shorten`);
// });

app.listen(PORT, () => {
    console.log(`servere is running on ${PORT}`);
});