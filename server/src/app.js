import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import projectRoutes from "./routes/projectRoutes.js"
import listRoutes from "./routes/listRoutes.js";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/projects", listRoutes);

app.get("/", (req, res)=>{
    res.send("TaskFlow API is running");
});

export default app;

