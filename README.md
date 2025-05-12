# 🏋️ Ultimez Gym Management System

Ultimez Gym Management System is a powerful web-based platform designed to streamline gym operations. It features user registration, authentication, membership management, interactive dashboards, and profile tracking. The system is built with **Node.js**, **Express**, and **MongoDB** for backend operations, while the frontend is developed with **HTML**, **CSS**, **Bootstrap**, and **JavaScript**.

---

## 🚀 **Features**

* **User Authentication:** Secure registration and login with JWT-based authorization.
* **Profile Management:** Real-time profile data fetching and display.
* **Interactive Sidebar:** Easy navigation across the application.
* **Membership Plans:** Display of gym membership details and subscription status.
* **Schedules and Trainers:** View schedules and trainers associated with the gym.
* **Admin Management:** Easy control over users and memberships (Future enhancement).
* **Responsive Design:** Optimized for desktop and mobile views.

---

## 🗂️ **Project Structure**

```
├── backend
│   ├── controllers
│   │   └── authController.js
│   ├── middleware
│   │   └── authMiddleware.js
│   ├── models
│   │   └── User.js
│   ├── routes
│   │   └── authRoutes.js
│   ├── server.js
│   └── config
│       └── db.js
│
├── frontend
│   ├── assets
│   │   ├── css
│   │   │   └── profile.css
│   │   └── images
│   ├── index.html
│   ├── pages
│   │   ├── login.html
│   │   ├── register.html
│   │   └── profile.html
│   └── sidebar.html
│
├── .env
├── package.json
└── README.md
```

---

## 🔧 **Installation Instructions**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/username/ultimez-gym-management.git
   cd ultimez-gym-management
   ```

2. **Install dependencies:**

   ```bash
   npm install
   cd backend
   npm install
   ```

3. **Configure Environment Variables:** Create a `.env` file in the backend directory and add:

   ```env
   MONGO_URI=<Your MongoDB Connection String>
   JWT_SECRET=<Your JWT Secret>
   PORT=5000
   ```

4. **Run the server:**

   ```bash
   npm run dev
   ```

5. **Open the Frontend:** Navigate to `frontend/index.html` in your browser.

---

## 📌 **API Endpoints**

| Method | Endpoint             | Description              |
| ------ | -------------------- | ------------------------ |
| POST   | `/api/auth/register` | Register a new user      |
| POST   | `/api/auth/login`    | Login user and get token |
| GET    | `/api/auth/profile`  | Fetch user profile       |

---

## 💻 **Frontend Pages**

* `index.html`: Home Page
* `login.html`: User Login
* `register.html`: User Registration
* `profile.html`: Profile Page (Data fetched from backend)
* `sidebar.html`: Sidebar Navigation

---

## 🛠️ **Technologies Used**

* **Frontend:** HTML, CSS, Bootstrap, JavaScript
* **Backend:** Node.js, Express
* **Database:** MongoDB
* **Authentication:** JWT (JSON Web Token)
* **Version Control:** Git

---

## 🌟 **Future Enhancements**

* Role-based access for Admin and Trainers
* Booking and Scheduling of classes
* Payment integration for membership plans
* Enhanced analytics for admin dashboards

---

## 📜 **License**

This project is licensed under the MIT License.

---

### ✨ **Developed by \[sumit majukar & vivekanad Ahirsang]**
