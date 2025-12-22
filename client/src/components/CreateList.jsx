import { useState } from "react";
import { createList } from "../services/listService";

const CreateList = ({ projectId, onCreated }) => {
  const [name, setName] = useState("");

  const submit = async () => {
    await createList(projectId, name);
    setName("");
    onCreated();
  };

  return (
    <>
      <input
        placeholder="New list"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={submit}>Add List</button>
    </>
  );
};

export default CreateList;
