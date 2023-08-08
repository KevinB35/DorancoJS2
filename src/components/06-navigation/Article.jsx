import React from "react";
import { useParams } from "react-router-dom";

const Article = () => {
  const { id = 1 } = useParams();

  return <h1>Page article {id}</h1>;
};

export default Article;
