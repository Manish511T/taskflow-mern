import Task from "../models/Task.js";
import List from "../models/List.js";
import checkProjectOwnership from "../utils/checkProjectOwnership.js";


// create task in list

export const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        const { listId } = req.params;

        const list = await List.findById(listId);
        if (!list) {
            return res.status(400).json({ message: "List not found" });
        }
        const project = await checkProjectOwnership(list.project, req.userId);
        if (!project) {
            return res.status(403).json({ message: "Not authorized" });
        }

        const task = await Task.create({
            title,
            description,
            list: listId,
        });

        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};


// Get tasks of a list

export const getTasksByList = async (req, res) => {
    try {
        const { listId } = req.params;

        const list = await List.findById(listId);
        if (!list) {
            return res.status(404).json({ message: "List not found" });
        }

        const project = await checkProjectOwnership(list.project, req.userId);
        if (!project) {
            return res.status(403).json({ message: "Not authorized" });
        }

        const tasks = await Task.find({ list: listId });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};


// Update task

export const updateTask = async (req, res) => {
    try {
        const { taskId } = req.params;
        const { title, description, status } = req.body;

        const task = await Task.findById(taskId);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        const list = await List.findById(task.list);
        const project = await checkProjectOwnership(list.project, req.userId);

        if (!project) {
            return res.status(403).json({ message: "Not authorized" });
        }

        if (title !== undefined) task.title = title;
        if (description !== undefined) task.description = description;
        if (status !== undefined) task.status = status;

        const updatedTask = await task.save();
        res.status(200).json(updatedTask);
    }catch(error){
        res.status(500).json({message:"Server error"});
    }
};

// Delete Task

export const deleteTask = async (req, res)=>{
    try{
        const { taskId } = req.params;
        const { title, description, status } = req.body;

        const task = await Task.findById(taskId);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        const list = await List.findById(task.list);
        const project = await checkProjectOwnership(list.project, req.userId);

        if (!project) {
            return res.status(403).json({ message: "Not authorized" });
        }

        await task.deleteOne();
        res.status(200).json(deleteTask);
    }catch(error){
        res.status(500).json({message:"Server error"});
    }
};

