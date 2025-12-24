import { useState } from "react";
import { createList } from "../services/listService";

const CreateList = ({ projectId, onCreated }) => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!name.trim()) return;

    try {
      setLoading(true);
      await createList(projectId, name.trim());
      setName("");
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
    <div className="create-list">
      <input
        type="text"
        placeholder="+ Add another list"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={loading}
      />
      <button onClick={submit} disabled={loading}>
        {loading ? "Adding..." : "Add"}
      </button>
    </div>
  );
};

export default CreateList;
