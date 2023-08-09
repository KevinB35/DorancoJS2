import "./App.css";
import Exemple from "./components/00-jsx";
import State from "./components/01-state";
import Parent from "./components/02-props/parent";
import Counter from "./components/03-counter/Counter";
import Form from "./components/04-form/Form";
import TP from "./components/05-tp/TP";
import Article from "./components/06-navigation/Article";
import Header from "./components/06-navigation/Header";
import { Route, Routes } from "react-router-dom";
import ParentClasse from "./components/07-class/parent";

function App() {
  return (
    <>
      {/*<Header />*/}
      <Routes>
        <Route path='/' element={<Header />}>
          <Route path='/jsx' element={<Exemple />} />
          <Route path='/state' element={<State />} />
          <Route path='/props' element={<Parent />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/form' element={<Form />} />
          <Route path='/tp' element={<TP />} />
          <Route path='/article/:id?' element={<Article />} />
          <Route path='/class' element={<ParentClasse />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
