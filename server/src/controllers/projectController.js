import Project from "../models/Project.js";

export const createProject = async (req, res)=>{
    try{
        const {name, description} = req.body;
        if(!name){
            return res.status(400).json({message:"Project name is required"});
        }

        const project = await Project.create({
            name,
            description,
            owner: req.userId, // where authorization defined
        });

        res.status(201).json({message:"Server error"});
    }catch(error){
        res.status(500).json({message:"Server error"});
    }
};

export const getMyProjects = async (req, res)=>{
    try{
        const projects = await Project.find({owner: req.userId});
        res.status(200).json(projects);
    }catch(error){
        res.status(500).json({message:"Server error"});
    }
};