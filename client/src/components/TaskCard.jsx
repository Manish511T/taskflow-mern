import { updateTask, deleteTask } from "../services/taskService";
import { useState } from "react";


const TaskCard = ({ task, onUpdated }) => {
  const [updating, setUpdating] = useState(false);

  const changeStatus = async (e) => {
    setUpdating(true);
    await updateTask(task._id, { status: e.target.value });
    setUpdating(false);
    onUpdated();
  };

  const remove = async () => {
    if (!window.confirm("Delete this task?")) return;
    await deleteTask(task._id);
    onUpdated();
  };

  return (
    <div className={`task-card ${updating ? "updating" : ""}`}>
      <div className="task-top">
        <p className="task-title" title={task.title}>
          {task.title}
        </p>

        <button
          className="icon-btn danger"
          onClick={remove}
          aria-label="Delete task"
        >
          ✕
        </button>
      </div>

      <div className="task-footer">
        <select
          className={`status-pill ${task.status}`}
          value={task.status}
          onChange={changeStatus}
        >
          <option value="todo">Todo</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>
    </div>
  );
};

export default TaskCard;
