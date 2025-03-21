// TaskForm.js
import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(null);
  const [priority, setPriority] = useState("low");
  const [category, setCategory] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/tasks/", {
        title,
        description,
        dueDate,
        priority,
        category,
      });
      setSuccess("Task created successfully");
      setTitle("");
      setDescription("");
      setDueDate(null);
      setPriority("low");
      setCategory("");
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <div>
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>{/* ... */}</form>
    </div>
  );
}

export default TaskForm;
