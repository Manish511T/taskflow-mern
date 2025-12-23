import List from "../models/List.js";
import checkProjectOwnership from "../utils/checkProjectOwnership.js";

// create list in project

export const createList = async (req, res)=>{
    try{
        const {name} = req.body;
        const {projectId} = req.params;

        if(!name){
            return res.status(400).json({message: "List name is required"});
        }

        const project = await checkProjectOwnership(projectId, req.userId);
        if(!project){
            return res.status(403).json({message:"Not authorized"});
        }

        const list = await List.create({
            name,
            project: projectId,
        });

        res.status(201).json(list);
    }catch(error){
        res.status(500).json({message:"Server error"});
    }
};


// Get lists of a project

export const getListByProject = async(req, res)=>{
    try{
        const{projectId} = req.params;

        const project = await checkProjectOwnership(projectId, req.userId);
        if(!project){
            return res.status(403).json({message:"Not authorized"});
        }

        const lists =  await List.find({project:projectId});
        res.status(200).json(lists);
    }catch(error){
        res.status(500).json({message:"Server error"});
    }
};

