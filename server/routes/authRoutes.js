import { Router } from "express";
import { register,login, forgotPassword, resetPassword, getMe } from "../models/authController.js";
import { get } from "mongoose";

const router = Router();

//specify the authentication andauthorization routes
router.post("/register", register);
router.post("/login", login);
router.get("/me", getMe);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);


export default router;





































































