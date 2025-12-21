import Task from "../models/Task.js";
import List from "../models/List.js";
import checkProjectOwnership from "../utils/checkProjectOwnership.js";


// create task in list

export const createTask = async (req, res)=>{
    try{
        const{title, description} = req.body;
        const{listId} = req.params;

        const list = await List.findById(listId);
        if(!list){
            return res.status(400).json({message:"List not found"});
        }
        const project = await checkProjectOwnership(list.project, req.userId);
        if(!project){
            return res.status(403).json({message: "Not authorized"});
        }

        const task = await Task.create({
            title,
            description,
            list: listId,
        });

        res.status(201).json(task);
    }catch(error){
        res.status(500).json({message:"Server error"});
    }
};


// Get tasks of a list

export const getTasksByList = async (req, res)=>{
    try{
        const {listId} = req.params;

        const list = await List.findById(listId);
        if(!list){
            return res.status(404).json({message:"List not found"});
        }

        const project = await checkProjectOwnership(list.project, req.userId);
        if(!project){
            return res.status(403).json({message: "Not authorized"});
        }

        const tasks = await Task.find({list:listId});
        res.status(200).json(tasks);
    }catch(error){
        res.status(500).json({message:"Server error"});
    }
};

