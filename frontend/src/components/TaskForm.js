// TaskForm.js
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function TaskForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, due_date: dueDate });
    setTitle("");
    setDescription("");
    setDueDate(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div>
        <label htmlFor="due_date">Due Date</label>
        <DatePicker
          id="due_date"
          selected={dueDate}
          onChange={(date) => setDueDate(date)}
        />
      </div>
      <button type="submit">Create Task</button>
    </form>
  );
}

export default TaskForm;
