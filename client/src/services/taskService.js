import { getToken } from "../utils/auth";

const API_URL = "http://localhost:5000/api/lists";

export const getTasksBylist = async (listId)=>{
    const res = await fetch(`${API_URL}/${listId}/tasks`, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });

    if(!res.ok) throw new Error("Failed to fetch tasks");

    return res.json();
};

export const createTask = async(listId)=>{
    const res = await fetch(`${API_URL}/${listId}/tasks`,{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        },
        body: JSON.stringify(task)
    })

    if(!res.ok) throw new Error("Failed to create task");

    return res.json();
};