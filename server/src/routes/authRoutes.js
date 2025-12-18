import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import authmiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", authmiddleware, (req,res)=>{
    res.json({
        message: "Protected route accessed",
        userId: req.userId,
    });
});

export default router;
