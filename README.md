# 🌐 Scalable Full Stack Web Application

A full-stack web application built using **React.js, Node.js, and MySQL** with secure authentication and a protected dashboard system.

---

## 🎯 Project Objective

To build a scalable web application with secure user authentication, role-based access, and a modular frontend-backend architecture.

---

## 🚀 Features

### 👤 Authentication System
- User registration and login
- JWT-based authentication
- Protected routes for dashboard access

### 📊 Dashboard
- Secure dashboard access after login
- Displays user-specific data

### 🔗 API Integration
- REST APIs built using Node.js
- Frontend-backend communication using Axios/Fetch

---

## 🛠️ Tech Stack

- Frontend: React.js
- Backend: Node.js (Express)
- Database: MySQL
- Authentication: JWT
- Tools: Postman, Git, GitHub

---

## 🧩 Architecture


Frontend (React)
↓
REST API (Node.js + Express)
↓
Database (MySQL)


---

## 🔐 Authentication Flow

1. User registers or logs in  
2. Backend validates credentials  
3. JWT token is generated  
4. Token is stored in frontend  
5. Protected dashboard is accessed  

---

## 📡 API Endpoints (Example)

### Auth
- POST `/api/register`
- POST `/api/login`

### Dashboard
- GET `/api/dashboard` (Protected)

---

## ▶️ How to Run

### Backend
```bash id="b2k9lz"
cd backend
npm install
npm start
Frontend
cd frontend
npm install
npm start
