import React from "react";
import "../styles/TodoTile.css";

function Todos({ todoList, deleteTodo }) {
  return (
    <>
      {todoList.length === 0 ? (
        <div style={{ textAlign: "center" }}>No todos added yet</div>
      ) : (
        <div className="todos-container">
          {todoList.map((todo, index) => {
            return (
              <>
                <div className="todo-tile">
                  <div>{todo.data}</div>
                  <div>
                    <button
                      onClick={() => {
                        deleteTodo(todo.id);
                      }}
                    >
                      Delete <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Todos;
