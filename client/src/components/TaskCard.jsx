import { updateTask, deleteTask } from "../services/taskService";

const TaskCard = ({ task, onUpdated }) => {
  const changeStatus = async (e) => {
    await updateTask(task._id, { status: e.target.value });
    onUpdated();
  };

  const remove = async () => {
    await deleteTask(task._id);
    onUpdated();
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: 6, marginBottom: 6 }}>
      <div>{task.title}</div>

      <select value={task.status} onChange={changeStatus}>
        <option value="todo">Todo</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>

      <button onClick={remove}>🗑</button>
    </div>
  );
};

export default TaskCard;
