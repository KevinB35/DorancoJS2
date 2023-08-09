import React from "react";
import { useParams, useLocation } from "react-router-dom";

const Article = () => {
  const { id = 1 } = useParams();
  const { state } = useLocation();

  return (
    <h1>
      {state ? state.title : "Pas de titre passé en parametre"} {id}
    </h1>
  );
};

export default Article;
