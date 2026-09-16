import { useState, useEffect } from "react";
function TaskForm({ onAddTask, onEditTask, onFinishEdit, editingTask }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "",
    dueDate: "",
  });
  useEffect(() => {
    if (editingTask) {
      setFormData({
        title: editingTask.title,
        description: editingTask.description,
        priority: editingTask.priority,
        dueDate: editingTask.dueDate,
      });
    }
  }, [editingTask]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  //console.log(formData);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editingTask) {
      const updatedTask = {
        ...editingTask,
        ...formData,
      };

      onEditTask(updatedTask);
      onFinishEdit();
      //console.log("Task Updated:", updatedTask);
    } else {
      const newTask = {
        id: Date.now(),
        ...formData,
        completed: false,
      };

      onAddTask(newTask);

      // console.log("Task Added:", newTask);
    }
    setFormData({
      title: "",
      description: "",
      priority: "",
      dueDate: "",
    });
  };
  return (
    <div className="card shadow-sm mt-4">
      <div className="card-body">
        <h4 className="mb-4">{editingTask ? "Edit Task" : "Add New Task"}</h4>

        <form onSubmit={handleSubmit}>
          {/* Task Title */}
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Task Title
            </label>

            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter task title"
            />
          </div>

          {/* Description */}
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>

            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="form-control"
              rows="3"
              placeholder="Enter task description"
            ></textarea>
          </div>

          {/* Priority */}
          <div className="mb-3">
            <label htmlFor="priority" className="form-label">
              Priority
            </label>

            <select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="form-select"
            >
              <option value="">Select Priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          {/* Due Date */}
          <div className="mb-3">
            <label htmlFor="dueDate" className="form-label">
              Due Date
            </label>

            <input
              type="date"
              id="dueDate"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            {editingTask ? "Update Task" : "Add Task"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
