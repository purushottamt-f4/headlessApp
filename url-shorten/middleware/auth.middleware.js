import { validateUserToken } from "../utills/token.js"; 
export function authenticationMiddleware(req,resp,next){
const authHeaders=req.headers['authorization'];
    if(!authHeaders) return next();
    if(!authHeaders.startsWith('bearer')) return resp.status(400).json({message :`not contains auth berarirer`});
    const [_,token]=authHeaders.split('');
    const payload = validateUserToken(token);
    req.user=payload;
    next();
}

 