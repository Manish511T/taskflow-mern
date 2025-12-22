import { useState } from "react";
import { createTask } from "../services/taskService";

const CreateTask = ({ listId, onCreated }) => {
  const [title, setTitle] = useState("");

  const submit = async () => {
    await createTask(listId, { title });
    setTitle("");
    onCreated();
  };

  return (
    <>
      <input
        placeholder="New task"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button onClick={submit}>+</button>
    </>
  );
};

export default CreateTask;
