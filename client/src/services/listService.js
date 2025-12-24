import {getToken} from "../utils/auth";

const API_URL = "http://localhost:5000/api/projects";

export const getListsByProject = async (projectId)=>{
    const res = await fetch(`${API_URL}/${projectId}/lists`, {
        headers:{
            Authorization: `Bearer ${getToken()}`
        }
    });

    if(!res.ok) throw new Error("Failed to fetch lists");

    return res.json();
};

export const createList = async (projectId, name)=>{
    const res = await fetch(`${API_URL}/${projectId}/lists`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        },
        body: JSON.stringify({name})
    });

    if(!res.ok) throw new Error("Failed to create list");

    return res.json();
};