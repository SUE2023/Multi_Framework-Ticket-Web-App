# ⚛️ React Version — Multi-Framework Ticket Web App

This is the **React (JSX)** implementation of the **Multi-Framework Ticket Web App**, handling login, dashboard, and ticket management functionalities using React Router and localStorage-based session management.

![React Ticket App Screenshot](../shared/react-preview.png)

---

## 🚀 Getting Started

### 1️⃣ Navigate to the React version folder:

```bash
cd React-Version_JSX/ticketsystem
```

### 2️⃣ Install dependencies:

```bash
npm install
```

### 3️⃣ Start the development server:

```bash
npm start
```

The app will launch at **[http://localhost:3000](http://localhost:3000)**

---

## 🧩 Folder Structure

```
React-Version_JSX/
│
├── src/
│   ├── pages/           # Login, Dashboard, TicketManagement
│   ├── components/      # TicketForm, TicketCard, Toast, etc.
│   ├── api/             # mockTickets.js
│   ├── utils/           # sessions.js
│   └── App.js
└── package.json
```

---

## 🧠 Shared Data

* Uses shared mock data from `../shared/mockUsers.json`
* Common ticket logic from `../shared/mockTickets.js`

---

## 🧰 Features

* React Router-based navigation
* Session handling with localStorage
* Toast notifications for feedback
* CRUD Ticket Management

