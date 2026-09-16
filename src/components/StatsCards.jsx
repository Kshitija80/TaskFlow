function StatsCards({ tasks }) {
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter((task) => task.completed).length;

  const pendingTasks = tasks.filter((task) => !task.completed).length;

  const highPriorityTasks = tasks.filter(
    (task) => task.priority === "High",
  ).length;
  return (
    <div className="row g-3">
      {/* Total Tasks */}
      <div className="col-12 col-md-6 col-lg-3">
        <div className="card shadow-sm h-100">
          <div className="card-body">
            <p className="text-muted mb-1">Total Tasks</p>
            <h2 className="fw-bold mb-0">{totalTasks}</h2>
          </div>
        </div>
      </div>

      {/* Pending Tasks */}
      <div className="col-12 col-md-6 col-lg-3">
        <div className="card shadow-sm h-100">
          <div className="card-body">
            <p className="text-muted mb-1">Pending</p>
            <h2 className="fw-bold mb-0">{pendingTasks}</h2>
          </div>
        </div>
      </div>

      {/* Completed Tasks */}
      <div className="col-12 col-md-6 col-lg-3">
        <div className="card shadow-sm h-100">
          <div className="card-body">
            <p className="text-muted mb-1">Completed</p>
            <h2 className="fw-bold mb-0">{completedTasks}</h2>
          </div>
        </div>
      </div>

      {/* High Priority */}
      <div className="col-12 col-md-6 col-lg-3">
        <div className="card shadow-sm h-100">
          <div className="card-body">
            <p className="text-muted mb-1">High Priority</p>
            <h2 className="fw-bold mb-0">{highPriorityTasks}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsCards;
