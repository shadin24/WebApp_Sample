import React, { useState } from "react";
import "./Todo.css";

function Todo() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const addTodo = () => {
    if (value.trim() !== '') {
      setTodos((prevItems) => [...prevItems, value]);
      setValue(""); // Clear the input field after adding
    }
  };

  return (
    <div className="todo-container">
      <div className="todo-form">
        <label className="todo-label">Add Todo:</label>
        <input 
          type="text" 
          value={value} 
          onChange={handleChange} 
          className="todo-input" 
        />
        <button 
          onClick={addTodo} 
          className="todo-button"
        >
          Add
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((item, index) => (
          <li
            key={index}
            className="todo-item"
          >
            {item}
            <button 
              onClick={() => handleDelete(index)} 
              className="todo-delete-button"
            >
              Done
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
