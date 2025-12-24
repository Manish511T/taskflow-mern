import { useEffect, useState, useCallback } from "react";
import { getTasksByList } from "../services/taskService";
import TaskCard from "./TaskCard";
import CreateTask from "./CreateTask";


const ListColumn = ({ list }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadTasks = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getTasksByList(list._id);
      setTasks(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [list._id]);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return (
    <div className="list-column">
      {/* Column Header */}
      <div className="list-header">
        <h4 className="list-title">{list.name}</h4>
        <span className="task-count">{tasks.length}</span>
      </div>

      {/* Create Task */}
      <CreateTask listId={list._id} onCreated={loadTasks} />

      {/* Tasks */}
      <div className="task-list">
        {loading ? (
          <p className="loading-text">Loading tasks...</p>
        ) : tasks.length === 0 ? (
          <p className="empty-text">No tasks yet</p>
        ) : (
          tasks.map((task) => (
            <TaskCard key={task._id} task={task} onUpdated={loadTasks} />
          ))
        )}
      </div>
    </div>
  );
};

export default ListColumn;
