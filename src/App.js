import "./App.css";
import Exemple from "./components/00-jsx";
import State from "./components/01-state";
import Parent from "./components/02-props/parent";
import Counter from "./components/03-counter/Counter";
import Form from "./components/04-form/Form";
import TP from "./components/05-tp/TP";
import Header from "./components/06-navigation/Header";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <h1>Accueil</h1>,
    },
    {
      path: "/jsx",
      element: <Exemple />,
    },
    {
      path: "/state",
      element: <State />,
    },
    {
      path: "/props",
      element: <Parent />,
    },
    {
      path: "/counter",
      element: <Counter />,
    },
    {
      path: "/form",
      element: <Form />,
    },
    {
      path: "/tp",
      element: <TP />,
    },
  ]);

  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
