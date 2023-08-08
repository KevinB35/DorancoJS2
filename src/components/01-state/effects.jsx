import React, { useEffect, useState } from "react";

const Effects = () => {
  const [prix, setPrix] = useState(10);
  const [total, setTotal] = useState(10);
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    if (changed)
      alert(`La valeur totale a été modifée. Elle est maintenant de ${total}`);
  }, [changed, total]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Prix</h1>
      <p>Prix: {prix}</p>
      <button onClick={() => setPrix(prix + 5)}>+ 5</button>

      <h1>Total</h1>
      <p>Total: {total}</p>
      <button
        onClick={() => {
          setChanged(true);
          setTotal(total + 5);
        }}
      >
        + 5
      </button>
    </div>
  );
};

export default Effects;

/* 
créer un fichier effect.jsx

  Créer un state prix et total avec une valeur définit

 GÉNÉRER un button pour prix et total qui nous permettrons 
 de les incrémenter de cinq à chaque clique.

 rajouter ensuite le hook useEffect qui s'active 
 uniquement quand la valeur de total change et non du prix, 
 cette function doit contenir une alert pour prévenir du changement 
 de valeur.

Faites en sorte que l'alerte n'apparaisse pas au chargement de la page, mais seulement après une modification.
 */
