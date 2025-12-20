import express from "express";
import authmiddleware from "../middlewares/authMiddleware.js";
import { 
    createProject,
    getMyProjects,
    getProjectById,
    updateProject,
    deleteProject,
 } from "../controllers/projectController.js";

const router = express.Router();

router.post("/", authmiddleware,createProject);
router.get("/", authmiddleware, getMyProjects);

router.get("/:id", authmiddleware, getProjectById);
router.put("/:id", authmiddleware, updateProject);
router.delete("/:id", authmiddleware, deleteProject);

export default router;
