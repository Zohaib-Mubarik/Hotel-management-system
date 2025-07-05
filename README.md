# 🏨 Hotel Management System

A full-stack **Hotel Management System** built using a modern web stack. It enables hotel staff to manage bookings, rooms, customer records, and services efficiently through a responsive web interface and secure backend APIs.

---

## 🚀 Tech Stack

### 🖥️ Frontend
- **React.js** – For dynamic UI components and routing
- **Vite** – Fast frontend build tool
- **Tailwind CSS** – Utility-first CSS framework for styling

### 🛠️ Backend
- **C# ASP.NET Core** – RESTful API services for hotel operations
- **Entity Framework** – For object-relational mapping and database communication

### 🗄️ Database
- **PostgreSQL** – Relational database system
- **pgAdmin4** – GUI for managing the PostgreSQL database

---

## 📦 Features

- 🛏️ Room Booking & Availability
- 👥 Customer Check-in / Check-out
- 📋 Staff Management
- 📊 Dashboard for Admin Panel
- 🔐 Role-Based Access Control
- 💾 Real-time Data Handling via PostgreSQL
- 📎 Printable Booking Reports

---


## ⚙️ Getting Started

### 🔧 Prerequisites
- Node.js & npm
- PostgreSQL & pgAdmin4
- .NET SDK (for C# backend)
- Git

### 🖥️ Frontend Setup

```bash
cd Front-End
npm install
npm run dev
🛠️ Backend Setup
bash
Copy
Edit
cd Back-End
dotnet restore
dotnet run
Ensure your backend and database connection string are properly configured in appsettings.json.

🗄️ Database Setup
Open pgAdmin4

Create a new database

Run the SQL script in Data Base.sql to create tables and insert initial data

🔐 Authentication & Security
JWT-based token authentication for users

Role-based access for admin and staff

Secure API endpoints
