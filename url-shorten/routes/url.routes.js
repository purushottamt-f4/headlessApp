import express from 'express';
import { createShortUrl,getShortUrl,getShortUrlList,removeShortUrl } from '../controller/url.controller.js'; 
const router = express.Router();

router.route('/postUrl').post(createShortUrl);

router.route('/:shortenUrl').get(getShortUrl);

router.route('/user/:user_id').get(getShortUrlList);

router.route('/').delete(removeShortUrl);

export const urlRouter = router;