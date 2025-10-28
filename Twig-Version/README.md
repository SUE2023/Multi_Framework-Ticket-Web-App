# 🪶 Twig Version — Multi-Framework Ticket Web App

This is the **Twig** template-based implementation of the Ticket Web App. It represents the server-rendered version using HTML, CSS, and JavaScript enhanced by Twig syntax.

![Twig Ticket App Screenshot](../shared/twig-preview.png)

---

## 🚀 Getting Started

git clone

### 1️⃣ Navigate to the Twig version folder:

```bash
cd Twig-Version
```

### 2️⃣ Open the project locally:

You can open `index.twig` or the compiled HTML in your browser, or serve via a local PHP/Twig server:

```bash
php -S localhost:8000
```

Then open **[http://localhost:8000](http://localhost:8000)**

---

## 🧩 Folder Structure

```
Twig-Version/
│
├── templates/
│   ├── base.twig
│   ├── login.twig
│   ├── dashboard.twig
│   └── tickets.twig
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
└── index.twig
```

---

## 🧠 Shared Data

* Accesses mock data from `../shared/mockUsers.json`
* Uses ticket logic from `../shared/mockTickets.js`

---

## 🧰 Features

* Static + server-rendered UI with Twig
* Clean templating for Login and Dashboard
* Shared mock data with React/Vue versions

