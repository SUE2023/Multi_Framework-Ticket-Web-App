# 🟩 Vue 3 Version — Multi-Framework Ticket Web App

This is the **Vue 3** implementation of the Ticket Web App. It demonstrates the same ticket management logic as React and Twig, built using the Composition API.

![Vue Ticket App Screenshot](../docs/vue-preview.png)

---

## 🚀 Getting Started
git clone

### 1️⃣ Navigate to the Vue version folder:

```bash
cd Vue-Version/ticketsystem
```

### 2️⃣ Install dependencies:

```bash
npm install
```

### 3️⃣ Run the development server:

```bash
npm run dev
```

Visit **[http://localhost:5173](http://localhost:5173)** (default Vite port)

---

## 🧩 Folder Structure

```
Vue-Version/
│
├── src/
│   ├── views/           # Login, Dashboard, TicketManagement
│   ├── components/      # TicketForm.vue, TicketCard.vue, etc.
│   ├── api/             # mockTickets.js
│   ├── utils/           # sessions.js
│   └── main.js
└── package.json
```

---

## 🧠 Shared Data

* Imports shared data from `../shared/mockUsers.json`
* Uses ticket logic from `../shared/mockTickets.js`

---

## 🧰 Features

* Vue Router navigation
* Composition API for state and logic
* Reactive ticket list updates
* Inline and toast feedback

