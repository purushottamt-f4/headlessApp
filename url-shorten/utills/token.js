import jwt from 'jsonwebtoken';
import { jwtPayload } from "./jwt.validation.js";

const jwt_secret = process.env.JWT_SECRET;

export default async function createJwtToken(payload) {
  const validationResult = jwtPayload.safeParse(payload);
  if (validationResult.error) throw new Error(z.treeifyError(validationResult.error));

  return jwt.sign({ payload }, process.env.JWT_SECRET);
}

export async function validateUserToken(token) {
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    return payload;
  } catch (error) {
    return null;
  }
}