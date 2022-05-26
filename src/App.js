import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import DefaultHOC from './HOC/DefaultHOC';

import HomePage from './Pages/HomePage';
import MoviePage from './Pages/MoviePage';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultHOC element={HomePage} />} />
        <Route path="/movies" element={<DefaultHOC element={MoviePage} isMovie={true} />} />
      </Routes>
    </>

  );
}
export default App;