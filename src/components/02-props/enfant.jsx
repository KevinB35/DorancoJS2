import React from "react";

const Enfant = ({ pseudo, age, ville }) => {
  return (
    <>
      <h2>Enfant</h2>
      <p>Pseudo: {pseudo}</p>
      <p>Age: {age}</p>
      <p>Ville: {ville}</p>
    </>
  );
};

export default Enfant;
