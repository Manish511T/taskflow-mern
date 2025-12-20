import { useEffect, useState } from "react";
import { getProjects } from "../services/projectService";
import { removeToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import CreateProject from "../components/CreateProject";
import ProjectList from "../components/ProjectList";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, []);

  const handleLogout = () => {
    removeToken();
    navigate("/login");
  };

const handleProjectCreated = async () => {
  const data = await getProjects();
  setProjects(data);
};

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>

      <CreateProject onProjectCreated={handleProjectCreated} />
      <ProjectList projects={projects} />
    </div>
  );
};

export default Dashboard;
