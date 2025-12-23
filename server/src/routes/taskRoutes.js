import express from "express";
import authmiddleware from "../middlewares/authMiddleware.js";
import { updateTask, deleteTask } from "../controllers/TaskController.js";
import {
    createTask,
    getTasksByList,
} from "../controllers/TaskController.js";

const router = express.Router();

router.post("/:listId/tasks", authmiddleware, createTask);
router.get("/:listId/tasks", authmiddleware, getTasksByList);
router.put("/tasks/:taskId", authmiddleware, updateTask);
router.delete("/tasks/:taskId", authmiddleware, deleteTask);
export default router;