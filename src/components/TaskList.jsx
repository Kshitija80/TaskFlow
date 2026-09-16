function TaskList({
  tasks,
  onCompleteTask,
  onDeleteTask,
  onEditTask,
  onStartEdit,
}) {
  return (
    <div className="card shadow-sm mt-4" id="tasks">
      <div className="card-body">
        <h4 className="mb-4">My Tasks</h4>

        {tasks.length === 0 ? (
          <div className="text-center py-4">
            <p className="text-muted mb-0">No tasks found.</p>
          </div>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className={`border rounded p-3 mb-3 ${
                task.completed ? "bg-light" : ""
              }`}
            >
              <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                <div>
                  <h5
                    className={
                      task.completed
                        ? "text-decoration-line-through text-muted"
                        : ""
                    }
                  >
                    {task.title}
                  </h5>

                  <p className="text-muted mb-2">{task.description}</p>
                </div>

                <div>
                  <span className="badge bg-primary">{task.priority}</span>
                </div>
              </div>

              <div className="mb-3">
                <span className="text-muted">Due: {task.dueDate}</span>
              </div>

              <button
                type="button"
                className="btn btn-success btn-sm"
                onClick={() => onCompleteTask(task.id)}
                disabled={task.completed}
              >
                {task.completed ? "Completed" : "Complete"}
              </button>

              <button
                type="button"
                className="btn btn-warning btn-sm ms-2"
                onClick={() => onStartEdit(task)}
              >
                Edit
              </button>

              <button
                type="button"
                className="btn btn-danger btn-sm ms-2"
                onClick={() => onDeleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TaskList;
