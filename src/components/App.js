import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import AddTodo from "./AddTodo";
import Todos from "./Todos";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (new_todo) => {
    const todos = [...todoList];
    localStorage.todoList = JSON.stringify([...todos, new_todo]);
    setTodoList([...todos, new_todo]);
  };

  const deleteTodo = (id) => {
    let todos = [];
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].id !== id) todos.push(todoList[i]);
    }
    localStorage.todoList = JSON.stringify([...todos]);
    setTodoList([...todos]);
  };

  useEffect(() => {
    const todos = localStorage.getItem("todoList");
    if (todos) {
      setTodoList([...JSON.parse(todos)]);
    }
  }, []);

  return (
    <>
      <Navbar />
      <AddTodo addTodo={addTodo} />
      <Todos todoList={todoList} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
