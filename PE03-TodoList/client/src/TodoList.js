import React from 'react';
import TodoItem from './TodoItem';

// Component for rendering the list of ToDo items
const TodoList = ({ todos, onDelete }) => {
  return (
    <ul className="todo-list">
      {/* Map through todos array and render each ToDo item */}
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default TodoList;
