import { useParams } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { getListsByProject } from "../services/listService";
import ListColumn from "../components/ListColumn";
import CreateList from "../components/CreateList";


const ProjectDetail = () => {
  const { projectId } = useParams();
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadLists = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getListsByProject(projectId);
      setLists(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [projectId]);

  useEffect(() => {
    loadLists();
  }, [loadLists]);

  return (
    <div className="board-container">
      {/* Header */}
      <header className="board-header">
        <h2 className="board-title">Project Board</h2>
      </header>

      {/* Create List */}
      <div className="create-list-wrapper">
        <CreateList projectId={projectId} onCreated={loadLists} />
      </div>

      {/* Board */}
      {loading ? (
        <p className="loading-text">Loading lists...</p>
      ) : (
        <div className="board-columns">
          {lists.length === 0 ? (
            <p className="empty-text">
              No lists yet. Create your first list 🚀
            </p>
          ) : (
            lists.map((list) => (
              <ListColumn key={list._id} list={list} />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
