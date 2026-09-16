# TaskFlow – Task Management Web Application

TaskFlow is a responsive task management web application built using React.js, JavaScript, HTML5, CSS3, and Bootstrap.

It allows users to create, manage, search, filter, sort, edit, and complete tasks. Task data is stored in the browser using LocalStorage, so tasks remain available after refreshing the page.

## 🚀 Live Demo

https://task-flow-green-rho.vercel.app/

## 📂 GitHub Repository

https://github.com/Kshitija80/TaskFlow

---

## 📌 Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- Search tasks by title
- Filter tasks:
  - All
  - Pending
  - Completed
- Sort tasks by:
  - Title
  - Due Date
  - Priority
- Set task priority:
  - High
  - Medium
  - Low
- Set task due date
- Add task description
- Task statistics/dashboard
- Data persistence using LocalStorage
- Responsive design for desktop, tablet, and mobile devices
- Clean and user-friendly interface

---

## 🛠️ Technologies Used

### Frontend

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Bootstrap

### Concepts Used

- React Components
- React Hooks
- useState
- useEffect
- Event Handling
- Conditional Rendering
- Props
- JavaScript Array Methods
  - map()
  - filter()
  - find()
  - sort()
- LocalStorage
- Responsive Web Design

### Tools

- Visual Studio Code
- Git
- GitHub
- Vercel
- Vite

---

## 📁 Project Structure

```text
TaskFlow/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── StatsCards.jsx
│   │   ├── TaskForm.jsx
│   │   └── TaskList.jsx
│   │
│   ├── pages/
│   │   └── Dashboard.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

⚙️ Installation and Setup

Follow these steps to run TaskFlow locally.

1. Clone the Repository
   git clone https://github.com/Kshitija80/TaskFlow.git
2. Navigate to the Project Folder
   cd TaskFlow
3. Install Dependencies
   npm install
4. Start the Development Server
   npm run dev

The application will start on the local development server.

Open the URL shown in the terminal, usually:

http://localhost:5173/
🧪 Build for Production

To create a production build:

npm run build

To preview the production build locally:

npm run preview
💾 Data Storage

TaskFlow uses the browser's LocalStorage to store task data.

The application stores tasks using the following LocalStorage key:

taskflow_tasks

This allows the tasks to remain available even after refreshing or reopening the browser.

Note: Since LocalStorage is browser-based, the data is stored locally on the user's device and is not shared between different browsers or devices.

🔍 Task Management

Each task contains information such as:

Task Title
Description
Due Date
Priority
Completion Status

Users can manage tasks using:

Add → Edit → Complete → Delete
🔎 Search, Filter and Sort

TaskFlow provides different ways to manage a large number of tasks.

Search

Users can search tasks by their title.

Filter

Tasks can be filtered into:

All
Pending
Completed
Sort

Tasks can be sorted according to:

Title
Due Date
Priority

Priority is ordered as:

High → Medium → Low
📱 Responsive Design

TaskFlow is designed to work across different screen sizes:

💻 Desktop
📱 Mobile
📱 Tablet

Bootstrap's responsive layout and utility classes are used to create the responsive interface.

🧠 Key Learning Outcomes

Through this project, I practiced:

Building applications using React.js
Creating reusable React components
Managing application state using React Hooks
Handling user input with controlled components
Working with JavaScript array methods
Implementing CRUD operations
Using LocalStorage for data persistence
Creating responsive layouts with Bootstrap
Using Git and GitHub for version control
Deploying a React application using Vercel
🚀 Deployment

The application is deployed using Vercel.

Deployment Flow
Local React Project
↓
Git
↓
GitHub
↓
Vercel
↓
Live Website

GitHub is connected to the Vercel project so that changes pushed to the repository can be used for deployment.

🔮 Future Enhancements

Possible future improvements include:

User authentication
Cloud database integration
User-specific task management
Task categories
Task reminders and notifications
Dark mode
Drag-and-drop task management
Calendar integration
Backend API integration
👩‍💻 Author

Kshitija More

B.Tech – Information Technology

Project Links
Live Demo: https://task-flow-green-rho.vercel.app/
GitHub: https://github.com/Kshitija80/TaskFlow
