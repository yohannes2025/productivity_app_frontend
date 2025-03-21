// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import ProfilePage from "./components/ProfilePage";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import ActivityFeed from "./components/ActivityFeed";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/register" component={RegistrationForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/tasks/create" component={TaskForm} />
        <Route path="/tasks" component={TaskList} />
        <Route path="/activity" component={ActivityFeed} />
        <Redirect from="/" to="/dashboard" />
      </Switch>
    </Router>
  );
}

export default App;
