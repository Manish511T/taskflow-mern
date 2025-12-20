import Project from "../models/Project.js";

export const createProject = async (req, res) => {
    try {
        const { name, description } = req.body;
        if (!name) {
            return res.status(400).json({ message: "Project name is required" });
        }

        const project = await Project.create({
            name,
            description,
            owner: req.userId, // where authorization defined
        });

        res.status(201).json({ project });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

export const getMyProjects = async (req, res) => {
    try {
        const projects = await Project.find({ owner: req.userId });
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// get single project
export const getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }

        if (project.owner.toString() !== req.userId) {
            return res.status(403).json({ message: "Not authorized" });
        }

        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// update project
export const updateProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);

        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }

        if (project.owner.toString() !== req.userId) {
            return res.status(403).json({ message: "Not authorized" });
        }

        project.name = req.body.name || project.name;
        project.description = req.body.description || project.description;

        const updateProject = await project.save();
        res.status(200).json(updateProject);
    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
};


// delete project

export const deleteProject = async (req, res)=>{
    try {
        const project = await Project.findById(req.params.id);

        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }

        if (project.owner.toString() !== req.userId) {
            return res.status(403).json({ message: "Not authorized" });
        }

        await project.deleteOne();
        res.status(200).json({message:"Project deleted"});
    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
};
