import React, { useState } from "react";

import "./style.css";

function TodoList() {
  const [todo, setTodo] = useState({
    task: "",
    array: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTodo((prevTodo) => ({ ...prevTodo, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    todo.array.push({
      name: todo.task,
      isActive: true,
    });

    event.target.reset();

    setTodo((prevTodo) => ({ ...prevTodo, task: "" }));
  };

  const deleteTask = (indexTask) => {
    const arrayAfterDeleteTask = todo.array.filter((task, index) => {
      if (index !== indexTask) return task;
    });
    setTodo({ array: arrayAfterDeleteTask });
  };

  const updateTask = (indexTask) => {
    const arrayAfterpdate = todo.array.filter((task, index) => {
      if (index === indexTask) {
        task.isActive = !task.isActive;
      }
      return task;
    });
    setTodo({ array: arrayAfterpdate });
  };

  return (
    <div>
      <h1>Todo 🚀</h1>
      {todo.array.map((task, index) => (
        <div key={index}>
          <p
            className={task.isActive ? "" : "cross"}
            onClick={() => updateTask(index)}
          >
            {task.name}
          </p>
          <button onClick={() => deleteTask(index)}>delete</button>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='task'
          name='task'
          onChange={handleChange}
        />
        <button>Valider</button>
      </form>
    </div>
  );
}

export default TodoList;
