import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";

const TP = () => {
  const [todos, setTodos] = useState([]);
  const [current, setCurrent] = useState("");

  // Ajouter une tache
  const handleSubmit = () => {
    setTodos([
      ...todos,
      {
        id: todos.reduce((curr, todo) => Math.max(todo.id, curr), -1) + 1,
        task: current,
        ongoing: true,
      },
    ]);
  };

  // Supprimer une tache
  const handleDelete = (id) => {
    setTodos(todos.filter((todoState) => todoState.id !== id));
  };

  // Mettre a jour le "statut" d'une tache (Si elle est barrée ou non)
  const handleSetOngoing = (todo) => {
    setTodos(
      todos.map((todoState) =>
        todoState.id === todo.id
          ? { ...todoState, ongoing: !todoState.ongoing }
          : todoState
      )
    );
  };

  const btnStyle = {
    marginLeft: 10,
    backgroundColor: "#ecf0f1",
    color: "black",
    textAlign: "center",
    border: "none",
    padding: 10,
    borderRadius: 5,
    cursor: "pointer",
  };

  const inputStyle = {
    margin: "0 auto 10px",
    backgroundColor: "#ecf0f1",
    color: "black",
    textAlign: "center",
    border: "none",
    padding: 10,
    borderRadius: 5,
  };

  // Pour remettre a zero l'input uniquement une fois que le todo a ete ajoute a la liste
  useEffect(() => setCurrent(""), [todos]);

  return (
    <div style={{ width: "100vw", textAlign: "center" }}>
      <div style={{ width: 300, margin: "20px auto" }}>
        {todos.length > 0 &&
          todos.map((todo) => (
            <div key={todo.id} style={{ margin: "10px 0" }}>
              <span
                style={{
                  cursor: "pointer",
                  textDecoration: todo.ongoing ? "" : "line-through",
                  color: todo.ongoing ? "white" : "grey",
                  transition: "all 200ms linear",
                }}
                onClick={() => {
                  handleSetOngoing(todo);
                }}
              >
                {todo.task}
              </span>
              <button onClick={() => handleDelete(todo.id)} style={btnStyle}>
                <FontAwesomeIcon icon={faTrash} style={{ color: "black" }} />
              </button>
            </div>
          ))}
        <div>
          <input
            style={inputStyle}
            type='text'
            value={current}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmit();
            }}
            onChange={(e) => setCurrent(e.target.value)}
          />
          <button onClick={handleSubmit} style={btnStyle}>
            <FontAwesomeIcon icon={faCheck} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TP;
