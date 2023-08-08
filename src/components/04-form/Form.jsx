import React, { useState } from "react";

const Form = () => {
  const [prenom, setPrenom] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState();

  const setMessageFlash = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage(undefined);
    }, 5000);
  };

  const checkForm = () => {
    if (prenom.length >= 3 && password.length >= 9) {
      setMessageFlash({
        status: "succes",
        message: `Compte de ${prenom} créé`,
      });
    } else if (prenom.length < 3 && password.length < 9) {
      setMessageFlash({
        status: "error",
        message: `Le prenom doit contenir au minimum 3 caracteres et le mot de passe 9`,
      });
    } else if (prenom.length < 3) {
      setMessageFlash({
        status: "error",
        message: `Le prenom doit contenir au minimum 3 caracteres`,
      });
    } else if (password.length < 9) {
      setMessageFlash({
        status: "error",
        message: `Le mot de passe doit contenir au minimum 9 caracteres`,
      });
    }
  };

  return (
    <div style={{ textAlign: "center", width: "100vw" }}>
      {message && (
        <div
          style={{
            margin: "0 auto",
            marginTop: 10,
            padding: 10,
            borderRadius: 5,
            width: 300,
            backgroundColor:
              message && message.status === "error" ? "red" : "green",
          }}
        >
          {message.message}
        </div>
      )}
      <form
        style={{
          margin: "0 auto",
          marginTop: 10,
          display: "grid",
          width: 200,
        }}
        onSubmit={(e) => {
          e.preventDefault();
          checkForm();
        }}
      >
        <label htmlFor='prenom'>Prenom</label>
        <input
          id='prenom'
          name='prenom'
          type='text'
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
        <label htmlFor='password'>Mot de Passe</label>
        <input
          id='password'
          name='password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button style={{ width: 70, margin: "0 auto", marginTop: 10 }}>
          Valider
        </button>
      </form>
    </div>
  );
};

export default Form;

/*
Créer un formulaire qui contient deux champs de saisie : un champ pour le prénom et un autre pour le mot de passe.

L'objectif est de récupérer les saisies du formulaire et de les afficher sur notre page après l'envoi du formulaire, seulement si le prénom n'est pas vide.

Il faudra également vérifier si le prénom contient au minimum 3 caractères et que le mot de passe contient au minimum 9 caractères. Si ces conditions sont satisfaites, afficher un message de succès dans la console.log().

Assurez-vous que le prénom s'affiche sur la page uniquement après l'envoi du formulaire, et non avant.
*/
