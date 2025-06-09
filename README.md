# 📰 News Portal MERN

A news portal built using the MERN Stack (MongoDB, Express, React, Node.js) with user and admin roles, JWT authentication, news management, comments, and user administration.

## 📁 Project Structure

```
.
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── uploads/
│   ├── .env
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   ├── .gitignore
│   └── package.json
├── database/
│   ├── beritaDB.beritas.json
│   └── beritaDB.users.json
└── README.md
```

---

## 🚀 Main Features

### For All Users:

* Register and log in
* View news list
* View detailed news
* Comment on news (if logged in)
* View user profile

### For Admins:

* Add, edit, and delete news
* Add, edit, and delete users
* Manage news categories
* View dashboard statistics

---

## ⚙️ Installation and Running the Project

### 1. Clone the Repository

```bash
git clone https://github.com/username/mern-news-portal.git
cd mern-news-portal
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file and fill it with the following:

```env
MONGO_URI=mongodb://localhost:27017/portaDB
JWT_SECRET=porta
```

Start the backend server:

```bash
node server.js
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

---

## 🧹 Dependencies

### Backend

* express
* mongoose
* bcrypt
* jsonwebtoken
* dotenv
* multer
* cors

### Frontend

* react
* react-dom
* react-router-dom
* axios
* tailwindcss
* react-scripts
* @testing-library/react
* @testing-library/jest-dom
* @testing-library/user-event
* @testing-library/dom

---

## 📂 Database

To populate initial data locally, use the JSON files in the `database/` folder:

* `beritaDB.beritas.json`
* `beritaDB.users.json`

You can import these into MongoDB using scripts or tools like MongoDB Compass.

Example using `mongoimport`:

```bash
mongoimport --db beritaDB --collection beritas --file ./database/beritaDB.beritas.json --jsonArray
mongoimport --db beritaDB --collection users --file ./database/beritaDB.users.json --jsonArray
```

---

## 👨‍💼 Developer

**Name:** Dendha Arthansa
**GitHub:** [https://github.com/alrghtden](https://github.com/alrghtden)
