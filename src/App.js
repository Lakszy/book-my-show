import './App.css';
import { Routes, Route } from "react-router-dom";
import axios from 'axios';
import DefaultHOC from './HOC/DefaultHOC';

import HomePage from './Pages/HomePage';
import MoviePage from './Pages/MoviePage';
import Explore from './Pages/explorePage';

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_AvBMSApiKey;

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultHOC element={HomePage} />} />
        <Route path="/movie/:id" element={<DefaultHOC element={MoviePage} isMovie={true} />} />
        <Route path="/explore/:topic" element={<DefaultHOC element={Explore} isExpo={true} />} />
      </Routes>
    </>

  );
}
export default App;