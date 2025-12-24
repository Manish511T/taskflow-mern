import { useState } from "react";
import { createTask } from "../services/taskService";


const CreateTask = ({ listId, onCreated }) => {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!title.trim()) return;

    try {
      setLoading(true);
      await createTask(listId, { title: title.trim() });
      setTitle("");
      onCreated();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") submit();
  };

  return (
    <div className="create-task">
      <input
        type="text"
        placeholder="+ Add a task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={loading}
      />
      <button onClick={submit} disabled={loading}>
        {loading ? "..." : "+"}
      </button>
    </div>
  );
};

export default CreateTask;
