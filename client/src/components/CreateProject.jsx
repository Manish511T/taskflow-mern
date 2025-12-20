import { useState } from "react";
import { createProject } from "../services/projectService";

const CreateProject = ({ onProjectCreated }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("")
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const newProject = await createProject({ name, description });
            onProjectCreated(newProject);
            setName("");
            setDescription("");

            console.log("create project:", newProject);
        } catch (error) {
            setError(error.message);
        }
    };



    return (
        <div>
            <h3>Create Project</h3>
            {error && <p style={{ color: "red" }}>{error}</p>}

            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Project name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default CreateProject;