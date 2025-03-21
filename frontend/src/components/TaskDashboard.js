
// TaskDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './hooks/useAuth';

function TaskDashboard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '', due_date: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('/api/tasks/');
      setTasks(response.data);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleTaskCreate = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/tasks/', newTask);
      setNewTask({ title: '', description: '', due_date: '' });
      setSuccess(true);
      setError('');
      fetchTasks();
    } catch (err) {
      setError(err.message);
      setSuccess(false);
    }
  };

  return (
    <div className="container my-5">
      <h1>Task Dashboard</h1>
      {success && <div className="alert alert-success">Task created successfully</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleTaskCreate}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" value={newTask.title} onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea className="form-control" id="description" rows="3" value={newTask.description} onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="due_date">Due Date</label>
          <input type="date" className="form-control" id="due_date" value={newTask.due_date} onChange={(e) => setNewTask({ ...newTask, due_date: e.target.value })} />
        </div>
        <button type="submit" className="btn btn-primary">Create Task</button>
      </form>
      <hr />
      <h2>Tasks</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Assigned To</th>
            <th>Priority</th>
            <th>Category</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.due_date}</td>
              <td>{task.assigned_to ? task.assigned_to.name : 'Unassigned'}</td>
              <td>{task.priority}</td>
              <td>{task.category}</td>
              <td>{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskDashboard;
