// // App.js
// import Dashboard from "./components/Dashboard";
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate,
// } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import RegistrationForm from "./components/RegistrationForm";

// import LoginForm from "./components/LoginForm";
// // import DashboardComponent from "./components/Dashboard";
// import ProfilePage from "./components/ProfilePage";
// import TaskForm from "./components/TaskForm";
// import TaskList from "./components/TaskList";
// import ActivityFeed from "./components/ActivityFeed";
// import TaskDashboard from "./components/Dashboard";
// import { useAuth } from "./hooks/useAuth";

// // function App() {
// //   return (
// //     <Router>
// //       <Navbar />
// //       <Routes>
// //         <Route path="/register" element={<RegistrationForm />} />
// //         <Route path="/login" element={<LoginForm />} />
// //         <Route path="/taskdashboard" element={<TaskDashboard/>} />
// //         <Route path="/profile" element={<ProfilePage />} />
// //         <Route path="/tasks/create" element={<TaskForm />} />
// //         <Route path="/tasks" element={<TaskList />} />
// //         <Route path="/activity" element={<ActivityFeed />} />
// //         <Route path="/" element={<Navigate to="/dashboard" />} />
// //       </Routes>
// //     </Router>
// //   );
// // }


// // export default App;
// function App() {
//   return (
//     <div>
//       <RegistrationForm />
//       <LoginForm />
//       <Dashboard />
//       <ProfilePage />
//       <TaskForm />
//       <TaskList />
//     </div>
//   );
// }

// export default App;

// Dashboard.js
import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';


function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from the backend and update the state
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    // Implement the logic to fetch tasks from the backend
    // and update the tasks state
  };

  const addTask = (task) => {
    // Implement the logic to add a new task
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    // Implement the logic to update an existing task
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (taskId) => {
    // Implement the logic to delete a task
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <TaskForm onAddTask={addTask} />
      {/* Render the list of tasks */}
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Due Date: {task.dueDate}</p>
          <button onClick={() => updateTask(task)}>Update</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;