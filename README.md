📝 MERN Todo App

A full-stack Todo application built using the MERN stack with a clean, scalable backend architecture and a modern React frontend.
This project focuses on how real-world products are structured, not just CRUD functionality.

🚀 Tech Stack
Frontend

React (Vite)

Axios

Modern component-based architecture

Backend

Node.js

Express.js

MongoDB

Mongoose

Zod (request validation)

Centralized error handling

📂 Project Structure
mern-todo-app/
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── middlewares/
│   │   ├── validators/
│   │   └── utils/
│   ├── server.js
│   ├── package.json
│   └── .env (not committed)
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── pages/
│   │   ├── components/
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md

✨ Features

Create, read, update, and delete todos

RESTful API design

Service-based backend architecture

Centralized error handling

Input validation using Zod

Axios-based API communication

Clean separation of concerns (controller / service / route)

🛠️ Getting Started
1️⃣ Clone the repository
git clone https://github.com/<AnkeshRajput>/mern-todo-app.git
cd mern-todo-app

2️⃣ Backend Setup
cd backend
npm install


Create a .env file in backend/:

PORT=5000
MONGO_URI=your_mongodb_connection_string


Run backend:

npm run dev


Backend runs on:

http://localhost:5000

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs on:

http://localhost:5173

📌 API Endpoints
Method	Endpoint	Description
GET	/api/todos	Get all todos
POST	/api/todos	Create a new todo
PUT	/api/todos/:id	Toggle todo status
DELETE	/api/todos/:id	Delete a todo
🧠 What I Learned From This Project

How production-ready backend code is structured

Why services should be separated from controllers

How centralized error handling works

How frontend and backend communicate cleanly

How to validate and protect APIs

How to organize a real MERN project (not tutorial-style)

🔮 Future Improvements

Authentication (JWT)

User-specific todos

Pagination & filtering

Deployment (Render + Vercel)

Unit & integration testing

👨‍💻 Author

Ankesh Singh
Computer Science & Engineering Student
Learning MERN with real-world practices