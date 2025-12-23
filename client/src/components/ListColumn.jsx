import { useEffect, useState, useCallback } from "react";
import { getTasksByList } from "../services/taskService";
import TaskCard from "./TaskCard";
import CreateTask from "./CreateTask";

const ListColumn = ({ list }) => {
  const [tasks, setTasks] = useState([]);

  const loadTasks = useCallback(async () => {
    const data = await getTasksByList(list._id);
    setTasks(data);
  }, [list._id]);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return (
    <div style={{ border: "1px solid #ccc", padding: 8, width: 250 }}>
      <h4>{list.name}</h4>

      <CreateTask listId={list._id} onCreated={loadTasks} />

      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} onUpdated={loadTasks} />
      ))}
    </div>
  );
};

export default ListColumn;
