// src/Home.js
import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import CategoryFilter from './CategoryFilter';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const categories = [...new Set(tasks.map((task) => task.category))]; // Unique categories

  const filteredTasks = selectedCategory
    ? tasks.filter((task) => task.category === selectedCategory)
    : tasks;

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <CategoryFilter categories={categories} setSelectedCategory={setSelectedCategory} />
      <TaskList tasks={filteredTasks} />
    </div>
  );
};

export default Home;
