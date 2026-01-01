# Clueso Clone – Feedback Management SaaS

A full-stack feedback management platform inspired by Clueso.io.  
This application allows authenticated users to collect, manage, and analyze feedback using real-world SaaS workflows.

## 🚀 Features

### 🔐 Authentication
- User Signup & Login
- JWT-based authentication
- Protected routes
- Secure logout

### 📝 Feedback Management
- Create feedback with category and sentiment
- View all feedbacks in a centralized dashboard
- Feedback status workflow:
  - **Pending**
  - **Reviewed**
  - **Action Required**
- Real-time status updates

### 📊 Insights
- Sentiment breakdown (Positive / Neutral / Negative)
- High-level feedback overview for decision-making

### 🎨 UI / UX
- Modern glassmorphism-based UI
- Responsive dashboard layout
- Smooth navigation and scrolling

## 🛠 Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Axios
- CSS (Glassmorphism UI)

### Backend
- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT Authentication

---

## 📂 Project Structure

```

clueso-clone/
├── frontend/        # React + TypeScript frontend
└── backend/         # Node.js + Express backend

````

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Anshweknow/clueso-clone.git
cd clueso-clone
````

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
JWT_SECRET=your_jwt_secret
```

Run Prisma and start server:

```bash
npx prisma migrate dev
npx prisma generate
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🎯 Purpose of the Project

This project was built to demonstrate:

* Full-stack development skills
* Secure authentication and authorization
* Clean architecture and separation of concerns
* Real-world feedback management workflows
* Scalable and maintainable codebase

---

## 👤 Author

**Ansh Kulshreshtha**
🔗 LinkedIn: [https://www.linkedin.com/in/ansh-kulshreshtha/](https://www.linkedin.com/in/ansh-kulshreshtha/)

---

## 📜 License

This project is for educational and demonstration purposes.

````
