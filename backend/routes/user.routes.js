import express from "express";
import { createUser, getUser } from "../contollers/user.controller.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/login", getUser);

export default router;
