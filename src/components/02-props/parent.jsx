import React, { useState } from "react";
import Enfant from "./enfant";

const Parent = () => {
  const [prenom, setPrenom] = useState("Kevin");
  const [age, setAge] = useState(29);
  const [ville, setVille] = useState("Lyon");

  const handleChange = () => {
    alert("Hello");
  };

  return (
    <div>
      <h1>Parent</h1>
      <Enfant pseudo={prenom} age={age} ville={ville} />
    </div>
  );
};

export default Parent;
