import { useState, useEffect } from "react";
import StatsCards from "../components/StatsCards";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Dashboard() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("taskflow_tasks");

    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("None");
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    localStorage.setItem("taskflow_tasks", JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = tasks
    .filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .filter((task) => {
      if (filter === "Pending") {
        return !task.completed;
      }

      if (filter === "Completed") {
        return task.completed;
      }

      return true;
    })
    .sort((a, b) => {
      if (sortBy === "Title") {
        return a.title.localeCompare(b.title);
      }

      if (sortBy === "Due Date") {
        return a.dueDate.localeCompare(b.dueDate);
      }

      if (sortBy === "Priority") {
        const priorityOrder = {
          High: 1,
          Medium: 2,
          Low: 3,
        };

        return priorityOrder[a.priority] - priorityOrder[b.priority];
      }

      return 0;
    });

  const handleAddTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };
  const handleCompleteTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task,
      ),
    );
  };
  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleStartEdit = (task) => {
    setEditingTask(task);
  };
  const handleEditTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task,
      ),
    );
  };
  const handleFinishEdit = () => {
    setEditingTask(null);
  };
  return (
    <main className="container py-4">
      <div className="mb-4">
        <h1 className="fw-bold">Task Dashboard</h1>

        <p className="text-muted">Manage your tasks and stay organized.</p>
      </div>

      <StatsCards tasks={tasks} />
      <div className="card shadow-sm mt-4">
        <div className="card-body">
          <div className="row g-3">
            {/* Search */}
            <div className="col-12 col-md-4">
              <label htmlFor="search" className="form-label">
                Search Tasks
              </label>

              <input
                type="text"
                id="search"
                className="form-control"
                placeholder="Search by task title..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </div>

            {/* Filter */}
            <div className="col-12 col-md-4">
              <label htmlFor="filter" className="form-label">
                Filter
              </label>

              <select
                id="filter"
                className="form-select"
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
              >
                <option value="All">All Tasks</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            {/* Sort */}
            <div className="col-12 col-md-4">
              <label htmlFor="sortBy" className="form-label">
                Sort By
              </label>

              <select
                id="sortBy"
                className="form-select"
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
              >
                <option value="None">None</option>
                <option value="Title">Title</option>
                <option value="Due Date">Due Date</option>
                <option value="Priority">Priority</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <TaskForm
        onAddTask={handleAddTask}
        onEditTask={handleEditTask}
        onFinishEdit={handleFinishEdit}
        editingTask={editingTask}
      />
      <TaskList
        tasks={filteredTasks}
        onCompleteTask={handleCompleteTask}
        onDeleteTask={handleDeleteTask}
        onEditTask={handleEditTask}
        onStartEdit={handleStartEdit}
      />
    </main>
  );
}

export default Dashboard;
