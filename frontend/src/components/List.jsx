import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  getListOfTasks,
  deleteTask,
  updateTask,
  getTaskById
} from '../services_Testing_rabin/listoftask';

const List = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [searchId, setSearchId] = useState("");
  const [editingTask, setEditingTask] = useState({ id: "", name: "", owner: "", command: "" });

  const fetchAllTasks = () => {
    getListOfTasks().then(setTasks).catch(console.error);
  };

  useEffect(() => {
    fetchAllTasks();
  }, []);

  const handleDelete = (id) => {
    deleteTask(id).then(() => {
      alert("Task deleted");
      fetchAllTasks();
    });
  };

  const handleSearch = () => {
    if (!searchId) return fetchAllTasks();
    getTaskById(searchId)
      .then(task => setTasks([task]))
      .catch(() => alert("Task not found"));
  };

  const handleUpdate = (task) => {
    setEditingTask(task);
  };

  const handleUpdateSubmit = () => {
    updateTask(editingTask)
      .then(() => {
        alert("Task updated");
        fetchAllTasks();
        setEditingTask({ id: "", name: "", owner: "", command: "" });
      })
      .catch(err => alert("Update failed: " + err.message));
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">List of Tasks</h1>

      <div className="d-flex mb-3">
        <input
          className="form-control me-2"
          type="text"
          placeholder="Search by ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>Search</button>
      </div>

      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Owner</th>
            <th>Command</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Output</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
  {tasks.map((task, taskIndex) => {
    const executions = task.taskExecutions || [];
    if (executions.length > 0) {
      return executions.map((execution, execIndex) => (
        <tr key={`${task.id}-${execIndex}`}>
          <td>{task.name}</td>
          <td>{task.owner}</td>
          <td>{task.command}</td>
          <td>{execution.startTime}</td>
          <td>{execution.endTime}</td>
          <td>{execution.output}</td>
          <td>
            {execIndex === 0 && (
              <>
                <button className="btn btn-sm btn-warning me-1" onClick={() => handleUpdate(task)}>Edit</button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(task.id)}>Delete</button>
              </>
            )}
          </td>
        </tr>
      ));
    } else {
      return (
        <tr key={task.id}>
          <td>{task.name}</td>
          <td>{task.owner}</td>
          <td>{task.command}</td>
          <td colSpan="3" className="text-center text-muted">No executions found</td>
          <td>
            <button className="btn btn-sm btn-warning me-1" onClick={() => handleUpdate(task)}>Edit</button>
            <button className="btn btn-sm btn-danger" onClick={() => handleDelete(task.id)}>Delete</button>
          </td>
        </tr>
      );
    }
  })}
</tbody>

      </table>

      {editingTask.id && (
        <div className="card p-3 mt-4">
          <h4>Edit Task</h4>
          <input
            className='form-control mb-2'
            placeholder='Task ID'
            value={editingTask.id}
            onChange={(e) => setEditingTask({ ...editingTask, id: e.target.value })}
            disabled
          />

          <input
            className="form-control mb-2"
            placeholder="Task Name"
            value={editingTask.name}
            onChange={(e) => setEditingTask({ ...editingTask, name: e.target.value })}
          />
          <input
            className="form-control mb-2"
            placeholder="Owner"
            value={editingTask.owner}
            onChange={(e) => setEditingTask({ ...editingTask, owner: e.target.value })}
          />
          <input
            className="form-control mb-2"
            placeholder="Command"
            value={editingTask.command}
            onChange={(e) => setEditingTask({ ...editingTask, command: e.target.value })}
          />
          <button className="btn btn-success" onClick={handleUpdateSubmit}>Update</button>
          <button className="btn btn-secondary ms-2" onClick={() => setEditingTask({ id: "", name: "", owner: "", command: "" })}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default List;
