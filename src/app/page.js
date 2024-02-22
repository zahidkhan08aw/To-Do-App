"use client";
import { useState } from "react";

export default function TaskForm() {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, { task, description }]);
    setTask("");
    setDescription("");
  };

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="max-w-lg mx-auto mt-8 bg-blue-200 rounded-lg shadow-lg p-6">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
          className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
          className="w-full mt-2 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="w-full mt-4 bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none"
        >
          Add Task
        </button>
      </form>
      <div>
        {tasks.map((task, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-md p-4 mb-4 flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{task.task}</p>
              <p>{task.description}</p>
            </div>
            <button
              onClick={() => handleDelete(index)}
              className="text-red-500 hover:text-red-600 focus:outline-none"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
