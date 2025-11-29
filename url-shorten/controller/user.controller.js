import hashPasswordSalt from '../utills/hash.js';
import { v4 as uuidv4 } from 'uuid';
import { signupPostrequestBodySchema, loginPostrequestBodySchema } from '../utills/request.valiadation.js';
import { z } from "zod";
import { checkUserExist, createUser } from '../services/users.service.js';
import createJwtToken from '../utills/token.js'

export const signupUser = async (req, resp) => {
    try {


        const validationResult = await signupPostrequestBodySchema.safeParseAsync(req.body);
        if (validationResult.error) {
            const formatted = z.treeifyError(validationResult.error);

            return resp.status(400).json({ error: formatted });
        }
        const { firstname, lastname, email, password } = validationResult.data;


        const existingUser = await checkUserExist(email);

        if (existingUser.length > 0) return resp.status(400).json({ error: `user already exist` });
        const { salt, hashPassword } = hashPasswordSalt(password);

        const saveData = {
            id: uuidv4(),
            first_name: firstname,
            last_name: lastname,
            email: email,
            password: hashPassword,
            salt: salt
        };

        await createUser(saveData);
        return resp.status(201).json({ message: `insert` });
    } catch (error) {
        return resp.status(500).json({ error: "Internal server error" });

    }
}

export const loginUser = async (req, resp) => {
    try {


        const validationResult = await loginPostrequestBodySchema.safeParseAsync(req.body);
        if (validationResult.error) {
            const formatted = z.treeifyError(validationResult.error);

            return resp.status(400).json({ error: formatted });
        }
        const { email, password } = validationResult.data;
        const existingUser = await checkUserExist(email);
        if (existingUser.length == 0) return resp.status(400).json({ error: `user not exist` });
        const user = existingUser[0];

        const { hashPassword } = hashPasswordSalt(password, user.salt);

        if (hashPassword != user.password) {
            return resp.status(401).json({ message: `invalid credential` });
        }
        const jwtToken = await createJwtToken({ id: user.id });
        return resp.status(200).json({ message: `suvessfully login`, token: jwtToken });
    } catch (error) {
        console.error(error);

        return resp.status(500).json({ error: "Internal server error" });

    }
}
