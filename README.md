# TaskFlow – Task Management Web Application

TaskFlow is a responsive task management web application developed using React.js, JavaScript, HTML5, CSS3, and Bootstrap.

The application allows users to create, manage, search, filter, sort, edit, and complete tasks. Task data is stored using browser LocalStorage for persistence.

---

## Live Demo

[TaskFlow – Live Demo](https://task-flow-green-rho.vercel.app/)

## GitHub Repository

[TaskFlow – GitHub Repository](https://github.com/Kshitija80/TaskFlow)

---

## Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- Search tasks by title
- Filter tasks by:
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
- Add task description
- Set task due date
- View task statistics
- Store tasks using LocalStorage
- Responsive design for desktop, tablet, and mobile devices
- Clean and user-friendly interface

---

## Technologies Used

### Frontend

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Bootstrap

### Concepts and Features

- React Components
- React Hooks
- useState
- useEffect
- Props
- Controlled Components
- Conditional Rendering
- Event Handling
- JavaScript Array Methods:
  - map()
  - filter()
  - find()
  - sort()
- LocalStorage
- Responsive Web Design
- CRUD Operations

### Development Tools

- Visual Studio Code
- Vite
- Git
- GitHub
- Vercel

---

## Project Structure

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

---

## Installation and Setup

Follow the steps below to run TaskFlow locally.

### 1. Clone the Repository

```bash
git clone https://github.com/Kshitija80/TaskFlow.git
```

### 2. Navigate to the Project Directory

```bash
cd TaskFlow
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The application will start on the local development server.

Open the URL displayed in the terminal, usually:

```text
http://localhost:5173/
```

---

## Production Build

To create a production build, run:

```bash
npm run build
```

To preview the production build locally, run:

```bash
npm run preview
```

---

## Task Management

Each task contains the following information:

- Task Title
- Description
- Due Date
- Priority
- Completion Status

Users can perform the following operations:

```text
Add → Edit → Complete → Delete
```

---

## Search, Filter and Sort

TaskFlow provides search, filtering, and sorting functionality to make task management easier.

### Search

Users can search for tasks based on their title.

### Filter

Tasks can be filtered into:

- All
- Pending
- Completed

### Sort

Tasks can be sorted according to:

- Title
- Due Date
- Priority

Priority is ordered as:

```text
High → Medium → Low
```

---

## Data Persistence

TaskFlow uses the browser's LocalStorage to store task data.

The application uses the following LocalStorage key:

```text
taskflow_tasks
```

This allows tasks to remain available after refreshing or reopening the browser.

Since LocalStorage is browser-based, the data is stored locally on the user's device and is not shared between different browsers or devices.

---

## Responsive Design

TaskFlow is designed to provide a responsive user experience across different screen sizes:

- Desktop
- Tablet
- Mobile

Bootstrap's responsive layout and utility classes are used to build the responsive interface.

---

## Key Learning Outcomes

Through this project, I gained practical experience in:

- Developing applications using React.js
- Creating reusable React components
- Managing application state using React Hooks
- Handling user input using controlled components
- Working with JavaScript array methods
- Implementing CRUD operations
- Using LocalStorage for data persistence
- Creating responsive layouts using Bootstrap
- Using Git and GitHub for version control
- Deploying React applications using Vercel

---

## Deployment

TaskFlow is deployed using Vercel.

### Deployment Workflow

```text
React Project
     ↓
    Git
     ↓
  GitHub
     ↓
  Vercel
     ↓
Live Website
```

The GitHub repository is connected to the Vercel project. Changes pushed to the `main` branch can therefore be used for subsequent deployments.

---

## Future Enhancements

The following features can be considered for future versions:

- User authentication
- Cloud database integration
- User-specific task management
- Task categories
- Task reminders and notifications
- Dark mode
- Drag-and-drop task management
- Calendar integration
- Backend API integration

---
