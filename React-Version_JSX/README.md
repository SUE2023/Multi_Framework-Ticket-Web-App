![React Version]/(../shared/React.png)
⚛️ React Version — Multi-Framework Ticket Web App

This is the React (JSX) implementation of the Multi-Framework Ticket Web App, handling login, dashboard, and ticket management functionalities using React Router and localStorage-based session management.

🚀 Getting Started

Requirements
____________
node: check by node -v 
npm: check by npm -v
If not installed, download from https://nodejs.org
npm install react-router-dom # for routing
npm install react-toastify # for toast notification

clone repository

1️⃣ Navigate to the React version folder:
cd into React Version/ticketsystem

2️⃣ Install dependencies:

npm install

3️⃣ Start the development server:
npm start

The app will launch at http://localhost:3000

🧩 Folder Structure
React-Version_JSX/
│
├── src/
│   ├── pages/           # Login, Dashboard, TicketManagement
│   ├── components/      # TicketForm, TicketCard, Toast, etc.
│   ├── api/             # mockTickets.js
│   ├── utils/           # sessions.js
│   └── App.js
└── package.json

🧠 Shared Data
Uses shared mock data from ../shared/mockUsers.json
Common ticket logic from ../shared/mockTickets.js

🧰 Features
React Router-based navigation
Session handling with localStorage
Toast notifications for feedback
CRUD Ticket Management
