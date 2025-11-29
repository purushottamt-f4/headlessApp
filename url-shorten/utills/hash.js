import { createHmac, randomBytes } from 'crypto';

export default function hashPasswordSalt(password, userSalt = undefined) {
    const salt = userSalt ?? randomBytes(256).toString('hex');
    const hashPassword = createHmac('sha256', salt).update(password).digest('hex');
    return { salt, hashPassword };
}