import express from "express";
import authmiddleware from "../middlewares/authMiddleware.js";
import { createProject, getMyProjects } from "../controllers/projectController.js";

const router = express.Router();

router.post("/", authmiddleware,createProject);
router.get("/", authmiddleware, getMyProjects);

export default router;
