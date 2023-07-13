import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../styles/AddToDo.css";

function AddTodo({ addTodo }) {
  const [newTodo, setNewTodo] = useState("");
  const clearInput = () => {
    setNewTodo("");
  };
  return (
    <div className="add-todo-container">
      <input
        placeholder="Type here"
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (newTodo !== "") {
            clearInput();
            addTodo({ data: newTodo, id: uuidv4() });
          }
        }}
      >
        <i className="fa-sharp fa-solid fa-plus"></i>
      </button>
    </div>
  );
}

export default AddTodo;
