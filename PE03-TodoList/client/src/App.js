import React, { useState } from 'react';
import TodoList from './TodoList';
import './index.css'; 

const App = () => {
  // State to hold the list of todos and the current input value
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Function to handle adding a new ToDo item
  const handleAddTodo = () => {
    if (newTodo.trim() !== '') { // Ensure input is not empty
      const newTask = {
        id: Date.now(), // Generate a unique ID based on timestamp
        text: newTodo,
      };
      setTodos([...todos, newTask]); // Append the new task to the todos array
      setNewTodo(''); // Clear the input field after adding
    }
  };

  // Function to handle deleting a ToDo item by its ID
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id)); // Filter out the deleted task
  };

  return (
    <div className="app-container">
      <h1>Todo List App</h1>
      <div className="input-container">
        {/* Input field for entering a new task */}
        <input
          type="text"
          placeholder="Enter task description"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        {/* Button to add a new task */}
        <button onClick={handleAddTodo}>Add Task</button>
      </div>
      {/* Renders the TodoList component, passing the list and delete function */}
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
    </div>
  );
};

export default App;
