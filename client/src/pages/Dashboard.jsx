import { useEffect, useState } from "react";
import { getProjects } from "../services/projectService";
import { removeToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import CreateProject from "../components/CreateProject";
import ProjectList from "../components/ProjectList";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const data = await getProjects();
      setProjects(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleLogout = () => {
    removeToken();
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </header>

      {/* Content */}
      <div className="dashboard-content">
        <section className="create-project-section">
          <CreateProject onProjectCreated={fetchProjects} />
        </section>

        <section className="project-list-section">
          <h2 className="section-title">Your Projects</h2>

          {loading ? (
            <p className="loading-text">Loading projects...</p>
          ) : (
            <ProjectList projects={projects} />
          )}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
