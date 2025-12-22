import { useEffect, useState } from "react";
import { getTasksByList } from "../services/projectService";
import TaskCard from "./TaskCard";
import CreateTask from "./CreateTask";

const ListColumn = ({ list }) => {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const data = await getTasksByList(list._id);
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, [list._id]);

  return (
    <div style={{ border: "1px solid #ccc", padding: 8, width: 250 }}>
      <h4>{list.name}</h4>

      <CreateTask listId={list._id} onCreated={loadTasks} />

      {tasks.map(task => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  );
};

export default ListColumn;
