import React from 'react';

// Component for rendering an individual ToDo item
const TodoItem = ({ todo, onDelete }) => {
  return (
    <li className="todo-item">
      {todo.text} {/* Display the task text */}
      {/* Delete button to remove the task */}
      <button className="delete-button" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
