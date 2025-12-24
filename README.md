# 🚀 TaskFlow — MERN Stack Project Management App

TaskFlow is a **full-stack project management application** built using the **MERN stack**.  
It allows users to manage projects, create task lists, and track tasks with secure authentication and protected APIs.

This project demonstrates **end-to-end full-stack development**, including backend APIs, frontend integration, database management, and cloud deployment.

---

## 🔗 Live Demo

- **Frontend:** https://your-vercel-url.vercel.app  
- **Backend API:** https://taskflow-mern-0i3t.onrender.com  

> ⚠️ Registration API exists, but user signup UI is intentionally not exposed. Users are created manually (internal/admin-style setup).

---

## 🧩 Features

### 🔐 Authentication & Security
- JWT-based authentication
- Protected backend routes
- Secure password hashing using bcrypt

### 📁 Project Management
- Create and manage projects
- Each project can contain multiple task lists

### 🗂 List & Task Management
- Create lists under projects
- Create, update, and delete tasks
- Task status management (Todo / In Progress / Done)

### 🌐 Full-Stack Integration
- RESTful APIs
- Frontend–backend separation
- Production-ready database setup

### ☁️ Deployment
- Backend deployed on **Render**
- Frontend deployed on **Vercel**
- MongoDB Atlas used as cloud database

---

## 🛠 Tech Stack

### Frontend
- React.js
- React Router
- Fetch API
- Component-based architecture

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- RESTful APIs

### Database
- MongoDB Atlas (Cloud)

### Tools & DevOps
- Git & GitHub
- Render (Backend hosting)
- Vercel (Frontend hosting)
- Postman (API testing)

---

## 🧱 Project Structure

```
taskflow-mern/
├── client/ # React frontend
│ ├── src/
│ │ ├── pages/
│ │ ├── components/
│ │ ├── services/
│ │ └── utils/
│ └── package.json
│
├── server/ # Node + Express backend
│ ├── src/
│ │ ├── controllers/
│ │ ├── routes/
│ │ ├── models/
│ │ ├── middlewares/
│ │ └── config/
│ └── package.json
│
└── README.md

```
---

### 2️⃣ Backend Setup
```
cd server
npm install
npm run dev

```

```Backend will run on
http://localhost:5000

```

### 3️⃣ Frontend Setup

```
cd client
npm install
npm start

```

```Frontend will run on:
http://localhost:3000
```

## 🧪 API Endpoints (Sample)

```
POST /api/auth/login
POST /api/auth/register
GET /api/projects
POST /api/projects
POST /api/lists
POST /api/tasks
PUT /api/tasks/:id
DELETE /api/tasks/:id
```

---
APIs were tested using **Postman**.

## 🧠 Key Engineering Learnings

- Designing RESTful APIs
- Secure authentication with JWT
- Frontend–backend integration
- Handling production vs development environments
- Debugging real-world deployment issues
- Writing clean and meaningful Git commits

## 📌 Future Improvements

- Public user registration UI
- Role-based access control
- Drag & drop task management
- Pagination and filtering
- Improved UI animations
- Automated testing (Jest / Cypress)

## 👨‍💻 Author

**Manish**  
Computer Science Engineer  
Aspiring Full-Stack Developer  

## ⭐ Acknowledgements

This project was built as part of a structured learning journey focused on **real-world full-stack development**.