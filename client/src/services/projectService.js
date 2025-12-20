import {getToken} from "../utils/auth";

const API_URL = "http://localhost:5000/api/projects";

export const getProjects = async ()=>{
    const response = await fetch(API_URL, {
        headers:{
            Authorization: `Bearer ${getToken()}`,
        },
    });

    if(!response.ok){
        throw new Error("Failed to fetch projects");
    }

    return response.json();
};

export const createProject = async (projectData)=>{
    const response = await fetch(API_URL, {
        method: "POST",
        headers:{
            "Content-type" : "application/json",
            Authorization : `Bearer ${getToken()}`,
        },
        body: JSON.stringify(projectData),
    });

    if(!response.ok){
        throw new Error("Failed to create project");
    }

    return response.json();
};