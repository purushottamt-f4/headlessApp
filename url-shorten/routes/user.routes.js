import express from "express";
import { loginUser, signupUser } from "../controller/user.controller.js";

const router = express.Router();

router.route("/signup").post(signupUser);

router.route("/login").post(loginUser);

export const userRouter = router;
