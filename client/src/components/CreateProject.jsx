import { useState } from "react";
import { createProject } from "../services/projectService";

const CreateProject = ({ onProjectCreated }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Project name is required");
      return;
    }

    try {
      setLoading(true);
      const newProject = await createProject({
        name: name.trim(),
        description: description.trim(),
      });

      onProjectCreated(newProject);
      setName("");
      setDescription("");
    } catch (err) {
      setError(err.message || "Failed to create project");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-project-card">
      <h3 className="create-project-title">Create New Project</h3>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit} className="create-project-form">
        <div className="input-group">
          <label>Project Name</label>
          <input
            type="text"
            placeholder="e.g. Task Management App"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
          />
        </div>

        <div className="input-group">
          <label>Description</label>
          <textarea
            placeholder="Short description of your project"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={loading}
            rows={3}
          />
        </div>

        <button className="create-btn" type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Project"}
        </button>
      </form>
    </div>
  );
};

export default CreateProject;
