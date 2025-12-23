import {useParams} from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { getListByProject } from "../services/listService";
import ListColumn from "../components/ListColumn";
import CreateList from "../components/CreateList";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [lists, setLists] = useState([]);

  const loadLists = useCallback(async () => {
    const data = await getListByProject(projectId);
    setLists(data);
  }, [projectId]);

  useEffect(() => {
    loadLists();
  }, [loadLists]);

  return (
    <div>
      <h2>Project Board</h2>

      <CreateList projectId={projectId} onCreated={loadLists} />

      <div style={{ display: "flex", gap: "16px" }}>
        {lists.map(list => (
          <ListColumn key={list._id} list={list} />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;