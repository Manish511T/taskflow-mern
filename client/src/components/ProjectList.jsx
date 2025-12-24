import { Link } from "react-router-dom";


const ProjectList = ({ projects }) => {
  if (!projects || projects.length === 0) {
    return (
      <div className="empty-projects">
        <p>No projects yet</p>
        <span>Create your first project to get started 🚀</span>
      </div>
    );
  }

  return (
    <div className="project-grid">
      {projects.map((project) => (
        <Link
          to={`/projects/${project._id}`}
          key={project._id}
          className="project-card"
        >
          <h3 className="project-name">{project.name}</h3>
          <p className="project-description">
            {project.description || "No description provided"}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default ProjectList;
