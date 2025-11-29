import { v4 as uuidv4 } from 'uuid';
import { z } from "zod";
import { checkUrlExistByUrl, checkUrlExistByShortUrl, createshortUrl, checkUrlExistByUser, checkUrlExistByUserShort, removeUrl } from '../services/url.service.js';
import { shortUrlPostrequestBodySchema } from '../utills/request.valiadation.js';
import { nanoid } from 'nanoid';
import { asyncHandler } from '../utills/async-handler.js';
export const createShortUrl = asyncHandler(async (req, resp) => {
    const validationResult = shortUrlPostrequestBodySchema.safeParse(req.body);
    if (validationResult.error) {
        const formatted = z.treeifyError(validationResult.error);

        return resp.status(400).json({ error: formatted });
    }

    const { user_id, target_url } = validationResult.data;


    const existingRedirection = await checkUrlExistByUrl(target_url);

    const code = nanoid(8);

    if (existingRedirection.length > 0) return resp.status(400).json({ error: `user already exist` });
    const saveData = {
        id: uuidv4(),
        code: code,
        target_url: target_url,
        user_id: user_id
    };
    await createshortUrl(saveData);
    return resp.status(201).json({ message: `short url created` });
});
export const getShortUrl = asyncHandler(async (req, resp) => {

    const shortUrlData = await checkUrlExistByShortUrl(req.params.shortenUrl);
    if (shortUrlData.length == 0) return resp.status(400).json({ error: `url not exist` });
    const shortUrl = shortUrlData[0];
    return resp.redirect(shortUrl.target_url);


});


export const getShortUrlList = asyncHandler(async (req, resp) => {
    const shortUrlData = await checkUrlExistByUser(req.params.user_id);
    if (shortUrlData.length == 0) return resp.status(400).json({ error: `user_id not exist` });
    return resp.status(200).json({ message: `list of url`, url_data: shortUrlData });
});

export const removeShortUrl = asyncHandler(async (req, resp) => {
    const shortUrlData = await checkUrlExistByUserShort(req.body.user_id, req.body.shortUrl);
    if (shortUrlData.length == 0) return resp.status(400).json({ error: `user_id not exist` });
    await removeUrl(req.body.user_id, req.body.shortUrl);
    return resp.status(200).json({ message: `removed sucessfully` });

});
