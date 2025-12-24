const API_URL = "https://taskflow-mern-0i3t.onrender.com/api/auth";

export const login = async (credential) =>{
    const response = await fetch(`${API_URL}/login`,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(credential),
    });

    const data = await response.json();

    if(!response.ok){
        throw new Error(data.message || "Login failed");
    }

    return data;
};