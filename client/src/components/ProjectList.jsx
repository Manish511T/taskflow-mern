import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  if (projects.length === 0) {
    return <p>No projects yet</p>;
  }

  return (
    <ul>
      {projects.map((project) => (
        <li key={project._id}>
          <Link to={`/projects/${project._id}`}>
            <strong>{project.name}</strong>
          </Link>
          {" "} - {project.description}
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
