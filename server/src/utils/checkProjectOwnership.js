import Project from "../models/Project.js";

const checkProjectOwnership = async (projectId, userId)=>{
    const project = await Project.findById(projectId);
    if(!project) return null;
    if(project.owner.toString() !== userId) return null;

    return project;
};

export default checkProjectOwnership;