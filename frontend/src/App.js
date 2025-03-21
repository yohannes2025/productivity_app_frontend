// App.js
import Dashboard from "./components/Dashboard";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import RegistrationForm from "./components/RegistrationForm";

import LoginForm from "./components/LoginForm";
// import DashboardComponent from "./components/Dashboard";
import ProfilePage from "./components/ProfilePage";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import ActivityFeed from "./components/ActivityFeed";
import TaskDashboard from "./components/TaskDashboard";
import { useAuth } from "./hooks/useAuth";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/register" element={<RegistrationForm />} />
//         <Route path="/login" element={<LoginForm />} />
//         <Route path="/taskdashboard" element={<TaskDashboard/>} />
//         <Route path="/profile" element={<ProfilePage />} />
//         <Route path="/tasks/create" element={<TaskForm />} />
//         <Route path="/tasks" element={<TaskList />} />
//         <Route path="/activity" element={<ActivityFeed />} />
//         <Route path="/" element={<Navigate to="/dashboard" />} />
//       </Routes>
//     </Router>
//   );
// }


// export default App;
function App() {
  return (
    <div>
      <RegistrationForm />
      <LoginForm />
      <DashboardComponent />
      <ProfilePage />
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
