import React, { useEffect, useState } from "react";

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
    display: "block",
    width: "80%",
    margin: "0 auto 10px",
    backgroundColor: "#ecf0f1",
    //color: "black",
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
                  color: "white",
                }}
                onClick={() => {
                  handleSetOngoing(todo);
                }}
              >
                {todo.task}
              </span>
              <button onClick={() => handleDelete(todo.id)} style={btnStyle}>
                Supprimer
              </button>
            </div>
          ))}
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
          Ajouter
        </button>
      </div>
    </div>
  );
};

export default TP;
