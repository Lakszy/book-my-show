import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import DefaultHOC from './HOC/DefaultHOC';

import HomePage from './Pages/HomePage';
function App() {
  return (
    <>
      <DefaultHOC path="/" element={HomePage} />
    </>

  );
}
export default App;