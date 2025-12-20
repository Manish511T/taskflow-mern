const ProjectList = ({ projects }) => {
    if (projects.length === 0) {
        return <p>No projects yet</p>;
    }

    return (
        <ul>
            {projects.map((project) => (
                <li key={project._id}>
                    <strong>{project.name}</strong> – {project.description}
                </li>
            ))}
        </ul>
    );
};

export default ProjectList;