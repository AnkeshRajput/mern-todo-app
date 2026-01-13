# MERN Todo App 📝

A full-stack Todo application built using the MERN stack with clean architecture and production-level practices.

## 🚀 Tech Stack
- **Frontend:** React, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose

## ✨ Features
- Create, read, update, delete todos
- RESTful API design
- Input validation using Zod
- Centralized error handling
- Clean service-based backend architecture
- Axios-based API layer on frontend

## 📂 Project Structure
mern-todo-app/
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controllers/
│   │   │   └── todo.controller.js
│   │   ├── middlewares/
│   │   │   ├── asyncHandler.js
│   │   │   ├── errorHandler.js
│   │   │   └── validate.js
│   │   ├── models/
│   │   │   └── Todo.js
│   │   ├── routes/
│   │   │   └── todo.routes.js
│   │   ├── services/
│   │   │   └── todo.service.js
│   │   ├── utils/
│   │   │   ├── apiError.js
│   │   │   └── apiResponse.js
│   │   └── validators/
│   │       └── todo.validator.js
│   ├── server.js
│   ├── package.json
│   ├── .gitignore
│   └── README.md   ✅ (backend-specific)
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   ├── axios.js
│   │   │   └── todo.api.js
│   │   ├── pages/
│   │   │   └── TodoPage.jsx
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   ├── .gitignore
│   └── README.md   ✅ (frontend-specific)
│
└── README.md       ⭐ MAIN PROJECT README
